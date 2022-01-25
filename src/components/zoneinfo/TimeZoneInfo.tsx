import React from 'react';

import moment from 'moment';

import styles from './TimeZoneInfo.module.css';

type TimeZoneInfoProps = {
  timeZone: string;
  currentUTCTime: moment.Moment;
  removeCallback?: Function;
};
const TimeZoneInfo = (props: TimeZoneInfoProps) => {
  const { timeZone, currentUTCTime } = props;
  const currentTime = currentUTCTime.clone().tz(timeZone);
  const offsetText = `(UTC${currentTime.format('Z')})`;

  const removeButton =
    props.removeCallback === undefined ? (
      <div></div>
    ) : (
      <button onClick={() => props.removeCallback!(timeZone)}>Remove</button>
    );

  return (
    <div className={styles.timeZoneRow}>
      <div>{timeZone}</div>
      <div className={styles.offsetText}>{offsetText}</div>
      <div className={styles.currentTime}>
        {currentTime.format('YYYY-MM-DDTHH:mm')}
      </div>
      {removeButton}
    </div>
  );
};
export default TimeZoneInfo;
