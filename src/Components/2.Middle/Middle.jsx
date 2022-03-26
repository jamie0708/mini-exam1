import React from 'react';
import '../../App.scss'
import './Middle.scss'
import photo from '../../Assets/Images/Vector (7).png'

function Middle() {
return (
<>
    <div className="nav">
        <h1 className="navTitle">
            Home
        </h1>

        <div className='selects'>
            <select className='langSelect' defaultValue="en">
                <option defaultValue="en">EN</option>
                <option defaultValue="ru">RU</option>
                <option defaultValue="uz">UZ</option>
            </select>

            <select className='' defaultValue="light">
                <option defaultValue="light">LIGHT</option>
                <option defaultValue="dark">DARK</option>
            </select>

            <img src={photo} alt="effects" />
        </div>
    </div>
</>
);
}

export default Middle;