import React from 'react';

const TicketButton = (props) => {
    return (
        <div className={props.ticket_button}>
            <div className="ticket_buttonArea">
                <button className="btn ok low_button" onClick={props.onClick}>Cancelar Orden</button>
                <button className="btn ok low_button" onClick={props.onClick}>Confirmar Orden</button>
            </div>
        </div>
    )
}

export default TicketButton;