import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FIREBASE_CODES_MAP, ProviderEnum } from '@/constants';
import { getFirebaseTranslationMessage } from '@/libs/firebase';
import { authService } from '@/services';

import { useToast } from '../useToast';
import { APIResponse, RESPONSE_ERROR, RESPONSE_SUCCESS } from './helpers';

interface UseAuthAPI {
    isLoading: boolean;
    signInWithProvider: (provider: ProviderEnum) => Promise<APIResponse>;
    signInByEmail: (email: string) => Promise<APIResponse>;
    sendSignInLinkToEmail: (email: string) => Promise<APIResponse>;
}

export const useAuthAPI = (): UseAuthAPI => {
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const { t } = useTranslation('errors');

    const signInWithProvider = async (
        provider: ProviderEnum
    ): Promise<APIResponse> => {
        try {
            await authService.signInWithProvider(provider);
            return RESPONSE_SUCCESS;
        } catch (e) {
            const message = getFirebaseTranslationMessage(
                e,
                FIREBASE_CODES_MAP,
                t
            );
            toast.error(message);
            return RESPONSE_ERROR;
        }
    };

    const signInByEmail = async (email: string): Promise<APIResponse> => {
        try {
            await authService.signInByEmailLink(email);
            return RESPONSE_SUCCESS;
        } catch (e) {
            const message = getFirebaseTranslationMessage(
                e,
                FIREBASE_CODES_MAP,
                t
            );
            toast.error(message);
            return RESPONSE_ERROR;
        }
    };

    const sendSignInLinkToEmail = async (
        email: string
    ): Promise<APIResponse> => {
        try {
            setIsLoading(true);
            await authService.sendSignInLinkToEmail(email);
            return RESPONSE_SUCCESS;
        } catch (e) {
            const message = getFirebaseTranslationMessage(
                e,
                FIREBASE_CODES_MAP,
                t
            );
            toast.error(message);
            return RESPONSE_ERROR;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        signInWithProvider,
        sendSignInLinkToEmail,
        signInByEmail,
    };
};
