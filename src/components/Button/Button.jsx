import React from 'react';
import './Button.css';


function Button({type,title,disable,onClick}) {
    const className = `btn ${
        (type === "add" && "add")||
        (type === "remove" && "remove")||
        (type === "checkout" && "checkout")
      }`;    

    return(
        
<div>
<button 
className={className}
disabled={disable}
onClick={onClick}
>{title}
</button>
  </div>
    );
}

export default Button;