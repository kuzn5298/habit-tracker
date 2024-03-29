import { GitHubIcon, GoogleIcon } from '@/components/icons';
import { ProviderEnum } from '@/constants';

interface ProviderDetails {
    id: ProviderEnum;
    name: string;
    icon: JSX.Element;
}

const googleProvider: ProviderDetails = {
    id: ProviderEnum.GOOGLE,
    name: 'Google',
    icon: <GoogleIcon />,
};

const githubProvider: ProviderDetails = {
    id: ProviderEnum.GITHUB,
    name: 'GitHub',
    icon: <GitHubIcon />,
};

export const PROVIDERS_LIST = [googleProvider, githubProvider];
