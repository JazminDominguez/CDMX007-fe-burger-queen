import React from 'react';

/*const sampleCard = (props) => {
    return (
        <div class={props.cardColClass}>
            <div className={props.cardBorder} style={props.cardStyle}>
                {props.image}
                <div class="card-body">
                    <h5 class="card-title">{props.cardTitle}</h5>
                    <p class="card-text">
                        {props.cardText}</p>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
*/


const menuButton = (props) => {
    return (
        <div className={props.buttonClass}>
            <div style={props.buttonStyle}>
                {props.image}
                <div className="button-body">
                    <p className="button-title">{props.buttonTitle}</p>
                </div></div></div>
    )
}

export default menuButton;