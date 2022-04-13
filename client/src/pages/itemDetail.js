import React from 'react';

const ItemDetail = ({ itemInfo, handleItem }) => {
  const handleClick = (e) => {
    handleItem(e.target.id);
  };
  return (
    <div>
      <button id="9" onClick={(e) => handleClick(e)}>
        상세페이지
      </button>
      <p>{itemInfo.id}</p>
      <p>{itemInfo.itemName}</p>
      <p>{itemInfo.brand}</p>
      <p>{itemInfo.buyPrice}</p>
      <p>{itemInfo.sellPrice}</p>
      <p>{itemInfo.size}</p>
      <p>{itemInfo.quantity}</p>
      <img src={itemInfo.img} alt="img" />
    </div>
  );
};

export default ItemDetail;
