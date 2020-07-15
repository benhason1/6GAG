import React from 'react'
import './Popup.css'


function Popup(props) {
    return (
        <div className='popup' >
            <div className='popup_inner'>
                <div>{props.text}</div>
                <button id="close-button" onClick={props.closePopup}><img
                    alt="X"
                    className="icon"
                    src="close-button.png"
                /></button>
            </div>
        </div>
    )
}
export default Popup;