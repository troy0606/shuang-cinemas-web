import { ReactNode } from 'react';
import { UnorderedList, ListItem } from '../../atoms';
import { Link } from 'react-router-dom';
import { TLinkTexts } from '../../../type/TLinkText';
import clsx from 'clsx';

type Props = {
  className?: string;
  datas: TLinkTexts;
};

const NavBar = ({ className, datas }: Props): ReactNode => {
  const originClass = 'w-auto flex flex-col justify-center';
  const classProps = clsx(originClass, className);

  const unorderedListClass = 'w-full flex flex-row justify-center';
  const listClass = 'text-center py-3 px-4';
  const listLinkClass = 'text-xl leading-6 font-semibold';
  return (
    <nav className={classProps}>
      {
        <UnorderedList className={unorderedListClass}>
          {datas?.map((data) => (
            <>
              <ListItem className={listClass}>
                <Link className={listLinkClass} to={data.link}>
                  {data.name}
                </Link>
              </ListItem>
            </>
          ))}
        </UnorderedList>
      }
    </nav>
  );
};

export default NavBar;
