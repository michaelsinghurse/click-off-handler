import InputSelect from './inputSelect';
import SubmitButton from './submitButton';

function InputBar({menuItems, openInput, setOpenInput, order, setOrder, onSubmit}){
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
        order={order}
        setOrder={setOrder}
        setOpenInput={setOpenInput}
      />
    ); 
  });

  return (
    <div className="input-bar">
      {inputElements}
      <SubmitButton 
        onSubmit={() => {
          setOpenInput('');
          onSubmit();
        }}
      />
    </div>
  );
}

export default InputBar;
