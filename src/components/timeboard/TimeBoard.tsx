import React, { useState } from 'react';

import moment from 'moment-timezone';

import Timeline from '../timeline/Timeline';
import TimeZoneInfo from '../zoneinfo/TimeZoneInfo';
import styles from './TimeBoard.module.css';

type TimeBoardRowProps = {
  startEpoch: number;
  timeZone: string;
  currentUTCTime: moment.Moment;
};
const TimeBoardRow = (props: TimeBoardRowProps) => {
  const { startEpoch, timeZone, currentUTCTime } = props;
  return (
    <tr key={timeZone} className={styles.row}>
      <td>
        <TimeZoneInfo
          timeZone={timeZone}
          currentUTCTime={currentUTCTime}
        ></TimeZoneInfo>
      </td>
      <td>
        <Timeline timeZone={timeZone} startEpoch={startEpoch}></Timeline>
      </td>
    </tr>
  );
};

type TimeBoardProps = {
  selectedDate: number;
  baseTimeZone: string;
  timeZones: string[];
};
const TimeBoard = (props: TimeBoardProps) => {
  const { baseTimeZone } = props;
  const baseDateMoment = moment.tz(props.selectedDate, props.baseTimeZone);
  const [currentUTCTime, setCurrentUTCTime] = useState(moment());
  setInterval(() => setCurrentUTCTime(moment()), 1000);
  const otherTimelines = props.timeZones
    .filter((a) => a !== baseTimeZone)
    .map((timeZone) => (
      <TimeBoardRow
        key={timeZone}
        startEpoch={baseDateMoment.clone().tz(timeZone).valueOf()}
        timeZone={timeZone}
        currentUTCTime={currentUTCTime}
      ></TimeBoardRow>
    ));
  return (
    <table className={styles.table}>
      <tbody>
        <TimeBoardRow
          startEpoch={baseDateMoment.valueOf()}
          timeZone={baseTimeZone}
          currentUTCTime={currentUTCTime}
        ></TimeBoardRow>
        {otherTimelines}
      </tbody>
    </table>
  );
};

export default TimeBoard;
