import React, { ReactNode } from 'react';
import classes from './Bordericon.module.scss';

interface BordericonProps {
  children: ReactNode;
}

const Bordericon: React.FC<BordericonProps> = ({ children }) => {
  return (
    <div className={classes.container}>
      <svg className={classes.circle} viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="48"
          stroke="var(--dark15)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="15 10"
          strokeLinecap="round"
        />
      </svg>
      <span>
        {children}
      </span>
    </div>
  );
};

export default Bordericon;
