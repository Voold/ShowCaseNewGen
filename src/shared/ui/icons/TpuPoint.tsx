import React from 'react';

export interface TpuPointProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const TpuPoint = ({
  size = 19,
  width,
  height,
  ...props
}: TpuPointProps) => {
  const finalSize = size ?? width ?? height ?? 19;

  return (
    <svg
      width={finalSize}
      height={finalSize}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="9.21951" cy="9.21951" r="9.21951" fill="url(#paint0_linear_5370_25464)" />
      <path d="M9.19943 5.21846C9.57536 5.2111 9.93632 5.40633 10.1252 5.75167L10.6623 6.72237C10.9142 7.17726 11.2809 7.53604 11.7346 7.78487L12.6779 8.30049C13.015 8.48619 13.2134 8.83401 13.219 9.19795C13.2263 9.57846 13.0259 9.94221 12.6779 10.1335L11.7346 10.6501C11.2809 10.8989 10.9123 11.2559 10.6623 11.7126L10.135 12.6706V12.6726C9.9424 13.0215 9.59765 13.2128 9.2385 13.2185C8.87917 13.224 8.50066 13.0288 8.31174 12.6853L7.79123 11.7399C7.53381 11.274 7.17104 10.9083 6.70627 10.6521L5.73361 10.1169C5.40784 9.93679 5.22646 9.58605 5.21896 9.23897C5.21156 8.87315 5.39651 8.50484 5.73361 8.321L6.70432 7.78682C7.17091 7.53065 7.53564 7.1647 7.79123 6.69698L8.31174 5.75167C8.4951 5.41742 8.84381 5.22589 9.19943 5.21846ZM9.22482 6.88448C8.55638 8.11705 8.136 8.56645 6.88986 9.21065C7.06017 9.31644 7.19509 9.39666 7.34689 9.48018C8.01739 9.846 8.55684 10.3789 8.93283 11.0437L9.21994 11.5524L9.44553 11.153C10.0234 10.1318 10.5055 9.80319 11.552 9.21456C10.324 8.56465 9.8749 8.12851 9.22482 6.88448Z" fill="white" />
      <defs>
        <linearGradient id="paint0_linear_5370_25464" x1="-5.70732" y1="17.561" x2="15.8049" y2="3.07317" gradientUnits="userSpaceOnUse">
          <stop offset="0.286868" stopColor="#27FF6F" />
          <stop offset="0.371623" stopColor="#29EDB8" />
          <stop offset="0.55" stopColor="#00C7E6" />
          <stop offset="0.825258" stopColor="#0096FF" />
          <stop offset="1" stopColor="#6573FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};