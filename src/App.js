import {useState, useEffect} from 'react';
import './App.css';
import InputBar from './components/inputBar';
import OrderDisplay from './components/orderDisplay';

function App() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setMenu(menuApiResponse);
    }, 500);
  }, []);
  
  const [openInput, setOpenInput] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Menu</h1>
      </header>
      <main className="App-main">
        <InputBar 
          menuItems={menu}
          openInput={openInput}
          setOpenInput={setOpenInput}
        />
        <OrderDisplay/>
      </main>
    </div>
  );
}

const menuApiResponse = [
  {
    category: 'Entrees',
    items: [
      { id: '101', name: 'Cheeseburger', price: 9.99 },
      { id: '102', name: 'Cobb Salad', price: 7.99 },
      { id: '103', name: 'Club Sandwich', price: 8.99 },
    ]
  },
  {
    category: 'Sides',
    items: [
      { id: '204', name: 'Fries', price: 2.49 },
      { id: '205', name: 'Tomato Soup', price: 2.99 },
      { id: '206', name: 'Side Salad', price: 3.49 },
    ]
  },
  {
    category: 'Drinks',
    items: [
      { id: '307', name: 'Beer', price: 4.99 },
      { id: '308', name: 'Soda', price: 1.99 },
      { id: '309', name: 'Red Wine', price: 0.00 },
    ]
  },
];

export default App;
