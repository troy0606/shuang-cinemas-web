import { MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';

import { ButtonType, ButtonTheme, ButtonSize } from './type';

type Props = {
  type: ButtonType;
  theme: ButtonTheme;
  size: ButtonSize;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  children: ReactNode;
  className: string;
  disabled: boolean;
};

const Button = (props: Props): ReactNode => {
  const { type, onClick, children, theme, size, className, disabled } = props;

  const classProps = clsx(theme, size, className);

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: ButtonType.BUTTON,
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.MEDIUM,
  onClick: () => {},
  className: '',
  disabled: false,
};

export default Button;
