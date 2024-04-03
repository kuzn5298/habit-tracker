import { cloneElement } from 'react';

import { Button } from '@/components';

import { Action } from '../../types';

interface HeaderProps {
    actions?: Action[];
}

export const Header: React.FC<HeaderProps> = ({ actions = [] }) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex-1 truncate text-2xl font-semibold sm:text-3xl">
                Habits today
            </div>
            <div className="flex flex-nowrap">
                {actions.map(({ id, icon, onClick }) => (
                    <Button
                        key={id}
                        variant="ghost"
                        size="icon"
                        onClick={onClick}
                    >
                        {cloneElement(icon)}
                    </Button>
                ))}
            </div>
        </div>
    );
};
