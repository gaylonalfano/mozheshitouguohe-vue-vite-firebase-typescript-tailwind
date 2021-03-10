import { ref } from "vue";
//import { auth } from "@/firebase/config";
import { auth } from "../firebase/config";

const error = ref<string | null>(null);
// Add Ref for whenever making a request
const isPending = ref<boolean>(false);

async function login(email: string, password: string) {
  // Reset error.value to null/undefined at each attempt to login
  error.value = null;
  // Request has started so let's toggle isPending
  isPending.value = true;

  // Let's use FB auth to login a user
  try {
    const response = await auth.signInWithEmailAndPassword(email, password);

    // NOTE Shaun doesn't bother with this check
    // if (!response) {
    //   throw new Error("Login unsuccessful. Double-check your credentials.");
    // }

    // Reset error.value to null/undefined in case previously had a value/message
    // FIXME I don't believe this is actually necessary because we reset
    // error.value at the top each time this function is invoked.
    // error.value = undefined;

    // Return the response object (firebase.auth.UserCredential)
    console.log(response);
    // Reset our isPending back to false since request is over
    isPending.value = false;
    return response;
  } catch (err) {
    console.log(err.message); // Internal Firebase default error message
    error.value = "Incorrect login credentials."; // Message displayed to user
    // Reset our isPending back to false since request is over
    isPending.value = false;
  }
}

function useLogin() {
  return { error, login, isPending };
}

export default useLogin;
