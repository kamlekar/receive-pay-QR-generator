type PaymentDisplayProps = {
  amount: string;
};

export function PaymentDisplay({ amount }: PaymentDisplayProps) {
  const amtStr = amount.trim();
  const numericAmount = parseFloat(amtStr);
  const isValidAmount = amtStr.length > 0 && !Number.isNaN(numericAmount) && numericAmount > 0;

  if (!isValidAmount) {
    return <div className="val-display" id="valText"></div>;
  }

  return (
    <div className="val-display" id="valText">
      Paying <span className="highlight">₹{numericAmount.toFixed(2)}</span>
    </div>
  );
}
