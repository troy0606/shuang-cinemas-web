import { MouseEventHandler, ReactNode } from "react";

type Props = {
  onClick: MouseEventHandler<HTMLLIElement> | undefined;
  children: ReactNode;
  className?: string;
};
const ListItem = ({ children, className , onClick}: Props) => (
  <li className={className} onClick={onClick}>{children}</li>
);

ListItem.defaultProps = {
  onClick: () => {},
  className: '',
  disabled: false,
}

export default ListItem;
