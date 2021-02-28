import { useState } from 'react'
import './App.css';

function App() {
  const [disabled, setDisabled] = useState(false)
  const [buttonColor, setButtonColor] = useState('red')
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={(e) => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="enable-button-check"
        defaultChecked={disabled}
        aria-checked={disabled}
        onClick={(e) => setDisabled(e.target.checked)} />
    </div>
  );
}

export default App;
