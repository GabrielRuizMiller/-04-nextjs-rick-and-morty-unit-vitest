import React from 'react';

interface TextFieldProps {
  type?: string;
  placeholder?: string;
}

export const TextField: React.FC<TextFieldProps> = ({ type = 'text', placeholder }) => {
  return <input type={type} placeholder={placeholder} />;
};