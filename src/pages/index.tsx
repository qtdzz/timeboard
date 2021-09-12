import TimeBoard from '../components/timeboard/TimeBoard';

const Index = () => {
  const baseDate = '2021-09-12T00:00:00';
  const timeZones = [
    'Europe/Luxembourg',
    'America/New_York',
    'Europe/Helsinki',
  ];
  return (
    <div>
      <TimeBoard selectedDate={baseDate} timeZones={timeZones}></TimeBoard>
    </div>
  );
};

export default Index;
