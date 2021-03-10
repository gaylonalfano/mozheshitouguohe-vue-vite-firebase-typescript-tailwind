import { ref } from "vue";
import { db } from "@/firebase/config";

// Need ability to edit or delete a document
// NOTE Could add this to useCollection.ts but this separates
// the two - modify collections vs. modify documents.
function useDocument(collection: string, docId: string) {
  // Need error ref and document ref
  const error = ref<string | null>(null);
  const isPending = ref<boolean>(false);

  // NOTE Create a FS document Ref since we can later expand this composable
  // to add more functionality like editing the document
  // NOTE Using 'let' in case we change the FS Ref inside a func later on
  let documentRef = db.collection(collection).doc(docId);

  // Create async function that deletes the document using FS delete()
  // NOTE No need to define collection and docId parameters as it's redundant
  async function deleteDoc() {
    // Reset error.value = null for every request
    error.value = null;
    isPending.value = true;

    // Try to delete using FB built-in delete() method
    try {
      const response = await documentRef.delete();
      console.log("DELETED:deleteDoc:response: ", response);

      // Done processing so let's reset isPending
      isPending.value = false;
      // Let's return the response in case we want to use it later
      return response;
    } catch (err) {
      error.value = err.message;
      isPending.value = false;
      console.log("FAILED: Could not delete the document.");
    }
  }

  // Create async function that UPDATES the document using FS update(updatesObj)
  async function updateDoc(updatesObj: object) {
    // Reset error.value = null for every request
    error.value = null;
    isPending.value = true;

    // Try to update using FB built-in update() method
    // NOTE Only pass in object with props to update
    try {
      const response = await documentRef.update(updatesObj);
      console.log("UPDATED:updateDoc:response: ", response);

      // Done processing so let's reset isPending
      isPending.value = false;
      // Let's return the response in case we want to use it later
      return response;
    } catch (err) {
      error.value = err.message;
      isPending.value = false;
      console.log("FAILED: Could not update the document.");
    }
  }
  return { error, isPending, deleteDoc, updateDoc };
}

export default useDocument;
