import React from 'react'
import ProductCard from '../data/productData'


const MainContent = () => {
  console.log(ProductCard);
  const listItems = ProductCard.map((item) => 
    
    <div className="card" key={item.id}>
      <div className="cardImg">
        <img src={item.thumb} alt="Headsets Fallen Store" />
      </div>
      
      <div className="cardHeader">
        <h2>{item.productName}</h2>
        <p>{item.description}</p>
        <p className="price">{item.price}<span>{item.currency}</span></p>
      </div>
      
      <div className="btn">
        Adicionar ao Carrinho
      </div>
    
    </div>
  );
  return(
    <div className="mainContent">
      <h3>Headsets</h3>
      {listItems}
    </div>
  );
}

export default MainContent;