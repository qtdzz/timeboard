import React from 'react';

import styles from './TimeZoneInput.module.css';

const TimeZoneInput = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textInputContainer}>
        <label htmlFor="timeZoneInput" className={styles.textInputLabel}>
          Add time zone
        </label>
        <input
          type="text"
          className={styles.textInput}
          id="timeZoneInput"
          placeholder="Europe/Paris"
        />
      </div>
    </div>
  );
};

export default TimeZoneInput;
