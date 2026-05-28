interface CalendarIconProps {
  color?: string;
  stroke?: string;
  pathClassName?: string;
}

export const CalendarIcon = ({ stroke = '#6E7181', pathClassName }: CalendarIconProps) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect className={pathClassName} x="0.6" y="2.86318" width="10.1684" height="9.53684" rx="1.9" stroke={stroke} stroke-width="1.2" />
    <line className={pathClassName} x1="3.12734" y1="1" x2="3.12734" y2="4.78947" stroke={stroke} stroke-width="1.2" />
    <line className={pathClassName} x1="11.3691" y1="6.65273" x2="0.000720006" y2="6.65273" stroke={stroke} stroke-width="1.2" />
    <line className={pathClassName} x1="8.18008" y1="1" x2="8.18008" y2="4.78947" stroke={stroke} stroke-width="1.2" />
  </svg>
);