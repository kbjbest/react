import React from "react";

import "./Card.css";

const Card = (props) => {
  console.log("Card!!!");
  console.log(props);
  console.log(props.items);
  let filterValue;

  if (props.items.length === 0) {

  } else {
    filterValue = props.items.map((item) => (
      <input type="text" value={item} readOnly />
    ));
  }

  return (
    <div>
      {/* <input type="text" value={props.items} readOnly /> */}
      {filterValue}
    </div>
  );
};

export default Card;
