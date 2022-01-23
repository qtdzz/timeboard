import moment from 'moment';

import TimeBoard from '../components/timeboard/TimeBoard';

const Index = () => {
  const baseDate = moment().add(-12, 'hour').minute(0).valueOf();
  const timeZones = [
    'Europe/Luxembourg',
    'America/New_York',
    'America/Los_Angeles',
    'Europe/Helsinki',
    'Asia/Kolkata',
    'Asia/Katmandu',
    'UTC−09:30',
  ];
  return (
    <div>
      <TimeBoard selectedDate={baseDate} timeZones={timeZones}></TimeBoard>
    </div>
  );
};

export default Index;
