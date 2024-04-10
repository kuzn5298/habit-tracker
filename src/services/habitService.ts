import { addDoc, collection, getDocs } from 'firebase/firestore';

import { firestore } from '@/libs/firebase';
import { Habit, HabitWithoutId } from '@/types';

import { getAuthUserId } from './userService';

const getHabitCollectionByUID = (uid: string) => {
    return collection(firestore, `habits/${uid}/habits`);
};

export const getHabits = async (): Promise<Habit[]> => {
    const uid = getAuthUserId();
    if (!uid) {
        return [];
    }

    const habitCollection = getHabitCollectionByUID(uid);
    const habitsSnapshot = await getDocs(habitCollection);
    const habits: Habit[] = habitsSnapshot.docs.map((item) => ({
        id: item.id,
        ...(item.data() as HabitWithoutId),
    }));

    return habits;
};

export const addHabit = async (
    habit: HabitWithoutId
): Promise<string | null> => {
    const uid = getAuthUserId();
    if (!uid) {
        return null;
    }

    const habitCollection = getHabitCollectionByUID(uid);
    const docRef = await addDoc(habitCollection, habit);
    return docRef.id;
};
