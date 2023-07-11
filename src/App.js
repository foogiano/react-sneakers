function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">
            Cart{' '}
            <img
              className="removeBtn cu-p"
              src="img/btn-remove.svg"
              alt="Remove"
            />
          </h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: 'url(/img/sneakers/sneakers2.jpg)' }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5"> Men's Nike Air Max 270 Sneakers</p>
                <b>199 usd.</b>
              </div>
              <img
                className="removeBtn"
                src="img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem d-flex align-center">
              <div
                style={{ backgroundImage: 'url(/img/sneakers/sneakers4.jpg)' }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5"> Men's Nike Air Max 270 Sneakers</p>
                <b>149 usd.</b>
              </div>
              <img
                className="removeBtn"
                src="img/btn-remove.svg"
                alt="Remove"
              />
            </div>
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
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Store for the best sneakers</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={20} height={20} src="/img/cart.svg" alt="Cart" />
            <span>1205 usd</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" alt="User" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Seach..." />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers1.jpg"
              alt="Sneakers"
            />
            <h5> Men's Nike Blazer Mid Suede Sneakers </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b> 199 usd.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers2.jpg"
              alt="Sneakers"
            />
            <h5> Men's Nike Blazer Mid Suede Sneakers </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b> 199 usd.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers3.jpg"
              alt="Sneakers"
            />
            <h5> Men's Nike Blazer Mid Suede Sneakers </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b> 149 usd.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers4.jpg"
              alt="Sneakers"
            />
            <h5> Men's Nike Blazer Mid Suede Sneakers </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b> 149 usd.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
