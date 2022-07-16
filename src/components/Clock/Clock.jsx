import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Clock.css'

export default function Clock() {
    const [ clock, setClock] = useState(new Date());
    function refreshClock() {
      setClock(new Date());
    }
    useEffect(() => {
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }, []);
    return  <div className='clockBlock'>
    <div className='clock'>{clock.toLocaleTimeString()}</div>
  </div>
}
