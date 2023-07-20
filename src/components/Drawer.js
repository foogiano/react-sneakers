function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Cart{' '}
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="img/btn-remove.svg"
            alt="Close"
          />
        </h2>
        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}usd.</b>
              </div>
              <img
                className="removeBtn"
                src="img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>348 usd.</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>17.4 usd</b>
            </li>
          </ul>
          <button className="greenButton">
            Place an order <img src="/img/arrow.svg" alt="Arrow" />{' '}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
