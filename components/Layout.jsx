import { useContext } from 'react';
import Head from 'next/head';
import { Score } from '../pages/_app';
import { Header, Main, Footer } from '../styles/layout';

const Layout = ({ tabTitle, headMsg, children }) => {
  const { levels:{cash} } = useContext(Score);
  return (
    <div>
      <Head>
        <title>{tabTitle}</title>
        <link rel='icon' href='/code.ico' />
      </Head>
      <Header>🐭 {headMsg} Cash: {(cash && cash.toFixed(2)) || 0} 🧀</Header>
      <Main>{children}</Main>
      <Footer>
        <button id='cursorPointer'>{'<'}</button>
        <button id='cursorPointer'>{'>'}</button>
      </Footer>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  tabTitle: 'Messed code',
  headMsg: 'Messed code needs your help',
};
