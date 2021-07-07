import InputSelect from './inputSelect';
import SubmitButton from './submitButton';

function InputBar({menuItems, openInput, setOpenInput}){
  const handleOnClick = category => {
    if (openInput === category) {
      setOpenInput('');
    } else {
      setOpenInput(category);
    }
  };

  const inputElements = menuItems.map((menuItem, idx) => {
    return (
      <InputSelect 
        key={idx} 
        category={menuItem.category} 
        items={menuItem.items}
        isOpen={openInput === menuItem.category}
        onClick={() => handleOnClick(menuItem.category)} 
      />
    ); 
  });

  return (
    <div className="input-bar">
      {inputElements}
      <SubmitButton 
        onClick={() => {
          setOpenInput('');
        }}
      />
    </div>
  );
}

export default InputBar;
