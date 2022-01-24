import React from 'react';

import moment from 'moment-timezone';

import Timeline from '../timeline/Timeline';

type TimeBoardProps = {
  selectedDate: number;
  baseTimeZone: string;
  timeZones: string[];
};
const TimeBoard = (props: TimeBoardProps) => {
  const { baseTimeZone } = props;
  const baseDateMoment = moment.tz(props.selectedDate, props.baseTimeZone);
  const baseTimelineMap = (
    <tr key={baseTimeZone}>
      <td>{baseTimeZone}</td>
      <td>
        <Timeline
          timeZone={baseTimeZone}
          startEpoch={baseDateMoment.valueOf()}
        ></Timeline>
      </td>
    </tr>
  );
  const otherTimelines = props.timeZones
    .filter((a) => a !== baseTimeZone)
    .map((timeZone) => {
      return (
        <tr key={timeZone}>
          <td>{timeZone}</td>
          <td>
            <Timeline
              timeZone={timeZone}
              startEpoch={baseDateMoment.clone().tz(timeZone).valueOf()}
            ></Timeline>
          </td>
        </tr>
      );
    });

  return (
    <table className="table-auto">
      <tbody>
        {baseTimelineMap}
        {otherTimelines}
      </tbody>
    </table>
  );
};

export default TimeBoard;
