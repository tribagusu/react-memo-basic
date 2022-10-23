import { useState, memo } from "react"
import "./App.css"

function Swatch({ color }) {
  console.log(`Swatch rendered ${color}`)
  return <div style={{ width: 75, height: 75, background: color }}></div>
}

const MemoedSwatch = memo(Swatch)

function App() {
  const [appRenderedIndex, setAppRenderedIndex] = useState(0)
  const [color, setColor] = useState("red")

  console.log(`App rendered ${appRenderedIndex}`)

  return (
    <div className="App">
      <div>
        <button onClick={() => setAppRenderedIndex(appRenderedIndex + 1)}>
          Re-render App
        </button>
        <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
          Change Color
        </button>
      </div>
      <div>
        <MemoedSwatch color={color} />
      </div>
    </div>
  )
}

export default App
