import { useContext } from "react";
import { SaladContext } from "./SaladProvider";
import { UserContext } from "./UserProvider";

// Exposes context in custom hooks.
// Everything within is exposed, from the Provider.
// usage:

/* const { addSalad } = useSalad();
   const { addFavorite } = useUser();
*/

export function useSalad() {
  const context = useContext(SaladContext);
  /*   console.log("THIS IS SALADCONTEXT", context);
   */ if (context == null) {
    throw new Error(`useSalad must be used within a SaladProvider.`);
  }
  return context;
}

export function useUser() {
  const context = useContext(UserContext);
  /*   console.log("THIS IS USERCONTEXT", context);
   */ if (context == null) {
    throw new Error(`useUser must be used within a userProvider.`);
  }
  return context;
}
