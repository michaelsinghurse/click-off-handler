import InputOptionContainer from './inputOptionContainer';

function InputSelect({category, items, isOpen, onClick}){
  return (
    <div 
      className="input-select"
    >
      {category}
      <InputOptionContainer 
        category={category}
        items={items}
        isOpen={isOpen}
        onClick={onClick}
      />
    </div>
  );
}

export default InputSelect;
