import { Outlet } from 'react-router-dom';
import { CinamaPage } from './components/layout';
import { sum, multiplySum } from '@libs/utils';

// 計算的證明，例如 sum(1,2,3) = 6，multiplySum(1,2,3) = 6 用文字顯示成元素並顯示在畫面上
export default function Root() {
  const sumResult = sum(1, 2, 3);
  const multiplySumResult = multiplySum(4, 5, 6);
  return (
    <>
      <CinamaPage>
        <div>
          <p>@libs/utils sum(1, 2, 3) = {sumResult}</p>
          <p>@libs/utils multiplySum(4, 5, 6) = {multiplySumResult}</p>
        </div>
        <Outlet />
      </CinamaPage>
    </>
  );
}
