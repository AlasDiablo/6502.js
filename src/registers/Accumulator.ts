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

export default {
    populate,
    set,
    get,
};
