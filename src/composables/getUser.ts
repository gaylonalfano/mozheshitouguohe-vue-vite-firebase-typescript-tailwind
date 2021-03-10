import { ref } from "vue";
//import { auth } from "@/firebase/config";
import { auth } from "../firebase/config";

const user = ref(auth.currentUser); // ref<firebase.User | null>

// Use Firebase helper to watch/observe for user status state changes
// NOTE Technically adding an 'observer'
auth.onAuthStateChanged((_user) => {
  // Each sign-in/out let's update the user Ref value to keep reactive
  console.log("User state change. Current user is: ", _user);
  user.value = _user; // firebase.User | null
});

// Again, return a composable interface/reactive object to work with
function getUser() {
  return { user };
}

export default getUser;
