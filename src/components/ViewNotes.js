import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

function ViewNotes() {
  const myState = useSelector((state) => state.changeTheNumber);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Downloads</Button>
        </Card.Body>
      </Card>
      <div className="wrap">
        <h1 id="counter"></h1>
        <div className="wrap-btns">
          <button id="increment">+</button>
          <input type="text" value="myState" />
          <button id="decrement">-</button>
          <button id="reset">Reset</button>
        </div>
      </div>
    </>
  );
}

export default ViewNotes;
