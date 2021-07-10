function InputOptionContainer({category, items, isOpen, order, setOrder}){
  const handleClick = itemId => {
    setOrder(prev => {
      prev[category] = itemId;
      return prev;
    });
  };

  return (
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
  );
}

export default InputOptionContainer;
