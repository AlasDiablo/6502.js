const getRandomInRange = (from: number, to: number): number => Math.floor(Math.random() * (to - from) + from);

const getRandomUint8 = (): number => getRandomInRange(0, 255);

const getRandomUint16 = (): number => getRandomInRange(0, 65536);

export default {
    getRandomInRange,
    getRandomUint8,
    getRandomUint16,
};
