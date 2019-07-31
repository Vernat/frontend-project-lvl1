import { cons } from '@hexlet/pairs';

export const getRandomNumberBetween = (min, max) => Math.random() * (max - min) + min;

export const add = (a, b) => a + b;
export const minus = (a, b) => a - b;
export const multiply = (a, b) => a * b;

export const getStringForAdd = (a, b) => `${a} + ${b}`;
export const getStringForMinus = (a, b) => `${a} - ${b}`;
export const getStringForMultiply = (a, b) => `${a} * ${b}`;

export const getPairForAdd = (a, b) => cons(getStringForAdd(a, b), `${add(a, b)}`);
export const getPairForMinus = (a, b) => cons(getStringForMinus(a, b), `${minus(a, b)}`);
export const getPairForMultiply = (a, b) => cons(getStringForMultiply(a, b), `${multiply(a, b)}`);

export const getRandomOperationWithAnswer = (a, b) => {
  const variants = [getPairForAdd, getPairForMinus, getPairForMultiply];
  return variants[getRandomNumberBetween(0, variants.length)](a, b);
};
