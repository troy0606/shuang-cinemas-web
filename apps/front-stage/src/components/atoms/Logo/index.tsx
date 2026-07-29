import { ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { ImageType } from './type';

type ReactSVGEType = React.FunctionComponent<React.ComponentProps<'svg'> & { title?: string }>;

type childrenTypeResult<T> = T extends ImageType.IMAGE
  ? ReactElement<'img'>
  : T extends ImageType.SVG
  ? ReactSVGEType
  : unknown;

type Props<T> = {
  link?: string;
  children: childrenTypeResult<T> & ReactNode;
  className?: string;
  linkClassName?: string;
};

/**
 *
 * TODO:
 * 1. 要找到方法來判斷依照不同的 children 驗證不同的 children type
 * ex: children(image), children(svg)
 */

const Logo = <T,>(props: Props<T>): ReactNode => {
  const { link, children, className, linkClassName } = props;

  const originClass = '';
  const classProps = clsx(originClass, className);

  const originLinkClass = '';
  const linkClassProps = clsx(originLinkClass, linkClassName);

  const hasLink = link?.length;

  console.log(children);

  return (
    <div className={classProps}>
      {hasLink ? (
        <Link to={link} className={linkClassProps}>
          {children}
        </Link>
      ) : (
        children
      )}
    </div>
  );
};

Logo.defaultProps = {
  link: '',
};

export default Logo;
