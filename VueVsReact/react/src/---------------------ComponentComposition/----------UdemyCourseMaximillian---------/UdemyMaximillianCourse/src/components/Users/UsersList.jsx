import { React, useState, useRef } from "react";
import Card from "./components/UI/Card/Card";

const UsersList = ({ users }) => {
  console.log(users);
  return (
    <Card>
      <div className="col-md-6">
        <h4>List of users</h4>
        <ul className="list-group">
          {/*checking if the prop exists before mapping*/}
          {users
            ? users.map((user) => (
                <li key={user.id} className="list-group-item">
                  {user.name}
                </li>
              ))
            : "<p>No users</p>"}
        </ul>
      </div>
    </Card>
  );
};

export default UsersList;
