import React from 'react';
import { GenericAutocomplete } from './Autocomplete';

type VpaAutocompleteProps = {
  value: string;
  onChange: (vpa: string) => void;
};

const DEFAULT_VPAS = [
  "greatwarrior@upi",
  "9502498012@paytm"
];

export function VpaAutocomplete({ value, onChange }: VpaAutocompleteProps) {
  return (
    <div style={{ marginBottom: '1.5rem', width: '100%' }}>
      <GenericAutocomplete
        options={DEFAULT_VPAS}
        value={value}
        onChange={onChange}
        label="Select or Enter VPA"
        placeholder="e.g. user@upi"
      />
    </div>
  );
}
