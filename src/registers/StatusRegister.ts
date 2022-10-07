// eslint-disable-next-line import/extensions,import/no-unresolved
import MathExt from '../math';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { bit } from '../math/types';

// NV---IZC
let localN: bit = 0;
let localV: bit = 0;
let localI: bit = 0;
let localZ: bit = 0;
let localC: bit = 0;

const populate = () => {
    localN = MathExt.getRandomBit();
    localV = MathExt.getRandomBit();
    localI = MathExt.getRandomBit();
    localZ = MathExt.getRandomBit();
    localC = MathExt.getRandomBit();
};

const set = (value: number) => {
    localC = MathExt.getBit(value, 0);
    localZ = MathExt.getBit(value, 1);
    localI = MathExt.getBit(value, 2);
    localV = MathExt.getBit(value, 6);
    localN = MathExt.getBit(value, 7);
};

const get = (): number => {
    let value: number = 0;
    value = MathExt.setBit(value, 0, localC);
    value = MathExt.setBit(value, 1, localZ);
    value = MathExt.setBit(value, 2, localI);
    value = MathExt.setBit(value, 6, localV);
    value = MathExt.setBit(value, 7, localN);
    return value;
};

const C = {
    get: (): bit => localC,
    set: (value: bit) => { localC = value; },
};

const Z = {
    get: (): bit => localZ,
    set: (value: bit) => { localZ = value; },
};

const I = {
    get: (): bit => localI,
    set: (value: bit) => { localI = value; },
};

const V = {
    get: (): bit => localV,
    set: (value: bit) => { localV = value; },
};

const N = {
    get: (): bit => localN,
    set: (value: bit) => { localN = value; },
};

export default {
    populate,
    get,
    set,
    flags: {
        N,
        V,
        I,
        Z,
        C,
    },
};
