import { atom, PrimitiveAtom } from 'jotai';
import { atomWithHash } from 'jotai/utils';

type get = (_: PrimitiveAtom<number>) => number;

export const countAtom = atomWithHash('count', 0);
export const countMinusAtom = atom<number>((get: get) => get(countAtom) * -1);
