import type { SVGAttributes } from 'react';

export type AddIconProps = SVGAttributes<HTMLOrSVGElement>

export const AddIcon = ({ width = "24", height = "24", ...rest }: AddIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" {...rest}>
      <path d="M12 4.5V19.5M19.5 12H4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
