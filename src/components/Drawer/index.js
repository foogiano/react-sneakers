import styles from './Drawer.module.scss';

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Cart
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className={styles.items}>
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price}usd.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
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
        ) : (
          <div class="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              class="mb-20"
              width="120px"
              src="/img/empty-cart.jpg"
              alt="Empty Cart"
            />
            <h2>Cart is empty</h2>
            <p class="opacity-6">
              Add at least one pair of sneakers to place an order.
            </p>
            <button onClick={onClose} class="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" /> Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
