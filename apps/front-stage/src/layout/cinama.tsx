import { ReactNode } from "react";
import Header from '../components/header';
import Footer from '../components/footer';

type props = {
  children: ReactNode;
}

export default function cinama({children}: props) {
  return (
    <>
      <Header/>
        {children}
      <Footer/>
    </>
  )
}
