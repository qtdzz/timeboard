import { useEffect, useState } from 'react';

import moment from 'moment';

import TimeBoard from '../components/timeboard/TimeBoard';

const Index = () => {
  const [savedTimeZones, setSavedTimeZones] = useState([]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localStorageSavedTimeZones = JSON.parse(
        localStorage.getItem('savedTimeZone') ?? '[]'
      );
      setSavedTimeZones(localStorageSavedTimeZones);
    }
  }, []);
  return (
    <div>
      <TimeBoard
        selectedDate={moment().valueOf()}
        baseTimeZone="UTC"
        defaultTimeZones={savedTimeZones}
      ></TimeBoard>
    </div>
  );
};

export default Index;
