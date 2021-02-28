import { useState } from 'react'
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [disabled, setDisabled] = useState(false)
  const [buttonColor, setButtonColor] = useState('MediumVioletRed')
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={(e) => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <label htmlFor="disable-button-check">Disable button</label>
      <input
        type="checkbox"
        id="disable-button-check"
        defaultChecked={disabled}
        aria-checked={disabled}
        onClick={(e) => setDisabled(e.target.checked)} />
    </div>
  );
}

export default App;
