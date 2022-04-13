import React from 'react';

const BuyCartsPost = ({ buyCartsPost, handlebuyCarts }) => {
  const handleClick = (e) => {
    handlebuyCarts({ userid: e.target.id, itemid: e.target.value });
  };
  return (
    <div>
      <button id="9" value="299" onClick={(e) => handleClick(e)}>
        관심목록
      </button>

      <p>{buyCartsPost.id}</p>
      <p>{buyCartsPost.itemId}</p>
      <p>{buyCartsPost.userId}</p>
    </div>
  );
};

export default BuyCartsPost;
