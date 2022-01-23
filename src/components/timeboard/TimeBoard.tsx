import React from 'react';

import moment from 'moment-timezone';

import Timeline from '../timeline/Timeline';

type TimeBoardProps = {
  selectedDate: number;
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
      startEpoch={baseDateMoment.valueOf()}
    ></Timeline>
  );
  const otherTimelines: JSX.Element[] = [];
  props.timeZones
    .filter((a) => a !== baseTimeZone)
    .forEach((timeZone) => {
      otherTimelines.push(
        <Timeline
          key={timeZone}
          timeZone={timeZone}
          startEpoch={baseDateMoment.clone().tz(timeZone).valueOf()}
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
