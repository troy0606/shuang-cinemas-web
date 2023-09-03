import { ReactNode } from "react";
import "./style.scss";

type Props = {
  header: ReactNode;
  footer: ReactNode;
  children?: ReactNode;
};

const Cinama = ({ header, footer, children }: Props) => {
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
};

export default Cinama;
