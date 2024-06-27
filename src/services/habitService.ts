import { doc, getDoc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

import { firestore } from '@/libs/firebase';
import { Habit, HabitWithoutId } from '@/types';

import { getAuthUserId } from './userService';

const getHabitDocumentByUID = (uid: string) => {
    return doc(firestore, `habits/${uid}`);
};

export const getHabits = async (): Promise<Habit[]> => {
    const uid = getAuthUserId();
    if (!uid) {
        throw Error('User is not authorized');
    }

    const docRef = getHabitDocumentByUID(uid);
    const habitsMap = (await getDoc(docRef)).data() ?? {};
    const habits: Habit[] = Object.values(habitsMap);

    return habits;
};

export const addHabit = async (habit: HabitWithoutId): Promise<Habit> => {
    const uid = getAuthUserId();
    if (!uid) {
        throw Error('User is not authorized');
    }

    const docRef = getHabitDocumentByUID(uid);
    const id = uuidv4();

    const newHabit: Habit = {
        id,
        ...habit,
    };

    await setDoc(
        docRef,
        {
            [id]: newHabit,
        },
        { merge: true }
    );

    return newHabit;
};
