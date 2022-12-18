import { useSalad, useUser } from "../Hooks/UseContext";

export default function SaladSummary () {
  const { salads } = useSalad();
  const { user } = useUser();
  const { removeSalad } = useSalad();

  console.log(user);
  console.log(salads);

  return (
    <div>
      <h2>Your Salad</h2>
      {salads ? (
        <ul>
          {salads.map(({ name, id }) => (
            <>
              <li key={id}>{name}</li>
              <button onClick={() => removeSalad(id)}>Remove Salad</button>
            </>
          ))}
        </ul>
      ) : null}
      <h2>Your Favorites</h2>
      {user ? (
        <ul>
          {user.favorites.map((item) => (
            <li key={Math.random()}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
