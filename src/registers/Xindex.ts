// eslint-disable-next-line import/extensions,import/no-unresolved
import MathExt from '../math';

let localValue: number = 0;

const populate = () => {
    localValue = MathExt.getRandomUint8();
};

const set = (value: number) => {
    localValue = value;
};

const get = (): number => localValue;

const inc = () => {
    localValue += 1;
    if (localValue > 255) localValue = 0;
};

const dec = () => {
    localValue -= 1;
    if (localValue < 0) localValue = 255;
};

export default {
    populate,
    set,
    get,
    inc,
    dec,
};

