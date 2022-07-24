import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../graphql/mutation";

const UpdataUser = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const [updataUser, { loading, data, error, called }] = useMutation(
    UPDATE_USER,
    {
      variables: {
        name: name,
        id: id,
      },
    }
  );

  console.log({ loading, data, error, called });

  return (
    <div>
      <input
        type={"text"}
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter ID"
      />
      <input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />

      <button onClick={() => updataUser()}>Create User</button>
    </div>
  );
};
export default UpdataUser;
