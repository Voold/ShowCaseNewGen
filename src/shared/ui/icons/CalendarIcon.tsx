import React from 'react';

export interface CalendarIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  pathClassName?: string;
}

export const CalendarIcon = ({
  color = 'currentColor',
  size = 14,
  width,
  height,
  pathClassName,
  ...props
}: CalendarIconProps) => {
  const finalSize = size ?? width ?? height ?? 14;

  return (
    <svg
      width={finalSize}
      height={finalSize}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect className={pathClassName} x="0.6" y="2.86318" width="10.1684" height="9.53684" rx="1.9" stroke={color} strokeWidth="1.2" />
      <line className={pathClassName} x1="3.12734" y1="1" x2="3.12734" y2="4.78947" stroke={color} strokeWidth="1.2" />
      <line className={pathClassName} x1="11.3691" y1="6.65273" x2="0.000720006" y2="6.65273" stroke={color} strokeWidth="1.2" />
      <line className={pathClassName} x1="8.18008" y1="1" x2="8.18008" y2="4.78947" stroke={color} strokeWidth="1.2" />
    </svg>
  );
};