import { ref, watchEffect } from "vue";
import { db } from "@/firebase/config";
import {
  DocumentData,
  DocumentSnapshot,
  FirestoreError,
  DocumentReference,
} from "@firebase/firestore-types";

// Create a general purpose function to get passed collection
// Q: I believe this should be async?
function getDocument(collection: string, id: string) {
  // Create refs for document and error since they are unique to collection
  // Q: Better type for documents? If I use FS Types I get errors.
  // A: Use generic types 'object | null' and it works later when updating document.value
  // const document = ref<object | null>(null); // Works but later issues
  // Q: What about making more specific? With object I run into errors later on
  // when trying to confirm playlist.value.userId == user.value.uid
  // const document = ref<DocumentSnapshot<DocumentData> | null>(null); // document.value ERROR...
  // Let's try to type my ref generically to Ref<T> per the docs
  // const document = ref(null) as Ref<object | null>;  // works
  // const document = ref(null) as Ref<DocumentSnapshot<DocumentData> | null>; // TS 2740
  // const document = ref(null) as Ref<DocumentReference | null>; // nope
  // const document = ref(null) as Ref<DocumentData | null>; // works
  // const document = ref(null) as Ref<Playlist | null>; // works
  const document = ref<DocumentData | null>(null); // works (same as above)
  const error = ref<string | null>(null);

  // Create a FS Ref for our document as well and sort
  const documentRef = db.collection(collection).doc(id) as DocumentReference<
    DocumentData
  >;

  // Let's now use onSnapshot() to add real-time listener for QuerySnapshot events
  // NOTE onNext callback returns snapshot object that contains the doc
  // NOTE We didn't chain .onSnapshot() so we can keep it more general purpose
  // use in other places in this function if needed.
  // UPDATE Storing this in const to unsubscribe from listener after a component un-mounts
  const unsubscribe = documentRef.onSnapshot(
    (doc: DocumentSnapshot<DocumentData>) => {
      console.log("snapshot"); // Keeping track of how many times the listener stacks up
      // Confirm that the 'doc' actually exists
      // NOTE: Shaun used if (doc.data())
      if (doc.exists) {
        console.log("PASSED:doc.exists");
        // We have a doc. Let's update our document.value Ref by spreading
        // TS ERROR: We meet again! hahah
        document.value = {
          ...(doc.data() as DocumentData),
          id: doc.id,
        };
        console.log("UPDATED:document.value: ", document.value);
        // Reset the error.value in case there was one
        error.value = null;
      } else {
        error.value = "This document does not exist.";
      }
    },
    (err: FirestoreError) => {
      // In case we get an error. We don't use try/catch with onSnapshot()
      console.log(err.message); // Internal FirestoreError
      // Reset document.value to be null
      document.value = null;
      // Update error.value
      error.value = "Could not fetch documentRef onSnapshot data.";
    }
  );

  // === Unsusbscribe to our real-time listeners when component un-mounts
  watchEffect((onInvalidate) => {
    // Unsusbscribe from prev document when watcher is stopped (component unmounted)
    // NOTE onInvalidate function runs when component un-mounts.
    onInvalidate(() => {
      // NOTE It's at THIS point that we will unsubscribe our real-time listener
      // We simply store our listener function (getDocument) into a const and re-invoke to stop.
      unsubscribe();
    });
  });

  return { document, error };
}

export default getDocument;
