import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { DELETE_USER } from "./../graphql/mutation";

const DeleteUser = () => {
  const [id, setId] = useState("");
  const [deleteUser, { loading, data, error, called }] = useMutation(
    DELETE_USER,
    {
      variables: {
        id: id,
      },
    }
  );

  console.log({ loading, data, error, called });
  return (
    <div>
      <input type={"text"} value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => deleteUser()}>Delete User</button>
    </div>
  );
};

export default DeleteUser;
