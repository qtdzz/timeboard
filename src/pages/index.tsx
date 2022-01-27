import { useEffect, useState } from 'react';

import moment from 'moment';

import TimeBoard from '../components/timeboard/TimeBoard';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';

const Index = () => {
  const [savedTimeZones, setSavedTimeZones] = useState([]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localStorageSavedTimeZones = JSON.parse(
        localStorage.getItem('savedTimeZone') ??
          '["Europe/Luxembourg", "America/Los_Angeles"]'
      );
      setSavedTimeZones(localStorageSavedTimeZones);
    }
  }, []);
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <TimeBoard
        selectedDate={moment().valueOf()}
        baseTimeZone="UTC"
        defaultTimeZones={savedTimeZones}
      ></TimeBoard>
    </Main>
  );
};

export default Index;
