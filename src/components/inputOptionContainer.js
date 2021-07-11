import ClickOffHandler from './clickOffHandler';

function InputOptionContainer({
  category, items, isOpen, order, setOrder, setOpenInput
}){
  const handleClick = itemId => {
    setOrder(prev => {
      prev[category] = itemId;
      return prev;
    });
  };

  return (
    <ClickOffHandler
      targetSelector=".input-select, .input-submit"
      handler={() => setOpenInput('')}
      cancel={!isOpen}
    >
      <div 
        className={"input-option" + (isOpen ? "" : " hidden")}>
        <h3>{`Please select a ${category.toLowerCase().slice(0, -1)}:`}</h3>
        <ul>
        {items.map((item) => {
          const selected = order[category] === item.id;

          return (
            <li
              key={item.id}
              className={selected ? "selected" : ""}
              onClick={() => handleClick(item.id)}
            >
              {item.name} ${item.price}
            </li>
          );
        })}
        </ul>
      </div>
    </ClickOffHandler>
  );
}

export default InputOptionContainer;
