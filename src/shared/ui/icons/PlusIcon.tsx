import React from 'react';

export interface PlusIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  pathClassName?: string;
  fill?: string;
}

export const PlusIcon = ({
  color,
  size = 8,
  width,
  height,
  pathClassName,
  fill = 'currentColor',
  ...props
}: PlusIconProps) => {
  const finalSize = size ?? width ?? height ?? 8;

  return (
    <svg width={finalSize} {...props}
      height={finalSize} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={pathClassName} d="M3.53711 0C3.88352 0 4.16496 0.281594 4.16504 0.62793V2.90918H6.45898L6.47168 2.91016L6.54785 2.91797L6.56055 2.91992L6.57227 2.92188C6.8579 2.98051 7.07422 3.23358 7.07422 3.53711C7.07422 3.84064 6.8579 4.09371 6.57227 4.15234L6.56055 4.1543L6.54785 4.15625L6.47168 4.16406L6.45898 4.16504H4.16504V6.45898L4.16406 6.47168L4.15625 6.54785L4.1543 6.56055L4.15234 6.57227C4.09371 6.8579 3.84064 7.07422 3.53711 7.07422C3.23358 7.07422 2.98051 6.8579 2.92188 6.57227L2.91992 6.56055L2.91797 6.54785L2.91016 6.47168L2.90918 6.45898V4.16504H0.62793C0.281594 4.16496 0 3.88352 0 3.53711C2.12986e-07 3.19069 0.281594 2.90926 0.62793 2.90918H2.90918V0.62793C2.90926 0.281594 3.19069 2.12988e-07 3.53711 0Z" stroke={color} fill={fill}/>
    </svg>

  );
};
