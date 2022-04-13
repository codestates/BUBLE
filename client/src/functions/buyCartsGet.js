import React from 'react';

const BuyCartsGet = ({ buyCartsGet, handlebuyCarts }) => {
  const handleClick = (e) => {
    handlebuyCarts({ userid: e.target.id });
  };
  console.log('buyCartsGet=======', buyCartsGet);
  // const Item = ({ el }) => {
  //   return (
  //     <div>
  //       <p>{el.id}</p>
  //       <p>{el.grade}</p>
  //       <p>{el.size}</p>
  //     </div>
  //   );
  // };

  return (
    <div>
      <button id="9" value="299" onClick={(e) => handleClick(e)}>
        관심목록get
      </button>
      {/* {buyCartsGet.length === 0 ? (
        <div>dd</div>
      ) : (
        <div>
          {buyCartsGet.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.id}</p>
                <p>{item.grade}</p>
                <p>{item.size}</p>
              </div>
            );
          })}
        </div>
      )} */}
      {/* {buyCartsGet.map((el) => (
        <Item el={el} />
      ))} */}
      <div>
        {buyCartsGet.map((el) => {
          return (
            <div key={el.id}>
              <p>{el.id}</p>
              <p>{el.grade}</p>
              <p>{el.size}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuyCartsGet;
