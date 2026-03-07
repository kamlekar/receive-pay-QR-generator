import { useEffect, useRef } from 'react'
import './App.css'
import { initVpa } from './vpa'

function App() {
  useEffect(() => {
    const cleanup = initVpa({
      qrElement: qrRef.current,
      input: inputRef.current,
      clearBtn: clearBtnRef.current,
      display: displayRef.current,
    })

    return cleanup
  }, [])

  const qrRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const clearBtnRef = useRef<HTMLSpanElement | null>(null)
  const displayRef = useRef<HTMLDivElement | null>(null)

  return (
    <div className="card">
      <div className="upi-id">To: greatwarrior@upi</div>

      <div id="qrcode" ref={qrRef}></div>

      <div className="val-display" id="valText" ref={displayRef}></div>

      <div className="input-container">
        <input
          type="number"
          id="amtInput"
          placeholder="Enter Amount"
          step="0.01"
          inputMode="decimal"
          enterKeyHint="done"
          ref={inputRef}
        />
        <span className="clear-icon" id="clearBtn" ref={clearBtnRef}>
          &times;
        </span>
      </div>

      <div className="hint">Press <b>Enter</b> or <b>Done</b> to update</div>
    </div>
  )
}

export default App
