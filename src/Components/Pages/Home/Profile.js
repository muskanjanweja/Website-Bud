import React from "react";

export default function Profiles() {
  return (
    <div id="profile">
      {Item()}
    </div>
  )
}

function Item() {
  return (
    <div className="flex">
      <div className="item">
        <img src="" alt="" />

        <div className="info">
          <h3 className="name text-dark">Name</h3>
          <span>Location</span>
        </div>
      </div>
      <div className="item">
        <span>Score</span>

      </div>

    </div>
  )
}