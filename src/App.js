function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Store for the best sneakers</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={20} height={20} src="/img/cart.svg" />
            <span>1205 usd</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg"></img>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All Sneakers</h1>
        <div className="d-flex">
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers1.jpg"
              alt="Sneakers1"
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
              alt="Sneakers1"
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
              alt="Sneakers1"
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
              alt="Sneakers1"
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
