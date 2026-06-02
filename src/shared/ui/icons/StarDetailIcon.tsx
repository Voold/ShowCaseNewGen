import React from 'react';

export interface StarDetailIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  pathClassName?: string;
  fillColor?: string;
}

export const StarDetailIcon = ({
  color = 'white',
  size = 11,
  width,
  height,
  pathClassName,
  fillColor = 'none',
  ...props
}: StarDetailIconProps) => {
  const finalSize = size ?? width ?? height ?? 10.37;

  return (
    <svg 
    width={finalSize}
      height={finalSize} 
      {...props} 
      viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.15396 0.857744C5.64649 0.270545 6.58965 0.432961 6.8574 1.15108L7.64365 3.26042L9.73122 4.1025C10.4416 4.38963 10.5779 5.33621 9.97776 5.8127L8.2156 7.21267L8.05886 9.45789C8.00554 10.2224 7.14706 10.6451 6.50835 10.2215L4.63261 8.97787L2.44895 9.52242C1.70534 9.70797 1.03767 9.02255 1.24316 8.2842L1.84645 6.11587L0.654061 4.20712C0.247909 3.55725 0.693738 2.71079 1.45941 2.67806L3.70744 2.58259L5.15396 0.857744Z" fill="url(#paint0_radial_5514_26261)" stroke={color}/>
      <defs>
        <radialGradient id="paint0_radial_5514_26261" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.26709 3.94283) rotate(123.24) scale(6.6318 6.5349)">
          <stop offset="0.25" stop-color="#FFADB9"/>
          <stop offset="1" stop-color="#FD3250"/>
        </radialGradient>
      </defs>
    </svg>
  );
};
