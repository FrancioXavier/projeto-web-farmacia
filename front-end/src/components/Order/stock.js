import React from 'react';
export default function Stock() {
  const stock = 14;
  let options = [];

  for (let i = 1; i <= stock; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>,
    );
  }

  return options;
}
