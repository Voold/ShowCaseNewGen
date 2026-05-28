interface FeedBackIconProps {
  color?: string;
  stroke?: string;
  pathClassName?: string;
}

export const FeedBackIcon = ({ stroke = '#6E7181', pathClassName }: FeedBackIconProps) => (
  <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className={pathClassName} d="M3.67225 0.402492L4.11554 2.03599" stroke={stroke} stroke-width="0.8" stroke-linecap="round"/>
    <path className={pathClassName} d="M1.38281 1.20435L2.72897 2.62601" stroke={stroke} stroke-width="0.8" stroke-linecap="round"/>
    <path className={pathClassName} d="M0.396097 3.23682L1.77386 3.82485" stroke={stroke} stroke-width="0.8" stroke-linecap="round"/>
    <path className={pathClassName} d="M5.19073 8.97119H3.89924C2.89562 8.97119 2.08203 8.1576 2.08203 7.15399V6.55999C2.08203 5.49843 2.9426 4.63786 4.00416 4.63786H4.59296C5.32934 4.63786 5.92629 4.0409 5.92629 3.30452V2.79906C5.92629 2.34184 6.29694 1.97119 6.75416 1.97119C7.21138 1.97119 7.58203 2.34184 7.58203 2.79906V6.57989C7.58203 7.90057 6.51141 8.97119 5.19073 8.97119Z" stroke={stroke} stroke-width="0.8"/>
  </svg>
);
