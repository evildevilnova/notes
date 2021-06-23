import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

const Notes = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    
    return(
        <>
            <div className="col-md-4 col-8 mx-md-0 mx-auto pb-5">
                <div className="border shadow align-top">
                    <h4 className="pt-3 px-3">{props.title}</h4>
                    <p className="px-3 pt-0">{props.content}</p>
                    <Button onClick={deleteNote} color="secondary" ><DeleteOutlineIcon color="secondary" /></Button>
                    <Button ><EditIcon style={{ color: "#fff"}}/></Button>
                </div>
            </div>      
        </>
    );
};

export default Notes;