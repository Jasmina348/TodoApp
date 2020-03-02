import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/" >Home</Link>|
            <Link style={linkStyle} to="/about">About</Link>
        </header>
    );
}

const headerStyle = {
    background: '#3374ff',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
const linkStyle = {
    color: "#fff",
    backgroud: "#3374ff",
    padding:"10px"

}
export default Header;
