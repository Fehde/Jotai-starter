import { atom, WritableAtom } from 'jotai';
import { useUpdateAtom } from 'jotai/utils';
import { useEffect, useMemo } from 'react';

export const useUpdateAllAtoms = <T,>(tuples: [WritableAtom<unknown, T, void | Promise<void>>, T][]) => {
    const updateAllAtoms = useUpdateAtom(
        useMemo(
            () =>
                atom(null, (get, set, tuples: [WritableAtom<unknown, T, void | Promise<void>>, T][]) => {
                    tuples.forEach(([atom, value]) => {
                        set(atom, value);
                    });
                }),
            []
        )
    );
    useEffect(() => {
        updateAllAtoms(tuples);
    }, [updateAllAtoms, tuples]);
};

// in component
// useUpdateAllAtoms(useMemo(() => [
//     [atomProp1, propExternal1],
//     [atomProp2, propExternal2],
//     [atomProp3, propExternal3],
// ], [])
