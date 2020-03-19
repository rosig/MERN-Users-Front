import React from "react";
import "./ListTitles.css";

function ListTitles() {
  return (
    <div className="list-titles-container">
      <div className="title-item">Name</div>
      <div className="title-item">Email</div>
      <div className="title-item">Occupation</div>
      <div className="title-item">Created</div>
    </div>
  );
}

export default ListTitles;
