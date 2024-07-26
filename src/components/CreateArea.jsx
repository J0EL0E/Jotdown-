import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


function CreateArea(props) {

    const [value, setValue] = useState({
        title: "",
        content: ""
    });
    const [isEmpty, setIsEmpty] = useState(true);


    return (
        <div className='create-area-container' style={isEmpty === true ? { height: "100px" } : { height: "150px" }}>
            <form action="/" method="post" onChange={(event) => {
                const { name, value } = event.target;
                if (name !== "") {
                    setValue(prevItem => {
                        return ({ ...prevItem, [name]: value })
                    });
                }
                setIsEmpty(false)

            }}>
                <textarea placeholder='Type your title here' name='title' value={value.title}></textarea>
                <input type="text" name="content" placeholder="Type your content here" style={isEmpty === true ? { display: "none" } : { display: "block" }} value={value.content} />
                <button type='submit' style={isEmpty === true ? { display: "none" } : { display: "block" }} className='add-button' onClick={(event) => {
                    event.preventDefault();
                    props.onAdd(value);
                    setValue({
                        title: "",
                        content: ""
                    });
                }}><AddIcon style={{ color: "#FFF5E1", height: "30px", width: "30px", margin: "10px 0" }} /></button>
            </form>

        </div >
    );
}

export default CreateArea
