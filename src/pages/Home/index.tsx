import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { DiReact } from 'react-icons/di';

import './styles.css';

export const Home: React.FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <h1>
        Tudo ajustado para você só codar ! <DiReact />
      </h1>
      <strong>{counter}</strong>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
        className="button"
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};
