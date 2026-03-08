import { useState } from 'react';
import { PaymentCard } from './components/PaymentCard';

function App() {
  const [vpa, setVpa] = useState<string>("greatwarrior@upi");

  return (
    <PaymentCard 
      vpa={vpa} 
      onVpaChange={setVpa}
      recipientName="Great Warrior" 
    />
  );
}

export default App;
