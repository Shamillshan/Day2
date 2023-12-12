import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

const Counter = () => {
  const [num, setCount] = useState(0);

  const Increment = () => {
    setCount(num + 1);
  };

  const Decrement = () => {
    if(num>0){
    setCount(num - 1);
    }
  };

  return (
    <div>
      <Typography>Count: {num}</Typography>
      <Button variant="contained" color="success" onClick={Increment}>+</Button>
      <Button variant="contained" color="error" onClick={Decrement}>-</Button>
    </div>
  );
};

export default Counter;
