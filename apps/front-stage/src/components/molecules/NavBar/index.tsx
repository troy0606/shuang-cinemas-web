import { ReactNode } from "react";
import { UnorderedList, ListItem } from "../../atoms";
import { Link } from "react-router-dom";
import { TNavBarDatas } from "./type";

type Props = {
  className?: string;
  datas: TNavBarDatas;
};

const NavBar = ({ className, datas }: Props): ReactNode => {
  return (
    <nav className={className}>
      {
        <UnorderedList>
          {datas?.map((data) => (
            <>
              <ListItem>
                <Link to={data.link}>{data.name}</Link>
              </ListItem>
            </>
          ))}
        </UnorderedList>
      }
    </nav>
  );
};

export default NavBar;
