import clsx from 'clsx';
import { Logo } from '../../atoms';
import { NavBar } from '../../molecules';

import { ImageType } from '../../atoms/Logo/type';
import { LogoSVG } from '../../icons';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { TLinkTexts } from '../../../type/TLinkText';

const mockData: TLinkTexts = [
  { name: '電影資訊', link: '/info' },
  { name: '好康優惠', link: '/sale' },
  { name: '關於影城', link: '/about' },
];

type Props = {
  className?: string;
};

/**
 *
 * TODO:
 * 1. 規劃那些className 要由外面傳入，那些要在元件先定義好
 * 2. 測試資料要改用 msw 來取得模擬實際發API行為
 * 3. tailwindcss 過長的 utulity class 要放在元件的變數管理，或是直接寫在html tag上，或是其他
 */

const Header = ({ className }: Props): ReactNode => {
  const originClass = 'items-center';
  const classProps = clsx(originClass, className);

  const loginLinkClass =
    'h-fit px-6 py-3 border-2 border-brand-2 text-brand-3 font-semibold text-xl whitespace-nowrap leading-2';
  const navBarClass = 'w-full gap-x-2';
  return (
    <header className={classProps}>
      <Logo<ImageType.IMAGE> className="" linkClassName="">
        <LogoSVG />
      </Logo>
      <NavBar className={navBarClass} datas={mockData} />
      <Link className={loginLinkClass} to={'/login'}>
        登入/註冊
      </Link>
    </header>
  );
};

export default Header;
