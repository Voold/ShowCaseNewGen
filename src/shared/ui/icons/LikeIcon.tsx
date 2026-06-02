import React from 'react';

export interface LikeIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  pathClassName?: string;
  fillColor?: string;
}

export const LikeIcon = ({
  color = 'currentColor',
  size = 18,
  width,
  height,
  pathClassName,
  fillColor = 'none',
  ...props
}: LikeIconProps) => {
  const finalSize = size ?? width ?? height ?? 18;

  return (
    <svg
      width={finalSize}
      height={finalSize}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={pathClassName}
        d="M13.3628 6.88019C14.4867 5.56229 16.3433 4.75168 18.0972 5.06866C19.3223 5.2629 20.3582 5.82354 21.1793 6.73663C21.9497 7.60436 22.3925 8.63307 22.481 9.77472C22.8836 14.3938 16.8209 18.4453 13.5738 20.8167C13.3973 20.9443 13.2035 20.9987 13.0005 21.0003C12.7976 20.9987 12.6029 20.9443 12.4263 20.8167C9.17921 18.4453 3.11646 14.3939 3.5191 9.77472C3.60757 8.63301 4.05036 7.60439 4.82085 6.73663C5.64196 5.82347 6.67771 5.26285 7.90288 5.06866C9.65948 4.75119 11.5179 5.56556 12.6412 6.88702C12.747 6.99662 12.8669 7.14762 12.9996 7.34601C13.1346 7.14405 13.2556 6.99024 13.3628 6.88019Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fillColor}
      />
    </svg>
  );
};