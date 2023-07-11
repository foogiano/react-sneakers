function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
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
  );
}
export default Card;
