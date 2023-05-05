import React from 'react';

import Key from './Key';

type OctaveProps = {
  octave: number;
}

const Octave: React.FC<OctaveProps> = (props) => {
  const { octave } = props;
  const referenceNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G','G#', 'A', 'A#', 'B'];
  const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const blackKeys = ['C#', 'D#', 'F#', 'G#', 'A#'];

  const getFrequency = (note: string) => {
    const baseFrequency = 440;
    const baseNote = 'A';
    const baseOctave = 4;
    const semitone = 2 ** (1 / 12);
    const distance = referenceNotes.indexOf(note) - referenceNotes.indexOf(baseNote) + (octave - baseOctave) * 12;
    const frequency = baseFrequency * (semitone ** distance);
    return frequency;
  }

  return (
    <div className="octave">
      <div className="white-keys">
        {whiteKeys.map((key) => (
          <Key key={key} note={key} octave={octave} frequency={getFrequency(key)} variant="white"></Key>
        ))}
      </div>
      <div className="black-keys">
        <div className="black-keys-half first-half">
          {blackKeys.slice(0, 2).map((key) => (
            <Key key={key} note={key} octave={octave} frequency={getFrequency(key)} variant="black"></Key>
          ))}
        </div>
        <div className="black-keys-half second-half">
          {blackKeys.slice(2, 5).map((key) => (
            <Key key={key} note={key} octave={octave} frequency={getFrequency(key)} variant="black"></Key>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Octave;
