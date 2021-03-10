import { ref } from "vue";
import { db } from "@/firebase/config";

// NOTE This is a more general purpose composable
// so more functionality will be declared INSIDE.
function useCollection(collection: string) {
  // NOTE Defining an error Ref INSIDE this time
  // because we will use this composable with MULTIPLE
  // collections, and for each collection we need a unique
  // error variable (if there is one). E.g. Again, since we're
  // making this composable more generic, we need separate errors
  // per collection.
  const error = ref<string | null>(null);
  const isPending = ref<boolean>(false);

  // Create an async function that adds the document to collection
  async function addDoc(doc: object) {
    // Reset error.value = null for every request
    error.value = null;
    isPending.value = true;

    // Try to add a doc to collection
    try {
      // Save the response and return it so we can access the
      // new document.id and reroute to /playlists/:id
      const response = await db.collection(collection).add(doc);
      // Reset our isPending back to false since request is over
      isPending.value = false;
      console.log("addDoc:add:doc successful!", doc);
      console.log("addDoc:add:response: ", response);
      return response;
    } catch (err) {
      console.log(err.message);
      error.value = "Could not add document.";
      // Reset our isPending back to false since request is over
      isPending.value = false;
    }
  }

  return { error, addDoc, isPending };
}

export default useCollection;
