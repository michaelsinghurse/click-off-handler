import Input from './input';
import SubmitButton from './submitButton';

const inputs = [
  {
    category: 'Entrees',
    items: [
      { id: '101', name: 'Cheeseburger', price: 9.99 },
      { id: '102', name: 'Cobb Salad', price: 7.99 },
      { id: '103', name: 'Club Sandwich', price: 8.99 },
    ]
  },
  {
    category: 'Sides',
    items: [
      { id: '204', name: 'Fries', price: 2.49 },
      { id: '205', name: 'Tomato Soup', price: 2.99 },
      { id: '206', name: 'Side Salad', price: 3.49 },
    ]
  },
  {
    category: 'Drinks',
    items: [
      { id: '307', name: 'Beer', price: 4.99 },
      { id: '308', name: 'Soda', price: 1.99 },
      { id: '309', name: 'Red Wine', price: 0.00 },
    ]
  },
];

function InputBar(props){
  const inputElements = inputs.map((input, idx) => {
    return (
      <Input 
        key={idx} 
        category={input.category} 
        items={input.items}
        isOpen={false}
        onClick={() => {}}
      />
    ); 
  });

  return (
    <div className="input-bar">
      {inputElements}
      <SubmitButton />
    </div>
  );
}

export default InputBar;
