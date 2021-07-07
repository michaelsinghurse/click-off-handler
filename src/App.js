import './App.css';
import InputBar from './components/inputBar';
import OrderDisplay from './components/orderDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Menu</h1>
      </header>
      <main className="App-main">
        <InputBar></InputBar>
        <OrderDisplay></OrderDisplay>
      </main>
    </div>
  );
}

export default App;
