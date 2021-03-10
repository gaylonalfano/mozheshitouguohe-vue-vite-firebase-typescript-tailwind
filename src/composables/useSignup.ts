import { ref } from "vue";
// import { auth } from "@/firebase/config";
import { auth } from "../firebase/config";

// Create an error Ref. Just once! Don't declare inside useSignup()!
const error = ref<string | null>(null);
// Add Ref for whenever making a request
const isPending = ref<boolean>(false);

// Create a signup function to do the actual signing up of users
// NOTE this function returns Promise<void | firebase.auth.UserCredential>
// but you can't type it without getting errors, so best just don't type it!
async function signup(email: string, password: string, displayName: string) {
  // Reset error.value Ref to 'undefined' for each signup attempt
  // NOTE This resets it for the user in case their attempt fails
  error.value = null;
  isPending.value = true;

  // We'll use await to attempt to sign the user in using FB auth
  try {
    const response = await auth.createUserWithEmailAndPassword(email, password);
    // Confirm we have a response object returned, or throw error
    if (!response) {
      throw new Error("Could not complete signup.");
    }

    // Let's update the displayName since it's undefined when first registering
    // via auth.createUserWithEmailAndPassword().
    // NOTE Use await to process this.
    await response.user?.updateProfile({ displayName });

    // Let's return the response object so we can do other things with it.
    // NOTE response is Type firebase.auth.UserCredential
    isPending.value = false;
    return response;
  } catch (err) {
    console.log(err.message);
    // Update error Ref value with err.message
    error.value = err.message;
    isPending.value = false;
  }
}

// Creating a useSignup 'interface' of functionality so-to-speak
// NOTE No need to declare/invoke signup() inside here, as this will
// create a new version of signup() every time useSignup() is ran!
// We just need to return a reference to signup
function useSignup() {
  return { error, signup, isPending };
}

export default useSignup;
