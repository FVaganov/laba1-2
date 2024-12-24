import React, { useState } from 'react';
import './App.css';






const App = () => {
  const [items, setItems] = useState([]); 
  const [inputValue, setInputValue] = useState(''); 
  const [inputValue1, setInputValue1] = useState(''); 
  const [inputValue2, setInputValue2] = useState(''); 

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue, inputValue1, inputValue2]); 
      setInputValue(''); 
      setInputValue1(''); 
      setInputValue2(''); 
    }
  };

  return (
    <div>
      <h1>Добавление элементов в список</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Введите текст для списка"
      />
      <input
        type="text"
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)} 
        placeholder="Введите текст для списка"
      />
      <input
        type="text"
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)} 
        placeholder="Введите текст для списка"
      />
      
      <button onClick={addItem}>Добавить элемент</button> {}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> 
        ))}
      </ul>
    </div>
  );
};

export default App;
