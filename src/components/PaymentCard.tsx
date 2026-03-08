import { useUpiQR } from '../hooks/useUpiQR';
import { VpaAutocomplete } from './VpaAutocomplete';
import { AmountInput } from './AmountInput';
import { PaymentDisplay } from './PaymentDisplay';
import { QRCodeDisplay } from './QRCodeDisplay';

type PaymentCardProps = {
  vpa: string;
  onVpaChange: (vpa: string) => void;
  recipientName: string;
};

export function PaymentCard({ vpa, onVpaChange, recipientName }: PaymentCardProps) {
  const { amount, setAmount, qrDataUrl } = useUpiQR(vpa, recipientName);

  return (
    <div className="card">
      <VpaAutocomplete value={vpa} onChange={onVpaChange} />

      <QRCodeDisplay dataUrl={qrDataUrl} />

      <PaymentDisplay amount={amount} />

      <AmountInput 
        amount={amount} 
        onChange={setAmount} 
        onClear={() => setAmount('')}
      />

      <div className="hint">Press <b>Enter</b> or <b>Done</b> to update</div>
    </div>
  );
}
