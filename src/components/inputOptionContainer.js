function InputOptionContainer({title, items, isOpen}){
  return (
    <div 
      className={"input-option" + (isOpen ? "" : " hidden")}>
      <h3>{title}</h3>
    </div>
  );
}

export default InputOptionContainer;
