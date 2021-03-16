import { BoxBattery, BatteryLife } from '../../styles/level1';
import { checkCharged } from './utils';

const Battery = ({ charged }) => {
  return (
    <BoxBattery>
      <BatteryLife charged={checkCharged(charged, 25)} />
      <BatteryLife charged={checkCharged(charged, 50)} />
      <BatteryLife charged={checkCharged(charged, 75)} />
      <BatteryLife charged={checkCharged(charged, 100)} />
    </BoxBattery>
  );
};

export default Battery;
