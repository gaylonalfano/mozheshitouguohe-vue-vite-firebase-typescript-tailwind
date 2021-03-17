// import { isRef, Ref, ref } from "vue";

// /**
//  * A boolean ref with a toggler
//  *
//  * @see   {@link https://vueuse.org/useToggle}
//  * @param [initialValue=false]
//  */
// export function useToggle(value: Ref<boolean>): () => boolean;
// export function useToggle(
//   initialValue?: boolean
// ): [Ref<boolean>, () => boolean];

// export function useToggle(initialValue: boolean | Ref<boolean> = false) {
//   if (isRef(initialValue)) {
//     return () => (initialValue.value = !initialValue.value);
//   } else {
//     const boolean = ref(initialValue);
//     const toggle = () => (boolean.value = !boolean.value);

//     return [boolean, toggle] as const;
//   }
// }

// ==== My slight tweaks/notes
import { isRef, Ref, ref } from "vue";

/**
 * A boolean ref with a toggler
 *
 * @see   {@link https://vueuse.org/useToggle}
 * @param [initialValue=false]
 */

// Type Declarations to handle boolean and Ref<boolean> args
function useToggle(value: Ref<boolean>): () => boolean;
function useToggle(initialValue?: boolean): [Ref<boolean>, () => boolean];

// Overwriting the function: https://www.sitepoint.com/javascript-functions-that-define-and-rewrite-themselves/
function useToggle(initialValue: boolean | Ref<boolean> = false) {
  console.log("useToggle triggered!");
  if (isRef(initialValue)) {
    console.log("useToggle:isRef(initialValue): ", initialValue);
    // When Ref is passed, return a simple toggle FUNCTION
    // E.g. const toggleDark = useToggle(isDark)
    return () => (initialValue.value = !initialValue.value);
  } else {
    console.log("useToggle:initialValue: ", initialValue);
    const boolean = ref(initialValue);
    const toggle = () => (boolean.value = !boolean.value);

    // E.g. const [value, toggle] = useToggle()
    return [boolean, toggle] as const;
  }
}

export default useToggle;
