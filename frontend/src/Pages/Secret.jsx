import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../redux/authSlice";
import { todoThunk, showtodoThunk, addtodoThunk, deletetodoThunk, edittodoThunk } from "../redux/todoSlice";
import Fade from 'react-bootstrap/Fade'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BsPencil } from "react-icons/bs";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

export default function Secret() {
  // const todo = useSelector((state) => state.todoReducer.todo);
  const showtodo = useSelector((state) => state.todoReducer.showtodo[0]);
  const dispatch = useDispatch();

  const [addList, setAddList] = useState({
    list: ""
  });

  const [editList, setEditList] = useState({
    edit: ""
  })

  useEffect(() => {
    dispatch(showtodoThunk());
  }, [addtodoThunk]);

  const handleChange = (event) => {
    const { name, value } = event.target;


    setAddList((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditList((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    console.log(editList);
  };

  const handleRemoveList = (event) => {
    console.log(event.target.id);
    dispatch(deletetodoThunk({ id: event.target.id }));
    document.getElementById(event.target.id).style.textDecoration = 'line-through'
  }

  const handleEditList = (event) => {
    if (event.target.localName == "svg") {
      // console.log(event.target.attributes[1].nodeValue)
      dispatch(edittodoThunk({ id: event.target.attributes[4].nodeValue, edit: editList.edit }));
      console.log(event.target.attributes[4].nodeValue)
    } else {
      dispatch(edittodoThunk({ id: event.target.nearestViewportElement.nextSibling.id, edit: editList.edit }));
      console.log(event.target.nearestViewportElement.nextSibling.id)

    }

  }

  return (
    <div style={{ border: "soild 2px black", padding: "11px" }}>
     
     <Fade in={true} appear={true} timeout={100000}>
     <h1 style={{fontStyle:"italic",fontFamily: 'Times New Roman, serif' }} className="h1card-subtitle text-muted text-center" >To do List</h1>
     
    </Fade>
     <br />
      <p class="form-control" aria-label="Text input with segmented dropdown button"> Welcome! You have logged in successfully.</p>

      <br />

      <div >




        <div class="input-group">
          <input type="text" name="list" placeholder="add something here ..." onChange={handleChange} class="form-control" aria-label="Text input with segmented dropdown button"></input>
          <div class="input-group-append">
            <Button
              onClick={() => dispatch(addtodoThunk(addList))}
              variant="dark"
            >
              add
            </Button>
          </div>
        </div>







      </div>

      <br />
      <p className="mb-2 text-muted text-center" style={{ textDecoration: 'underline',  fontSize:'16px', fontFamily:'Courier New, monospace'}}>Click the text to delete
        <br /> Click the pen to update</p>

      {/* list card */}
 



            {showtodo && showtodo.map((element, index) => (
              < >
                <div
                  style={{ display: "flex", margin: "4px", padding: "13px", border: "solid", borderRadius: '11px' }}
                >

                  {/* <button variant="light"
                    // id={element.id}
                    penid={element.id}
                    onClick={handleEditList}
                    style={{ border: "solid black 1px", margin: "10px" }}
                  >
                    Edit
                    <FontAwesomeIcon icon={faPen} 
                   penid={element.id}
                   style={{ border: "solid black 1px", margin: "5px" }}
                   onClick={handleEditList}/> */}


                  {/* </button> */}

                  <p key={index} id={element.id} onClick={handleRemoveList}>
                    {element.list}
                  </p>
                  <BsPencil

                    penid={element.id}
                    style={{ border: "solid black 1px", margin: "5px" }}
                    onClick={handleEditList}
                  />
                </div>
              </>
            ))}
            <div style={{ marginTop: "10px" }} >
              <input style={{float: 'right', clear: 'both', marginRight:"4px", width: "50%",  border: "solid" }} type="text" name="edit" placeholder="edit something here ..." onChange={handleEditChange} class="form-control"></input>

            </div>


    

      <br />

      <Button style={{ position: "relative", float: "left" }} variant="dark" onClick={() => dispatch(logoutThunk())}>Logout</Button>


    </div>
  );
}
