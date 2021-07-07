import InputOptionContainer from './inputOptionContainer';

function InputSelect({category, items, isOpen, onClick}){
  return (
    <div 
      className="input-select"
      onClick={onClick}
    >
      {category}
      <InputOptionContainer 
        title={`Please select a ${category.toLowerCase().slice(0, -1)}`}
        items={items}
        isOpen={isOpen}
      />
    </div>
  );
}

export default InputSelect;
