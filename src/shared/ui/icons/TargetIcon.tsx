import React from 'react';

export interface TargetIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  pathClassName?: string;
  fillColor?: string;
}

export const TargetIcon = ({
  color = '28BE46',
  size = 18,
  width,
  height,
  pathClassName,
  fillColor = 'none',
  ...props
}: TargetIconProps) => {
  const finalSize = size ?? width ?? height ?? 18;

  return (
    <svg 
    width={finalSize} 
    height={finalSize} 
    {...props} 
    viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4C4.895 4 4 4.895 4 6C4 7.105 4.895 8 6 8C7.105 8 8 7.105 8 6C8 4.895 7.105 4 6 4ZM10.8764 5.45455C10.6255 3.18 8.82 1.37455 6.54545 1.12364V0H5.45455V1.12364C3.18 1.37455 1.37455 3.18 1.12364 5.45455H0V6.54545H1.12364C1.37455 8.82 3.18 10.6255 5.45455 10.8764V12H6.54545V10.8764C8.82 10.6255 10.6255 8.82 10.8764 6.54545H12V5.45455H10.8764ZM6 9.81818C3.89182 9.81818 2.18182 8.10818 2.18182 6C2.18182 3.89182 3.89182 2.18182 6 2.18182C8.10818 2.18182 9.81818 3.89182 9.81818 6C9.81818 8.10818 8.10818 9.81818 6 9.81818Z" fill={color}/>
    </svg>

  );
};
