import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';
import {
  TIMER_TITLE,
  LOCAL_STORAGE_TIME_LEFT,
  MINUTES,
  SECONDS,
} from '../../utils/Constants';
import { saveTimeToLocalStorage } from '../../utils/Utility';

export const Timer = ({ id, delay }) => {
  const seconds = useRef(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_TIME_LEFT))[id].seconds ||
      SECONDS
  );
  const minutes = useRef(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_TIME_LEFT))[id].minutes ||
      MINUTES
  );
  const [time, setTime] = useState({
    minutes: minutes.current,
    seconds: seconds.current,
  });
  const [startTimer, setStartTimer] = useState(true);

  useEffect(() => {
    if (startTimer) {
      setTimeout(() => {
        // Define interval every second for 5 minutes
        const timer = setInterval(() => {
          // When there is more seconds left
          if (seconds.current > 0) {
            seconds.current = seconds.current - 1;
            setTime({ minutes: minutes.current, seconds: seconds.current });
          }
          // When seconds ends and there is more minutes left
          else if (seconds.current === 0 && minutes.current > 0) {
            seconds.current = 59;
            minutes.current = minutes.current - 1;
            setTime({ minutes: minutes.current, seconds: seconds.current });
          }
          // When time ends - clear interval and update local storage
          else if (seconds.current === 0 && minutes.current === 0) {
            clearInterval(timer);
            saveTimeToLocalStorage(id, {
              minutes: 5,
              seconds: 0,
            });
            alert('You missed the last rocket to mars');
            // Prevent infinite loop
            setStartTimer(false);
          }
        }, 1000);
      }, delay * 1000);
    }
  }, [delay, id, startTimer]);

  // Save time left in local storage when page close
  window.addEventListener('beforeunload', (ev) => {
    saveTimeToLocalStorage(id, time);
  });

  const resetClickHandle = () => {
    minutes.current = 5;
    seconds.current = 0;
    setTime({ minutes: 5, seconds: 0 });
    saveTimeToLocalStorage(id, {
      minutes: 5,
      seconds: 0,
    });
    // Start timer after reset
    setStartTimer(true);
  };

  return (
    <div className='timer-wrapper'>
      <div className='timer-title'>{TIMER_TITLE}</div>
      <div className='digits-wrapper'>
        <div className='digit'>{time.minutes}</div>
        <div className='divider'>:</div>{' '}
        <div className='digit'>
          {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
        </div>
      </div>

      <button onClick={resetClickHandle} className='btn'>
        Reset timer
      </button>
    </div>
  );
};
