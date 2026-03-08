import { ChangeEvent, KeyboardEvent, useRef } from 'react';

type AmountInputProps = {
  amount: string;
  onChange: (val: string) => void;
  onClear: () => void;
};

export function AmountInput({ amount, onChange, onClear }: AmountInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      inputRef.current?.blur();
    }
  };

  const handleClear = () => {
    onClear();
    inputRef.current?.focus();
  };

  return (
    <div className="input-container">
      <input
        type="number"
        id="amtInput"
        placeholder="Enter Amount"
        step="0.01"
        inputMode="decimal"
        enterKeyHint="done"
        value={amount}
        onChange={handleChange}
        onKeyDown={handleKeydown}
        ref={inputRef}
      />
      
      <span
        className="clear-icon"
        id="clearBtn"
        style={{ display: amount.trim().length > 0 ? 'block' : 'none' }}
        onClick={handleClear}
      >
        &times;
      </span>
    </div>
  );
}
