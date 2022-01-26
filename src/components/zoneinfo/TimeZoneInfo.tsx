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
      <div className={styles.removeButtonContainer}>
        <button
          type="button"
          className={styles.removeButton}
          onClick={() => props.removeCallback!(timeZone)}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="trash-alt"
            className="w-3 mx-auto"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
            ></path>
          </svg>
        </button>
      </div>
    );

  return (
    <div className="flex justify-left">
      <div className="block p-6 rounded-lg shadow-lg bg-white w-full">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          <div className={styles.timeZoneRowContainer}>
            {timeZone} {removeButton}
          </div>
        </h5>
        <div className="text-gray-700 text-base mb-4">
          <div className={styles.offsetText}>{offsetText}</div>
          <div className={styles.currentTime}>
            {currentTime.format('YYYY-MM-DDTHH:mm')}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeZoneInfo;
