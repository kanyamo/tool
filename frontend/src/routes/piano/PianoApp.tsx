import React, { useState } from 'react';
import { Slider } from '@mui/material';

import Octave from './components/Octave';

const PianoApp: React.FC = () => {
  const [range, setRange] = useState<number[]>([4, 5]); // [min, max

  return (
    <div className='piano-app'>
      <h1>Piano</h1>
      <h2>範囲</h2>
      <Slider
        value={range}
        onChange={(e, newValue) => {
          setRange(newValue as number[]);
        }}
        valueLabelDisplay="auto"
        min={0}
        max={8}
      />
      <div className="keyboard">
        {Array.from({ length: range[1] - range[0] + 1 }, (_, i) => i + range[0]).map((octave) => (
          <Octave key={octave} octave={octave}></Octave>
        ))}
      </div>
      <h2>使い方</h2>
      <p>
        鍵盤をタップまたはクリックすると音が鳴ります。
      </p>
      <p>
        スライダーを使って、オクターブの範囲を変更することができます。
      </p>
      <p>
        サンプラー: <a href="https://tonejs.github.io/audio/salamander/A4.mp3">https://tonejs.github.io/audio/salamander/</a>
      </p>
    </div>
  );
};

export default PianoApp;
