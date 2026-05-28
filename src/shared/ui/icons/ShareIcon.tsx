interface ShareIconProps {
  color?: string;
  size?: number;
  pathClassName?: string;
}

export const ShareIcon = ({ color = 'currentColor', pathClassName }: ShareIconProps) => (
  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className={pathClassName} d="M12.7999 4.87004L7.76725 0.197805C7.3441 -0.228243 6.63046 0.0793829 6.63046 0.687829V2.978C0.594371 3.01816 -0.183604 8.40637 0.030621 11.1682C0.0571504 11.5071 0.550597 11.6364 0.659367 11.3159C1.95135 7.51821 6.06075 7.41816 6.6298 7.42293V9.87817C6.6298 10.4866 7.34344 10.7942 7.76658 10.3682L12.7992 5.85009C13.0665 5.58125 13.0672 5.13955 12.7999 4.87004Z" fill={color}/>
  </svg>
);