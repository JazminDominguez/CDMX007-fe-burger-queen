import React from 'react';

const TicketHead =(props) =>{
    return (
        <div className={props.ticket_head}>
        <div className="ticket_icon_area">
         <div className="menu_icon"  id="micon"></div>
            <div className="gear_icon" id="gcon"></div>
            <div className="signout_icon" id="sicon"></div>
        </div>
        </div>
    )
}

export default TicketHead;