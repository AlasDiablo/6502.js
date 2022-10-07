/* eslint-disable no-bitwise */
// eslint-disable-next-line import/extensions,import/no-unresolved
import { bit } from './types';

const getRandomInRange = (from: number, to: number): number => Math.floor(Math.random() * (to - from) + from);

const getRandomUint8 = (): number => getRandomInRange(0, 255);

const getRandomBit = (): bit => (getRandomInRange(0, 255) < 127 ? 1 : 0);

const getRandomUint16 = (): number => getRandomInRange(0, 65536);

const setBit = (num: number, position: number, bitValue: bit): number => {
    const mask = 1 << position;
    return (num & ~mask) | ((bitValue << position) & mask);
};

const getBit = (num: number, position: number): bit => {
    const mask = 1 << position;
    const rawValue = (num & mask);
    return rawValue === 0 ? 0 : 1;
};

export default {
    getRandomInRange,
    getRandomBool: getRandomBit,
    getRandomUint8,
    getRandomUint16,
    setBit,
    getBit,
};
