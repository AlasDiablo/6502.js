// eslint-disable-next-line import/extensions,import/no-unresolved
import MathExt from '../math';

let localValue: number;

const populate = () => {
    localValue = MathExt.getRandomUint16();
};

const set = (value: number) => {
    localValue = value;
};

const get = (): number => localValue;

const inc = () => {
    localValue += 1;
    if (localValue > 65536) localValue = 0;
};

export default {
    populate,
    set,
    get,
    inc,
};
