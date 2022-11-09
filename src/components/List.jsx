import React from "react";
import { useSelector } from "react-redux";

export default function List() {
  const items = useSelector((state) => state.listReducer);
  return (
    <div>
      <ol>
        {items.map((item) => (
          <li key={Math.random}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
