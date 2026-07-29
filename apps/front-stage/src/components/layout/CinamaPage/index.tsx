import { ReactNode } from 'react';
import { Cinama } from '../../templates';
import { Footer, Header } from '../../organisms';

type Props = {
  children: ReactNode;
};

const CinamaPage = ({ children }: Props) => {
  const headerClass = 'sticky container mx-auto flex flex-row w-full py-3 justify-between';
  return (
    <Cinama header={<Header className={headerClass} />} footer={<Footer />}>
      {children}
    </Cinama>
  );
};

export default CinamaPage;
