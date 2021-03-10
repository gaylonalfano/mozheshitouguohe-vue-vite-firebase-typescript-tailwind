import { ref } from "vue";
// import { auth } from "@/firebase/config";
import { auth } from "../firebase/config";

// Create a Global Error
const error = ref<string | null>(null);
// Add Ref for whenever making a request
const isPending = ref<boolean>(false);

async function logout() {
  // Reset the error.value in case of an error each time executed
  error.value = null;
  isPending.value = true;

  // Attempt to logout/signout
  try {
    await auth.signOut();
    // Reset our isPending back to false since request is over
    isPending.value = false;
  } catch (err) {
    console.log(err.message); // Default Firebase error
    error.value = err.message;
    // Reset our isPending back to false since request is over
    isPending.value = false;
  }
}

function useLogout() {
  return { error, logout, isPending };
}

export default useLogout;
