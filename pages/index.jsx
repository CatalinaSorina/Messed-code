import Layout from '../components/Layout';
import { BreakLine, StartButton } from '../styles/start';

export default function Home() {
  return (
    <Layout tabTitle='Start point'>
      Welcome!
      <BreakLine />
      <StartButton href='/level1'>start</StartButton>
    </Layout>
  );
}
