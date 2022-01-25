import React, { useEffect, useRef, useState } from 'react';

import moment from 'moment';

import styles from './TimeSlot.module.css';

type TimeSlotProps = {
  value: string;
  isNow: boolean;
  isPast: boolean;
  mouseLeftPosition: number;
  epoch: number;
  timeZone: string;
  topIndicatorPosition: number;
};
const TimeSlot = (props: TimeSlotProps) => {
  const styleList = [styles.timeslot];
  const lineStyleList = [styles.line];
  const parentStyleList = [styles.slotParent];
  if (props.isNow) {
    styleList.push(styles.now);
    lineStyleList.push(styles.now);
  }
  if (props.isPast) {
    parentStyleList.push(styles.past);
  }
  let content = props.value;
  let subContent = '';
  if (props.value.includes(':')) {
    const splittedContent = content.split(':');
    content = splittedContent[0]!;
    subContent = splittedContent[1]!;
  }
  const lineRef = useRef(null);
  const { mouseLeftPosition, epoch, timeZone, topIndicatorPosition } = props;
  const [indicatorTime, setIndicatorTime] = useState('');

  const [indicatorStyle, setIndicatorStyle] = useState({});
  useEffect(() => {
    if (lineRef.current) {
      const { left, width } = (
        lineRef.current as HTMLElement
      ).getBoundingClientRect();
      if (mouseLeftPosition < left || left + width < mouseLeftPosition) {
        setIndicatorStyle({});
        return;
      }
      const epochPercentage = (mouseLeftPosition - left) / width;
      const indicatorEpoch = epoch + 1000 * 3600 * epochPercentage;
      setIndicatorTime(moment(indicatorEpoch).tz(timeZone).format());
      setIndicatorStyle({
        visibility: 'visible',
        left: mouseLeftPosition + 5,
      });
    }
  }, [epoch, mouseLeftPosition, timeZone, topIndicatorPosition]);
  return (
    <div>
      <div className={parentStyleList.join(' ')}>
        <div className={styleList.join(' ')}>
          {content}
          <span className={styles.subContent}>{subContent}</span>
        </div>
        <div className={lineStyleList.join(' ')} ref={lineRef}></div>
      </div>
      <div className={styles.indicatorContainer}>
        <div className={styles.indicatorTime} style={indicatorStyle}>
          {indicatorTime}
        </div>
      </div>
    </div>
  );
};
export default TimeSlot;
