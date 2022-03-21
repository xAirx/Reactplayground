/////////////////////////////////////////////////FetchData example////////////////////////////////////////////////////////////////////////////////

/*
Example 1:

So let's make that happen using a special hook called `useEffect`.

`useEffect` allows you to say "do a render of this component first so the user can see _something_ then as soon as the render is done,

_then_ do something(the something here being an effect.) In our case, we want the user to see our UI first then we want to make a request to the API so we can that initial list of pets. */

import react from "react";
import { useEffect, useState } from "react";
import Pet from "./Pet";

// add to the other useStates inside component at top
const [pets, setPets] = useState([]);

// add inside component, beneath all the `useState` setup
useEffect(() => {
  requestPets();
}, []); // eslint-disable-line react-hooks/exhaustive-deps

async function requestPets() {
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  const json = await res.json();

  setPets(json.pets);
}

// in jsx, under form, inside the larger div
{
  pets.map((pet) => (
    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
  ));
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////
