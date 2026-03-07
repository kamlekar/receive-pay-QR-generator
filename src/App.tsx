import './App.css'

function App() {
  return (
    <div className="card">
      <div className="upi-id">To: greatwarrior@upi</div>

      <div id="qrcode"></div>

      <div className="val-display" id="valText"></div>

      <div className="input-container">
        <input type="number" id="amtInput" placeholder="Enter Amount" step="0.01" inputMode="decimal" enterKeyHint="done" />
        <span className="clear-icon" id="clearBtn">&times;</span>
      </div>

      <div className="hint">Press <b>Enter</b> or <b>Done</b> to update</div>
    </div>
  )
}

export default App
