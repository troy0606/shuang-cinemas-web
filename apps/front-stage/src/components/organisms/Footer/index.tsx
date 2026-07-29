import { ReactNode } from 'react';
import { ListItem, Logo, UnorderedList } from '../../atoms';
import { ImageType } from '../../atoms/Logo/type';
import { FacebookSVG, InstagramSVG, LogoSVG } from '../../icons';
import { TLinkTexts } from '../../../type/TLinkText';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const mockData: TLinkTexts = [
  { name: '聯絡我們', link: '/contact' },
  { name: '常見問題', link: '/commonquest' },
  { name: '隱私權公告', link: '/privacy' },
];

type Props = {
  className?: string;
};

/**
 *
 * TODO:
 * 1. 抽出原子元件結構
 * 2. 規劃那些className 要由外面傳入，那些要在元件先定義好
 * 3. 測試資料要改用 msw 來取得模擬實際發API行為
 * 4. tailwindcss 過長的 utulity class 要放在元件的變數管理，或是直接寫在html tag上，或是其他
 */

const Footer = ({ className }: Props): ReactNode => {
  const footerOriginClass = 'container pt-10 pb-8 mx-auto flex flex-col items-start gap-6 self-stretch';
  const footerClass = clsx(footerOriginClass, className);
  const sectionTopClass = 'flex items-center self-stretch justify-between';
  const sectionLeftClass = 'flex flex-col justify-center items-start gap-6';
  const unorderedListClass = 'flex items-start gap-x-10';
  const listClass = 'flex py-2 items-start gap-2';
  const listLinkClass = 'text-gray-4 text-xl leading-6 font-semibold';
  const iconBoxClass = 'flex items-start gap-6';

  const sectionRightClass = 'flex flex-col justify-center items-start gap-6';
  const sectionTitleClass = 'text-white text-xl leading-6 font-semibold';
  const sectionContentClass =
    'flex flex-col justify-center items-start gap-2 text-white text-base leading-6 font-normal';

  const sectionDownClass = 'flex items-center self-stretch justify-center';
  const copyRightClass = 'text-gray-3 text-base font-normal leading-6 w-auto';
  return (
    <footer className={footerClass}>
      <section className={sectionTopClass}>
        <div className={sectionLeftClass}>
          <Logo<ImageType.IMAGE> className="" linkClassName="">
            <LogoSVG />
          </Logo>
          <UnorderedList className={unorderedListClass}>
            {mockData?.map((data) => (
              <>
                <ListItem className={listClass}>
                  <Link to={data.link} className={listLinkClass}>
                    {data.name}
                  </Link>
                </ListItem>
              </>
            ))}
          </UnorderedList>
          <div className={iconBoxClass}>
            <FacebookSVG />
            <InstagramSVG />
          </div>
        </div>
        <div className={sectionRightClass}>
          <h5 className={sectionTitleClass}>爽影票影城</h5>
          <div className={sectionContentClass}>
            <p>02-8502-2208</p>
            <p>台北市市民大道 22 號 6 樓</p>
            <p>6F, No.22, Jingye 3rd Rd., Zhongshan Dist.,Taipei City 104, Taiwan (R.O.C.)</p>
          </div>
        </div>
      </section>
      <section className={sectionDownClass}>
        <div className={copyRightClass}>Copyright @ 2023 Cinemas. All Rights Reserved.</div>
      </section>
    </footer>
  );
};

export default Footer;
