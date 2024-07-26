import React from 'react'
import '../main.css';

function Footer() {
    const date = new Date().getFullYear();
    return (

        <footer>
            <p>Copyright <span>	&copy;</span> {date}</p>
        </footer>
    )
}

export default Footer
