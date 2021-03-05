import Head from 'next/head';
import { Header, Main, Footer } from '../styles/layout';

const Layout = ({ tabTitle, headMsg, children }) => (
  <div>
    <Head>
      <title>{tabTitle}</title>
      <link rel='icon' href='/code.ico' />
    </Head>
    <Header><img alt="" src='/codeperson.png' />{headMsg}</Header>
    <Main>{children}</Main>
    <Footer>
      <button>{'<'}</button>
      <button>{'>'}</button>
    </Footer>
  </div>
);

export default Layout;

Layout.defaultProps = {
  tabTitle: 'Messed code',
  headMsg: 'Messed code needs your help',
};
