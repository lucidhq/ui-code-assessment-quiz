import React from "react";

export const ResultsView = () => {
  const row = {display: 'flex'}
  return (
    <div style={{ width: '50%', float: 'left' }}>
      <div style={row}> SUMMARY </div>
      <div style={row}> Correct: </div>
      <div style={row}> Wrong: </div>
      <div style={row}> Questions answered: </div>
      <div style={row}> Final Score: </div>
    </div>
  );
}
