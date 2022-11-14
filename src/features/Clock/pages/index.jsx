import React from 'react';
import useClock from '../components/use-clock';

function Clock(props) {
  const { timeString } = useClock();
  return (
    <div>
      <p className="clock">{timeString}</p>
    </div>
  );
}

export default Clock;
