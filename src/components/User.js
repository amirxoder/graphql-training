import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/query";

const User = () => {
  const [id, setId] = useState("");

  const { loading, data, error } = useQuery(GET_USER, {
    variables: { id: id },
  });

  console.log({ loading, data, error });

  return (
    <div>
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter ID"
        type="text"
      />
      {loading && <p>loading</p>}
      <h4>{data?.user?.name}</h4>
      <p>{data?.user?.email}</p>
      <p>{data?.user?.phone}</p>
    </div>
  );
};

export default User;
