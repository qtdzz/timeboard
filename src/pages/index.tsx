import moment from 'moment';

import TimeBoard from '../components/timeboard/TimeBoard';

const Index = () => {
  const baseTimeZone = 'Pacific/Marquesas';
  const baseDate = moment.tz(baseTimeZone).add(-6, 'hour').minute(0).valueOf();
  const timeZones = [
    'Europe/Luxembourg',
    'America/New_York',
    'America/Los_Angeles',
    'Europe/Helsinki',
    'Asia/Kolkata',
    'Asia/Katmandu',
    'Pacific/Marquesas',
  ];

  return (
    <div>
      <TimeBoard
        selectedDate={baseDate}
        baseTimeZone={baseTimeZone}
        timeZones={timeZones}
      ></TimeBoard>
    </div>
  );
};

export default Index;
