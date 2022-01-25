import React from 'react';

import moment from 'moment';

import styles from './TimeZoneInfo.module.css';

type TimeZoneInfoProps = {
  timeZone: string;
  currentUTCTime: moment.Moment;
};
const TimeZoneInfo = (props: TimeZoneInfoProps) => {
  const { timeZone, currentUTCTime } = props;
  const currentTime = currentUTCTime.clone().tz(timeZone);
  const offsetText = `UTC${currentTime.format('Z')}`;
  return (
    <div className={styles.timeZoneRow}>
      <div>{timeZone}</div>
      <div>{offsetText}</div>
      <div className={styles.currentTime}>
        {currentTime.format('YYYY-MM-DDTHH:mm:ss')}
      </div>
    </div>
  );
};
export default TimeZoneInfo;
