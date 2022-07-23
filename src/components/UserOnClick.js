import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_USER } from "../graphql/query";

const UserOnClick = () => {
  const [id, setId] = useState("");

  const [getUser, { loading, data, error, called }] = useLazyQuery(GET_USER, {
    variables: { id: id },
  });

  console.log({ loading, data, error, called });



  return (
    <div>
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter ID"
        type="text"
      />
      <button onClick={() => getUser()}>Get User</button>
      {loading && <p>loading</p>}
      {data && called && (
        <>
          <p>{data.user.name}</p>
        </>
      )}
    </div>
  );
};

export default UserOnClick;
