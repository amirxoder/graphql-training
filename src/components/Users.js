import React from "react";
import { useQuery } from "@apollo/client";

import { GET_USERS } from "../graphql/query";

const Users = () => {
  const { loading, data, error } = useQuery(GET_USERS);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h4>something went wrong</h4>;
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        placeItems: "center",
        gap: "1rem",
      }}
    >
      {data.users.data.map((user) => (
        <div
          key={user.id}
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <p>{user.id}-</p>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
