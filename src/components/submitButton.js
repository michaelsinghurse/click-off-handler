function SubmitButton({onClick}){
  return (
    <input 
      className="input-submit" 
      type="button" 
      value= "Order" 
      onClick={onClick}
    />
  );
}

export default SubmitButton;
