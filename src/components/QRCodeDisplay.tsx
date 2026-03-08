type QRCodeDisplayProps = {
  dataUrl: string;
};

export function QRCodeDisplay({ dataUrl }: QRCodeDisplayProps) {
  return (
    <div id="qrcode">
      {dataUrl ? (
        <img src={dataUrl} alt="UPI QR Code" style={{ display: 'block' }} />
      ) : null}
    </div>
  );
}
