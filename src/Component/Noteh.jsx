import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import './App.css';

const Noteh = (props) => {

  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const {value, name} = event.target;
    setNote((preData) => {
      return {
        ...preData,
        [name]: value, 
      }
    }); 
  };

  const addEvent = () => {
    if(note.title !== ""){
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  } 
  }

  const expandIt = () => {
    setExpand(true);
  }

  const backtonorml = () => {
    setExpand(false);
  }

  return(
    <>
     <div className="container">
        <div className="row p-0 m-0">
          <div className=" col main_note my-2" onDoubleClick={backtonorml}>
            <form className="mt-4 p-0" style={{ backgroundColor:"#202124"}}>

            {expand?
              <div className="form-group mb-0">
                <input type="text" className="form-control" placeholder="Title" onChange={InputEvent} name="title" value={note.title} style={{backgroundColor: "#202124", color: "#ffff"}}/>
              </div> 
              :null}

              <div className="form-group mb-0">
              <textarea placeholder="Enter your Notes" className="form-control " onChange={InputEvent} name="content" value={note.content} onClick={expandIt} onDoubleClick={backtonorml} rows="2" column="" style={{backgroundColor: "#202124", color: "#ffff"}}></textarea>
              </div>

              {expand?
              <Button className="buttons" onClick={addEvent}> <NoteAddIcon color="disabled" style={{fontSize:35,color: "#F7AC1F"}} /> </Button>
              :null}

            </form>
          </div>
        </div>
    </div>
    
    </>
  );
};

export default Noteh;
