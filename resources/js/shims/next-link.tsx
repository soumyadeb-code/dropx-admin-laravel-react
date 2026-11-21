import React, { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ href, children, ...props }, ref) => {
  return (
    <RouterLink ref={ref} to={href || '#'} {...props}>
      {children}
    </RouterLink>
  );
});

Link.displayName = 'Link';
export default Link;
