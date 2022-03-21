// A better alternative for this pattern is COMPONENT INJECTION.
/* Variant: Component injection */
/* If we want to be able to use as many templates as we want, without having to modify the container each time, it is possible to directly pass the template component by props.
 */ // An extention of this pattern is to use "named slots" for a more dynamic composition.

import React, { Component } from "react";

// We import our two templates:

import TemplateRow from "./TemplateRow";
import TemplateCard from "./TemplateCard";

// And store them into an object

const templates = {
  row: TemplateRow,
  card: TemplateCard,
};


const Template = ({ toggleVisibillity, shownUsers, hiddenUsers }) => {
    return (
        <div>
            {/* // conditionally render based on toggleVisibillity */}
            {toggleVisibillity === shown ? (
                <div>
                    {shownUsers.map(user => (
                        { user }
                    ))}
                </div>
            ) : (
                <div>
                    {hiddenUsers.map(user => (
                        { user }
                    ))}
                </div>
            )
            }
        </div>
    );
};



const UserListContainer = ({template}) => {
  const [userList, setUserList] = useState([]);
  const [visibillity, setVisibillity] = useState(shown);

  const shownUsers = userList.filter(({ visible }) => visible);
  const hiddenUsers = userList.filter(({ hidden }) => hidden);

  // we select the template according to the prop with a fallback to the default template
  const Template = templates[{ template }] || TemplateRow;


   // Check a prop for a type and run a function if it matches
    // This is a common pattern in React
    // It's a good idea to use it in your components

  // Conditionally set setVisibillity to hidden based on template type
    useEffect(() => {
        if (template === "card") {
            setVisibillity(hidden);
        } else {
            setVisibillity(shown);
        }
    }, [template]);


  // Rendering the template
  return (
    <div>
      <h1>User List</h1>
      <Template shownUsers={shownUsers} hiddenUsers={hiddenUsers} toggleVisibillity={visibillity} />
    </div>
  );
};

export default userListContainer;


// Main component deciding which template we are rendering.
import React from "react"
import UserListContainer from "./Container";

const App = () => {
    return (
        <div>
            <UserListContainer template="row"/>
            <UserListContainer template="card"/>
        </div>
    );
}

export default App;