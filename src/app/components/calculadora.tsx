'use client'
import React, { useState } from 'react';
export default function Calculator() {
  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        // Reemplaza "%" con "* 0.01" para interpretar el porcentaje correctamente
        const expressionWithPercentage = expression.replace(/%/g, '* 0.01');
        setResult(eval(expressionWithPercentage).toString());
      } catch (error) {
        setResult('Error');
      }
      setExpression('');
    } else if (value === 'C') {
      setResult('');
      setExpression('');
    } else if (value === '%') {
      // Agrega "%" a la expresión
      setExpression((prevExpression) => prevExpression + '%');
    } else if (value === '÷') {
      setResult('');
      setExpression((prevExpression) => prevExpression + '/');
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };
  

  const buttonStyle = {
    backgroundColor: '#eee',
    fontSize: '1.5rem',
    padding: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
  };

  const calculatorStyle = {
    backgroundColor: '#A89EA5',
    padding: '1rem',
    borderRadius: '19px',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.1)',
    width: '80%',
  };
  const isMathOperation = (btn) => {
    return [
      'C', '/', '%',
      '7', '8', '9',
      '4', '5', '6',
      '1', '2', '3',
      '0','.',
  ].includes(btn);
  };

  const zeroButtonStyle = {
    backgroundColor: '#7d7e80', 
    fontSize: '2rem', 
    padding: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '205%',
    height: '100%',
    color: 'white',
    position: 'relative',
    outline: '0px solid blue',
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Calculadora</h1>
      <div style={calculatorStyle}>

        {/* pantalla de resultado */}
        <input
          type="text"
          style={{ width: '100%', background: '#828282', fontSize: '2rem',cursor: 'pointer', textAlign: 'right', border: 'none', outline: 'none', marginBottom: '0.0rem' }} 
          value={expression}
          readOnly
        />
        {/* pantalla de resultado 2*/}
        <input
          type="text"
          style={{ width: '100%', background: '#828282',fontSize: '2rem', fontWeight: 'bold',cursor: 'pointer', marginBottom: '1rem', outline: 'none' }}
          value={result}
          readOnly
        /> {/**/}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.2rem' }}>
          {['C', '/', '%', '÷', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0','','.','='].map((btn) => (
            <button
          key={btn}
          onClick={() => handleButtonClick(btn)}
          style={btn === '0' ? zeroButtonStyle : (isMathOperation(btn) ? buttonStyle : { ...buttonStyle, backgroundColor: '#f39c12', color: 'white' })}
          >
          {btn}
        </button>
          
          ))}
        </div>
      </div>
    </div>
  );
}
