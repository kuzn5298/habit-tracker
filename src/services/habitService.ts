import { child, get, ref, update } from 'firebase/database';
import {
    deleteField,
    doc,
    getDoc,
    setDoc,
    updateDoc,
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

import { database, firestore } from '@/libs/firebase';
import { Habit, HabitsCompletedByDate, HabitWithoutId } from '@/types';

import { getAuthUserId } from './userService';

const getCompleteHabitPath = (uid: string, habitId: string, date: string) =>
    `/habits/${uid}/date/${date.replaceAll('-', '/')}/${habitId}`;

const getCompleteDateListPath = (uid: string, habitId: string) =>
    `/habits/${uid}/list/${habitId}`;

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

export const clearHabitCompletedHistory = async (
    habitId: string
): Promise<string> => {
    const uid = getAuthUserId();
    if (!uid) {
        throw Error('User is not authorized');
    }

    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `habits/${uid}/list/${habitId}`));
    const dateList = Object.keys(snapshot.exists() ? snapshot.val() : {});

    const pathsToDelete = dateList.reduce(
        (acc, date) => {
            const key = getCompleteHabitPath(uid, habitId, date);
            acc[key] = null;
            return acc;
        },
        {} as Record<string, null>
    );

    pathsToDelete[getCompleteDateListPath(uid, habitId)] = null;

    await update(ref(database), pathsToDelete);

    return habitId;
};

export const deleteHabit = async (habitId: string): Promise<string> => {
    const uid = getAuthUserId();
    if (!uid) {
        throw Error('User is not authorized');
    }

    const docRef = getHabitDocumentByUID(uid);

    await clearHabitCompletedHistory(habitId);

    await updateDoc(docRef, {
        [habitId]: deleteField(),
    });

    return habitId;
};

export const completeHabit = async (
    habitId: string,
    date: string,
    state: boolean
): Promise<boolean> => {
    const uid = getAuthUserId();
    if (!uid) {
        throw Error('User is not authorized');
    }

    const updates: Record<string, boolean> = {};
    updates[`${getCompleteHabitPath(uid, habitId, date)}/completed`] = state;
    updates[`${getCompleteDateListPath(uid, habitId)}/${date}`] = true;

    await update(ref(database), updates);

    return state;
};

export const getHabitCompletedMap = async (
    date: string
): Promise<HabitsCompletedByDate> => {
    const uid = getAuthUserId();
    if (!uid) {
        throw Error('User is not authorized');
    }

    const dateArr = date.split('-').filter((d) => Boolean(d));

    const dbRef = ref(database);
    const snapshot = await get(
        child(dbRef, `habits/${uid}/date/${dateArr.join('/')}`)
    );

    const value = snapshot.exists() ? snapshot.val() : {};
    const response: HabitsCompletedByDate = dateArr
        .reverse()
        .reduce((acc, key, i) => {
            const isFirst = i === 0;
            return { [key]: isFirst ? value : acc };
        }, {});

    return response;
};
