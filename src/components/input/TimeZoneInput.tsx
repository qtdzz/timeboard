import React, { useEffect, useState } from 'react';

import moment from 'moment';

import styles from './TimeZoneInput.module.css';

type TimeZoneInputProps = {
  addTimeZoneCallback: (z: string) => void;
};

const TimeZoneInput = (props: TimeZoneInputProps) => {
  const [input, setInput] = useState('');
  const [disabled, setDisabled] = useState(true);
  const onChange = (e: any) => {
    const newValue = e.target.value;
    setInput(newValue);
  };

  useEffect(() => {
    if (input) {
      const isValid =
        moment.tz
          .names()
          .filter((n) => n.toLowerCase() === input.trim().toLowerCase())
          .length > 0;
      setDisabled(!isValid);
    } else {
      setDisabled(true);
    }
  }, [input]);

  return (
    <div className={styles.container}>
      <div className={styles.textInputContainer}>
        <label htmlFor="timeZoneInput" className={styles.textInputLabel}>
          Add another time zone
        </label>
        <input
          type="text"
          className={styles.textInput}
          id="timeZoneInput"
          placeholder="Europe/Paris"
          value={input}
          onChange={onChange}
        />
      </div>
      <button
        type="button"
        className={styles.addButton}
        disabled={disabled}
        onClick={() => props.addTimeZoneCallback(input)}
      >
        Add
      </button>
    </div>
  );
};

export default TimeZoneInput;
