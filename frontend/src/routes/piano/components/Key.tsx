import React from 'react';
import { playNote } from '../utils/playNote';

type KeyProps = {
  note: string,
  octave: number,
  frequency: number,
  variant: 'white' | 'black',
}

const Key: React.FC<KeyProps> = (props) => {
  const handlePointerDown = () => {
    playNote(props.frequency);
  };

  return (
    <>
      <div className={`key ${props.variant} ${props.variant}-key`} onPointerDown={handlePointerDown}>
        <div className="note">{props.note}{props.octave}</div>
      </div>
    </>
  );
};

export default Key;
