import { useState, useEffect } from 'react';
import * as QRCode from 'qrcode';

export function useUpiQR(vpa: string, name: string) {
  const [amount, setAmount] = useState<string>('');
  const [qrDataUrl, setQrDataUrl] = useState<string>('');

  useEffect(() => {
    async function generateQR() {
      const numericAmount = parseFloat(amount);
      const isValidAmount = !Number.isNaN(numericAmount) && numericAmount > 0;
      
      let upiString = `upi://pay?pa=${vpa}&pn=${encodeURIComponent(name)}&cu=INR`;
      if (isValidAmount) {
        upiString += `&am=${numericAmount.toFixed(2)}`;
      }

      try {
        const dataUrl = await QRCode.toDataURL(upiString, {
          width: 200,
          margin: 1,
        });
        setQrDataUrl(dataUrl);
      } catch (err) {
        console.error("Failed to generate QR code", err);
      }
    }

    generateQR();
  }, [vpa, name, amount]);

  return { amount, setAmount, qrDataUrl };
}
