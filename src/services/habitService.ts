import {
    deleteField,
    doc,
    getDoc,
    setDoc,
    updateDoc,
} from 'firebase/firestore';
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

export const updateHabit = async (
    habitId: string,
    habit: HabitWithoutId
): Promise<Habit> => {
    const uid = getAuthUserId();
    if (!uid) {
        throw Error('User is not authorized');
    }

    const docRef = getHabitDocumentByUID(uid);

    const newHabit: Habit = {
        id: habitId,
        ...habit,
    };

    await updateDoc(docRef, {
        [habitId]: newHabit,
    });

    return newHabit;
};

export const deleteHabit = async (habitId: string): Promise<string> => {
    const uid = getAuthUserId();
    if (!uid) {
        throw Error('User is not authorized');
    }

    const docRef = getHabitDocumentByUID(uid);

    await updateDoc(docRef, {
        [habitId]: deleteField(),
    });

    return habitId;
};
