

import {NavBar} from "../../molecules";
import { TNavBarDatas } from "../../molecules/NavBar/type";

const mockData: TNavBarDatas = [
  {name: '電影資訊', link: '/info'},
  {name: '好康優惠', link: '/sale'},
  {name: '關於影城', link: '/about'},
]

type Props = {
  className?: string;
}

const Header = ({className}: Props) => {
  return (
    <header className={className}>
      <NavBar className="" datas={mockData}/>
    </header>
  )
}

export default Header;