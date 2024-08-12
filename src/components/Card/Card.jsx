import React,{useState} from 'react';
import './Card.css';
import Button from '../Button/Button';


function Card({ food,onAdd,onRemove }) {
    const { id, title, price, Image } = food;
    const [count, setCount] = useState(0);
  
    const handleIncrement = () => {
      setCount(count + 1);
      onAdd(food);
    };
  
  
    const handleDecrement = () => {
      setCount(count - 1);
      onRemove(food);
    };


    return (
    <div className="card">
      <span className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}>
        {count}
      </span>
      <h4 className="card_title">
        {title} <br />
         <span className="card_price">{price}Birr</span>
      </h4>
      <div className="img-container">
        <img src={Image} alt={title} />
      </div>
      <div className="btn-container">
        <Button title={"+"} type={"add"} onClick={handleIncrement} />
        {count !== 0 ? (
          <Button title={"-"} type={"remove"} onClick={handleDecrement} />
        ) : null}
      </div>
    </div>
  );
  }
  
  export default Card;
  