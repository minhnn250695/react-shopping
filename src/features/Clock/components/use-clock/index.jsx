import { useEffect, useState } from 'react';
import FormatDate from '../../../../helper/formatDate';

function useClock() {
  const [timeString, setTimeString] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      // convert currentDate => hh:mm:ss
      const newTimeString = FormatDate(currentDate);
      setTimeString(newTimeString);
    }, 1000);

    return () => {
      console.log('clear data');
      clearInterval(interval);
    };
  }, []);
  return { timeString };
}

export default useClock;
