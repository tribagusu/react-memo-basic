import { useState, memo, useMemo, useCallback } from "react"
import "./App.css"

function Swatch({ params, onClick }) {
  console.log(`Swatch rendered ${params.color}`)
  return (
    <div
      style={{ width: 75, height: 75, background: params.color }}
      onClick={onClick}
    ></div>
  )
}

const MemoedSwatch = memo(Swatch)

function App() {
  const [appRenderedIndex, setAppRenderedIndex] = useState(0)
  const [color, setColor] = useState("red")

  console.log(`App rendered ${appRenderedIndex}`)

  const params = useMemo(() => ({ color }), [color])
  const onClick = useCallback(() => {}, [])

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
        <MemoedSwatch params={params} onClick={onClick} />
      </div>
    </div>
  )
}

export default App
