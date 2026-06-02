import React from 'react';

export interface GoIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  pathClassName?: string;
}

export const GoIcon = ({
  color = 'white',
  size,
  width = 5,
  height = 9,
  pathClassName,
  ...props
}: GoIconProps) => {
  const finalWidth = size ?? width ?? 5;
  const finalHeight = size ?? height ?? 9;

  return (
    <svg
      width={finalWidth}
      height={finalHeight}
      viewBox="0 0 5 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={pathClassName}
        d="M0.5 8.5L4.5 4.5L0.5 0.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};