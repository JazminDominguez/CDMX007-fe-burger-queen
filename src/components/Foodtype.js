import React from 'react';

const FoodType = (props) => {
    return (
        <div className={props.ticket_button}>
            <div className="ticket_buttonArea">
                <div className="burger_queen_icon" onClick={props.onClick}></div>
                <div className="btn ok low_button" onClick={props.onClick}></div>
            </div>
        </div>
    )
}

export default FoodType;