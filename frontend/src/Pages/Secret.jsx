import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../redux/authSlice";
import { todoThunk, showtodoThunk, addtodoThunk, deletetodoThunk } from "../redux/todoSlice";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Secret() {
  const todo = useSelector((state) => state.todoReducer.todo);
  const showtodo = useSelector((state) => state.todoReducer.showtodo[0]);
  const dispatch = useDispatch();

  const [addList, setAddList] = useState({
    list: "",
  });

  useEffect(() => {
    dispatch(todoThunk());
    dispatch(showtodoThunk());
  }, [dispatch, addtodoThunk]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddList((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    console.log(addList);
  };

const handleRemoveList = (i) =>{
  // let newList = addList;
  // newList.splice(i, 1);
  // setAddList(newList);
  // dispatch(deletetodoThunk(addList))
  // console.log(addList);
}



  return (
    <div>
      <h1>To do List</h1>
      <p>You have logged in successfully</p>
      {todo.map((element, index) => (
        <p key={index}>{element}</p>
      ))}

      {showtodo && showtodo.map((element, index) => (
        <>

              <p key={index}>
                {element}
              </p>
              <Button onClick={handleRemoveList(index)
              }> Delete </Button>

        </>
      ))}

      <br />




      <input
        type="text"
        placeholder="add something here ..."
        name="list"
        onChange={handleChange}
      />
      <Button
        onClick={() =>
          dispatch(addtodoThunk(addList))
        } >add</Button>

<br />

      <button onClick={() => dispatch(logoutThunk())}>Logout</button>

      <Card style={{ height: '25rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>


    </div>
  );
}
