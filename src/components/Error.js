import React from "react";

export default function Error(props) {
  return (
    <div className="error">
      <p>{props.text}</p>
      <span>😔</span>
    </div>
  );
}
