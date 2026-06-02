import React from 'react';

export interface OpenIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  pathClassName?: string;
}

export const OpenIcon = ({
  color = 'currentColor',
  size = 11,
  width,
  height,
  pathClassName,
  ...props
}: OpenIconProps) => {
  const finalSize = size ?? width ?? height ?? 11;

  return (
    <svg
      width={finalSize}
      height={finalSize}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path className={pathClassName} d="M7.83333 4.65288V8.66658C7.83333 9.21887 7.38562 9.66658 6.83333 9.66658H1.5C0.947716 9.66658 0.5 9.21887 0.5 8.66658L0.5 3.33325C0.5 2.78097 0.947715 2.33325 1.5 2.33325L5.51341 2.33325" stroke={color} strokeLinecap="round" />
      <path className={pathClassName} d="M6 0.5H8.66667C9.21895 0.5 9.66667 0.947715 9.66667 1.5V4.16667" stroke={color} strokeLinecap="round" />
      <path className={pathClassName} d="M4.625 5.40333L9.07008 0.958252" stroke={color} strokeLinecap="round" />
    </svg>
  );
};