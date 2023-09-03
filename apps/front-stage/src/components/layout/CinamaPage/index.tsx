import { ReactNode } from "react";
import { Cinama } from "../../templates";
import { Footer, Header } from "../../organisms";

type Props = {
  children: ReactNode;
}

const CinamaPage = ({children}: Props) => {
  return (
    <Cinama
      header={<Header/>}
      footer={<Footer/>}
    >
      {children}
    </Cinama>
  )
}

export default CinamaPage;