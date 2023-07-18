import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Cart';

const arr = [
  {
    title: 'Mens Nike Blazer Mid Suede Sneakers',
    price: 199,
    imageUrl: 'img/sneakers/sneakers1.jpg',
  },
  {
    title: 'Mens Nike Air Max 270 Sneakers',
    price: 149,
    imageUrl: 'img/sneakers/sneakers2.jpg',
  },
  {
    title: 'Mens Nike Blazer Mid Suede Sneakers',
    price: 149,
    imageUrl: 'img/sneakers/sneakers3.jpg',
  },
  {
    title: 'Puma X Aka Boku Future Rider Sneakers.',
    price: 159,
    imageUrl: 'img/sneakers/sneakers4.jpg',
  },
];
function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Seach..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
