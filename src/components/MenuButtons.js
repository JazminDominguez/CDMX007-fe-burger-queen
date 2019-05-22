import React from 'react';

const ReusableButton = ({ img, name, price, addItemTicket }) => {

      
        const handleClick = () => {
      // function that will update the state values
      addItemTicket({img, name, price});
      // change the state they have initially active
    
        }
      
      return (
        <section className="row-butt">
        <section className="container-buttons">
          <section className="boxed" onClick={handleClick}>
        <section className="breakfastdata">
        <figure>
            <div className="circle-icon"></div>
                <img className="imageB" src={img} alt="imageicon" />
        </figure>
        
              {
              console.log('active button')
              }
            
                <div className="name">{name}</div>       
                <div className="price">$ {price} </div>
              </section> 
            </section>
      
          </section>
      
          </section>
                
      )
      };
      
export default ReusableButton;

  
