import React from 'react';
export default function Estoque() {
  const estoque = 14;
  let options = [];

  for (let i = 1; i <= estoque; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>,
    );
  }

  return options;
}
