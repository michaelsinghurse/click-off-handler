function SubmitButton({ onSubmit }){
  return (
    <input 
      className="input-submit" 
      type="button" 
      value= "Order" 
      onClick={onSubmit}
    />
  );
}

export default SubmitButton;
