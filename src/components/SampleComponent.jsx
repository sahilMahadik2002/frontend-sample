
// UserProfile.jsx

import React from "react";

function UserProfile({ user }) {
  return (
    <div>
      <h1>Added One More PR</h1>
      <h1>Added One More PR</h1>
      <h1>Added One More PR</h1>
      <h1>Added One More PR</h1>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default UserProfile;
