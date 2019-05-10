import React from 'react';

const ticketSection = (props) => {
    return (
        <div className={props.buttonClass}>
            <div style={props.buttonStyle}>
                {props.image}
                <div className="button-body">
                    <p className="button-title">{props.buttonTitle}</p>
                </div></div></div>
    )
}


    