import React from 'react';
import { useEffect } from "react";
import ClockNumber from './ClockNumber';

const Clock: React.FC = () => {

  const updateClock = () => {
    const date = new Date();
    const [h, m, s] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    const degHour = h * (360 / 12) + m * (360 / 12 / 60);
    const degMin = m * (360 / 60) + s * (360 / 60 / 60);
    const degSec = s * (360 / 60);
    const clock = document.querySelector(".clock") as HTMLElement;
    clock?.style.setProperty("--degHour", `${degHour}deg`);
    clock?.style.setProperty("--degMin", `${degMin}deg`);
    clock?.style.setProperty("--degSec", `${degSec}deg`);
  }
  
  useEffect(() => {
    updateClock();
    const timer = setInterval(() => {
      updateClock();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='clock'>
      {
        Array.from({length: 12}, (_, index) => index + 1)
        .map((number) =>
          <ClockNumber number={number} key={number}></ClockNumber>
        )
      }
      <div className="h-hand"></div>
      <div className="m-hand"></div>
      <div className="s-hand"></div>
      <div className='center'></div>
    </div>
  )
}

export default Clock;
