import { Face } from '../../styles/level1';
import { chargedMouth, checkCharged } from './utils';

const BoxFace = ({ happy }) => (
  <Face happy={checkCharged(happy, 60)}>
    <div id='eyes'>
      <div id='eye-globe'>
        <sup id='eye'>•.</sup>
      </div>
      <div id='eye-globe'>
        <sup id='eye'>.•</sup>
      </div>
    </div>
    {chargedMouth(happy)}
  </Face>
);

export default BoxFace;
