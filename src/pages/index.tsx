import moment from 'moment';

import TimeBoard from '../components/timeboard/TimeBoard';

const Index = () => {
  return (
    <div>
      <TimeBoard
        selectedDate={moment().valueOf()}
        baseTimeZone="UTC"
        defaultTimeZones={['Europe/Luxembourg', 'America/New_York']}
      ></TimeBoard>
    </div>
  );
};

export default Index;
