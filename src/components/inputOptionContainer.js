function InputOptionContainer({category, items, isOpen, onClick}){
  return (
    <div 
      className={"input-option" + (isOpen ? "" : " hidden")}>
      <h3>{category}</h3>
    </div>
  );
}

export default InputOptionContainer;
