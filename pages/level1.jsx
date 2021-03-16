import { useState } from 'react';
import BoxLevel1 from '../components/Level1/BoxLevel1';
import Layout from '../components/Layout';
import { Place, NextLevel } from '../styles/level1';

export default function level1() {
  const [nextLevel, setNextLevel] = useState(false);
  return (
    <Layout tabTitle='Level 1' headMsg='Level 1'>
      Charge the sad battery. Click them for info.
      <Place>
        {nextLevel && <NextLevel>next level</NextLevel>}
        <BoxLevel1
          happy='75%'
          msg='I am 75% positive'
          details='<Battery charged={box1} />'
        />
        <BoxLevel1
          happy={true}
          msg='True, I am 😎'
          details='<Battery charged={box2} />'
        />
        <BoxLevel1 editDetails setNextLevel={setNextLevel} />
        <BoxLevel1
          happy='100%'
          msg='I am 100% happy'
          details='<Battery charged={box3} />'
        />
      </Place>
    </Layout>
  );
}
