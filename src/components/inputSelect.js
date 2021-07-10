import InputOptionContainer from './inputOptionContainer';

function InputSelect({category, items, isOpen, onClick, order, setOrder}){
  const selected = order.hasOwnProperty(category) && !!order[category]; 
  return (
    <div 
      className={"input-select " + (selected ? " selected" : "")}
      onClick={onClick}
    >
      {category}
      <InputOptionContainer 
        category={category}
        items={items}
        isOpen={isOpen}
        order={order}
        setOrder={setOrder}
      />
    </div>
  );
}

export default InputSelect;
