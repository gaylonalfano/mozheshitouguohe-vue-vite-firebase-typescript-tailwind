import { ref, watchEffect } from "vue";
import { db } from "@/firebase/config";
import {
  QuerySnapshot,
  QueryDocumentSnapshot,
  DocumentData,
  FirestoreError,
} from "@firebase/firestore-types";

// Create a general purpose function to get passed collection
// Q: I believe this should be async?
function getCollection(collection: string) {
  // Create refs for documents and error since they are unique to collection
  // Q: Better type for documents?
  const documents = ref<QueryDocumentSnapshot<DocumentData>[] | null>(null);
  const error = ref<string | null>(null);

  // Create a ref for our collection as well and sort
  // NOTE Type is CollectionReference<DocumentData>
  const collectionRef = db.collection(collection).orderBy("createdAt");

  // Let's now use onSnapshot() to add real-time listener for QuerySnapshot events
  // NOTE onNext callback returns snapshot object that contains all the docs, etc.
  // NOTE We didn't chain .onSnapshot() so we can keep it more general purpose
  // use in other places in this function if needed.
  // UPDATE Storing this in const to unsubscribe from listener after a component un-mounts
  const unsubscribe = collectionRef.onSnapshot(
    (snapshot: QuerySnapshot<DocumentData>) => {
      console.log("snapshot"); // Keeping track of how many times the listener stacks up
      // Use snapshot object to update documents Ref
      // Q: results even needed? map() returns Array already...
      // A: Yes, have problems using TS if I don't separate.
      // Q: Use map() or forEach()?
      // A: I believe forEach() since it doesn't return an Array like map().
      // A: We're already adding results Array to store.
      // let results: QueryDocumentSnapshot<DocumentData>[] = []; // Feel like I can skip this by improving my documents Ref
      // snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
      //   // Let's get all the doc data props and id
      //   results.push({ ...doc.data(), id: doc.id } as QueryDocumentSnapshot<
      //     DocumentData
      //   >);
      // });
      // // Update our documents with the new results
      // documents.value = results;
      // // Reset the error.value in case there was one
      // error.value = null;

      // === Alternative syntax using forEach()
      // Q: Use map() or forEach()?
      // A: I believe forEach() since it doesn't return an Array like map().
      // A: We're already adding results Array to store.
      let results: QueryDocumentSnapshot<DocumentData>[] = [];
      snapshot.docs.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        // NOTE Must add 'doc.data().createdAt &&' logic to check whether server-side createdAt has a value!
        // Otherwise it will use a local version of snapshot and createdAt, which will
        // be more like a REFERENCE to a timestamp, instead of the real thing in the server.
        doc.data().createdAt &&
          results.push({ ...doc.data(), id: doc.id } as QueryDocumentSnapshot<
            DocumentData
          >);
      });
      // Update our documents with new results
      documents.value = results;
      // Reset the error.value in case there was one
      error.value = null;
    },
    (err: FirestoreError) => {
      // In case we get an error. We don't use try/catch with onSnapshot()
      console.log(err.message); // Internal FirestoreError
      // Reset documents.value to be null
      documents.value = null;
      // Update error.value
      error.value = "Could not fetch collectionRef onSnapshot data.";
    }
  );

  // === Unsusbscribe to our real-time listeners when component un-mounts
  watchEffect((onInvalidate) => {
    // Unsusbscribe from prev collection when watcher is stopped (component unmounted)
    // NOTE onInvalidate function runs when component un-mounts.
    onInvalidate(() => {
      // NOTE It's at THIS point that we will unsubscribe our real-time listener
      // We simply store our listener function (getCollection) into a const and re-invoke to stop.
      unsubscribe();
    });
  });

  return { documents, error };
}

export default getCollection;
