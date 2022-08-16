import { atom } from "jotai";

export const googleUserAtom = atom(null);
export const userAtom = atom({
    uuid: null,
    name: null,
    birthday: null,
    gender: null
})