import React, { useEffect, useRef, useState } from 'react';

import moment from 'moment-timezone';

import Timeline from '../timeline/Timeline';
import TimeZoneInfo from '../zoneinfo/TimeZoneInfo';
import styles from './TimeBoard.module.css';

type TimeBoardRowProps = {
  startEpoch: number;
  timeZone: string;
  currentUTCTime: moment.Moment;
  setIndicatorXFunction: Function;
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
      <td onMouseMoveCapture={(e) => props.setIndicatorXFunction(e.clientX)}>
        <Timeline
          timeZone={timeZone}
          startEpoch={startEpoch}
          currentUTCTime={currentUTCTime}
        ></Timeline>
      </td>
    </tr>
  );
};

const debounce = (callback: Function, wait: number) => {
  let timeout: any;
  return (...args: any[]) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  };
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
  const [height, setHeight] = useState(0);
  const [leftPosition, setLeftPosition] = useState(0);
  const [indicatorLineStyle, setIndicatorLineStyle] = useState({});

  const tableRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setCurrentUTCTime(moment()), 1000 * 60);
    return () => clearInterval(interval);
  });
  useEffect(() => {
    if (tableRef.current) {
      setHeight((tableRef.current as HTMLElement).offsetHeight);
      setIndicatorLineStyle({ height, left: leftPosition });
    }
  }, [height, leftPosition]);
  useEffect(() => {
    setIndicatorLineStyle({ height, left: leftPosition });
  }, [height, leftPosition]);

  const debounceSetX = debounce((e: number) => setLeftPosition(e), 300);

  const otherTimelines = props.timeZones
    .filter((a) => a !== baseTimeZone)
    .map((timeZone) => (
      <TimeBoardRow
        key={timeZone}
        startEpoch={baseDateMoment.clone().tz(timeZone).valueOf()}
        timeZone={timeZone}
        currentUTCTime={currentUTCTime}
        setIndicatorXFunction={debounceSetX}
      ></TimeBoardRow>
    ));
  return (
    <div>
      <table className={styles.table} ref={tableRef}>
        <tbody>
          <TimeBoardRow
            startEpoch={baseDateMoment.valueOf()}
            timeZone={baseTimeZone}
            currentUTCTime={currentUTCTime}
            setIndicatorXFunction={debounceSetX}
          ></TimeBoardRow>
          {otherTimelines}
        </tbody>
      </table>
      <div className={styles.indicatorLine} style={indicatorLineStyle}></div>
    </div>
  );
};

export default TimeBoard;
