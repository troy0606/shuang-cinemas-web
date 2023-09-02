import { MouseEventHandler, ReactNode } from "react";
import style from './style.module.scss';
import clsx from "clsx";

export enum ButtonType {
  BUTTON ='button',
  RESET = 'reset',
  SUBMIT = 'submit'
}

export enum ButtonTheme {
  DEFAULT = 'default',
  ROUNDED = 'rounded',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

type Props = {
  type: ButtonType,
  theme: ButtonTheme,
  size: ButtonSize,
  onClick: MouseEventHandler<HTMLButtonElement> | undefined,
  children: ReactNode,
  className?: string,
  disabled: boolean,
}

const Button = (props: Props): ReactNode => {
  const { type, onClick, children, theme, size, className, disabled } = props

  const classProps = clsx(style[theme], style[size], className);

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: ButtonType.BUTTON,
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.MEDIUM,
  onClick: () => {},
  className: '',
  disabled: false,
}

export default Button;