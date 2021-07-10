function OrderDisplay({ order, resetOrder }){
  return (
    <div className="order-display">
      <p>Fetching the following order:</p>
      <code>{JSON.stringify(order)}</code>
      <br />
      <br />
      <button type="button" onClick={resetOrder}>Reset</button>
    </div>
  );
}

export default OrderDisplay;
