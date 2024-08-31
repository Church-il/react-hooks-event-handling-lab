import React from 'react';

function Keypad() {
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <div style={styles.container}>
      <input
        type="password"
        onChange={handleChange}
        style={styles.input}
        placeholder="Enter password"
      />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  input: {
    fontSize: '1.5em',
    padding: '10px',
    border: '2px solid #007bff',
    borderRadius: '5px',
    outline: 'none',
    width: '300px',
  },
};

export default Keypad;
