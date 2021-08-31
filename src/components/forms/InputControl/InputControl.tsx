import React, { ChangeEvent } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';

export interface InputControlProps {
  id?: string;
  name?: string;
  type?: string;
  error?: string;
  touched?: boolean;
  label?: string;
  value?: string;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
}

export const InputControl = ({
  id,
  name,
  type,
  error,
  touched,
  label,
  value,
  onChange,
}: InputControlProps) => (
  <FormControl id={id} isInvalid={error && touched ? true : undefined}>
    <FormLabel>{label}</FormLabel>
    <Input name={name} type={type} onChange={onChange} value={value} />
    <FormErrorMessage>{error}</FormErrorMessage>
  </FormControl>
);
