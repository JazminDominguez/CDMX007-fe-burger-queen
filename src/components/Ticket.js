import React from 'react';

const TicketSection = (props) => {
    return (
        <div className={props.ticket_area}>
            <div className="ticket_icon_area"> 
            <div className="menu_icon"></div>
            <div className="gear_icon"></div>
            <div className="signout_icon"></div>
            </div>
            <div className="order_area">ORDEN</div>
            <div className="ticket_header"> #   Item   Costo</div>
            <div className="count_area"></div>
            <button className={props.className} onClick={props.onClick}>Cancelar Orden</button>
            <button className={props.className} onClick={props.onClick}>Confirmar Orden</button>

            </div>
    )
}

export default TicketSection;
