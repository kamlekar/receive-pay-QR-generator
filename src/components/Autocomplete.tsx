import React from 'react';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const StyledAutocomplete = styled(Autocomplete)<AutocompleteProps<string, boolean, boolean, boolean>>(() => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#fff',
    borderRadius: '8px',
  },
}));

type GenericAutocompleteProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
};

export function GenericAutocomplete({
  options,
  value,
  onChange,
  label,
  placeholder,
}: GenericAutocompleteProps) {
  return (
    <StyledAutocomplete
      freeSolo
      options={options}
      value={value}
      onChange={(_event, newValue) => {
        onChange(newValue as string || '');
      }}
      onInputChange={(_event: React.SyntheticEvent, newInputValue: string) => {
        onChange(newInputValue);
      }}
      renderInput={(params: import('@mui/material/Autocomplete').AutocompleteRenderInputParams) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          variant="outlined"
          fullWidth
        />
      )}
    />
  );
}
