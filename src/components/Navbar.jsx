import React from 'react'
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <StickyNote2Icon style={{ height: "30px", width: "30px", color: "white", alignSelf: "center", margin: "0 10px" }} />
            <h1 className='brand-name'>Jotdown</h1>
        </div>
    )
}

export default Navbar
