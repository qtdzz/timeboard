import React from 'react';

import moment from 'moment-timezone';

import Timeline from '../timeline/Timeline';

type TimeBoardProps = {
  selectedDate: string;
  timeZones: string[];
};
const TimeBoard = (props: TimeBoardProps) => {
  const baseTimeZone = props.timeZones[0] ?? 'UTC';
  const baseDateMoment = moment.tz(
    props.selectedDate,
    props.timeZones[0] ?? 'UTC'
  );
  const baseTimeline = (
    <Timeline
      timeZone={baseTimeZone}
      startDateTime={baseDateMoment.format()}
    ></Timeline>
  );
  const otherTimelines: JSX.Element[] = [];
  props.timeZones
    .filter((a) => a !== baseTimeZone)
    .forEach((timeZone) => {
      console.log(
        `timeline for ${timeZone}`,
        baseDateMoment.clone().tz(timeZone).format()
      );
      otherTimelines.push(
        <Timeline
          key={timeZone}
          timeZone={timeZone}
          startDateTime={baseDateMoment.clone().tz(timeZone).format()}
        ></Timeline>
      );
    });
  return (
    <div>
      {baseTimeline}
      {otherTimelines}
    </div>
  );
};

export default TimeBoard;
