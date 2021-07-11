import MaskInput from 'react-maskinput';
import React from 'react';

export function TextMaskForContactNo(props) {
  const { inputRef, placeholder, ...other } = props;
  return (
    <MaskInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      alwaysShowMask
      mask="+1 (000) 000 - 0000"
      size={20}
      showMask
      maskChar="_"
    />
  );
}
