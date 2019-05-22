import React from 'react';

const TicketArea = (props) => {
    return (
        <div className={props.ticket_area}>
            <div className="order_area fuente">ORDEN</div>
            <div className="ticket_items fuente"> #   Item   Costo</div>
            <div className="count_area">
                
            
            </div>

        </div>
    )
}

export default TicketArea;

