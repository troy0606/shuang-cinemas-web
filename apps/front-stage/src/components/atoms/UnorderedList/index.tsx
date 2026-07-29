import { MouseEventHandler, ReactNode } from "react";

type Props = {
  onClick: MouseEventHandler<HTMLUListElement> | undefined;
  children: ReactNode;
  className?: string;
};
const UnorderedList = ({ children, className , onClick}: Props) => (
  <ul className={className} onClick={onClick}>{children}</ul>
);

UnorderedList.defaultProps = {
  onClick: () => {},
  className: '',
  disabled: false,
}

export default UnorderedList;