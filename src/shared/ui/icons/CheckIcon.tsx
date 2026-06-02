import React from 'react';

export interface CheckIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  pathClassName?: string;
}

export const CheckIcon = ({
  color = 'currentColor',
  size,
  width = 12,
  height = 9,
  pathClassName,
  ...props
}: CheckIconProps) => {
  const finalWidth = size ?? width ?? 12;
  const finalHeight = size ?? height ?? 9;

  return (
    <svg
      width={finalWidth}
      height={finalHeight}
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={pathClassName}
        d="M0.705078 3.79942L4.06582 7.14107C4.26124 7.33538 4.57704 7.33493 4.77191 7.14006L11.2051 0.707031"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};