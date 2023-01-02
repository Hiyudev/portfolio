import { SVGProps } from 'react';

export const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_803_33)">
      <path
        d="M285.75 0L190.5 95.4L119.062 166.95V0H0V286.2V477L190.5 286.2L381 95.4V0H285.75Z"
        fill="currentColor"
      />
      <path
        d="M218 512L316 413.8L389.5 340.15V512H512V217.4V21L316 217.4L120 413.8V512H218Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_803_33">
        <rect width={512} height={512} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
