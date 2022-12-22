import './style.css'
import React from 'react'

/*

🔎 Example: The need for state

Here we have a simple thermostat app. We're storing the current temperature in a variable, and we have the functions increaseTemperature and decreaseTemperature that allow us to change the value.

*/

let temperature = 20

function increaseTemperature() {
  temperature += 1
  console.log(temperature)
}

function decreaseTemperature() {
  temperature -= 1
  console.log(temperature)
}

/*

The React app below displays the current temperature and allows the user to change it.

Click the buttons on the page and view the console. You'll see that the temperature is indeed changing - but the UI does not update.

We will see how to fix this using state.

*/

export default function App() {
  return (
    <main>
      <h1>🌡️ React Thermostat</h1>
      <h2>{temperature}°C</h2>
      <div>
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </main>
  )
}
