import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutation";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [createUser, { loading, data, error, called }] = useMutation(
    CREATE_USER,
    {
      variables: {
        name: name,
        username: userName,
        email: email,
        phone: phone,
      },
    }
  );

  console.log({ loading, data, error, called });

  return (
    <div>
      <input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        type={"text"}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter UserName"
      />
      <input
        type={"text"}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter Phone Number"
      />
      <input
        type={"text"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
      />
      <button onClick={() => createUser()}>Create User</button>
    </div>
  );
};

export default CreateUser;
