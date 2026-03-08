import { useUpiQR } from '../hooks/useUpiQR';
import { AmountInput } from './AmountInput';
import { PaymentDisplay } from './PaymentDisplay';
import { QRCodeDisplay } from './QRCodeDisplay';

type PaymentCardProps = {
  vpa: string;
  recipientName: string;
};

export function PaymentCard({ vpa, recipientName }: PaymentCardProps) {
  const { amount, setAmount, qrDataUrl } = useUpiQR(vpa, recipientName);

  return (
    <div className="card">
      <div className="upi-id">To: {vpa}</div>

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
