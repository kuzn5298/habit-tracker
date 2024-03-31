import { cloneElement } from 'react';
import { BookA, CigaretteOff } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button, Checkbox } from '@/components/ui';
import { AppRouteEnum } from '@/constants';
import { authService } from '@/services';
import { cn } from '@/utils/ui';

const HABITS = [
    {
        id: '1',
        name: 'Learn English',
        description: '10 words every day',
        icon: <BookA />,
        color: 'bg-blue-600',
    },
    {
        id: '2',
        name: 'Walking',
        description: '10000 steps every day',
        // color: 'bg-teal-600',
    },
    {
        id: '3',
        name: 'Give up smoking',
        description: "don't smoke all day",
        icon: <CigaretteOff />,
        color: 'bg-red-600',
    },
];

const Habits: React.FC = () => {
    const onLogout = () => {
        authService.signOut();
    };

    return (
        <div>
            <h2 className="scroll-m-20 border-b px-6 py-2 text-3xl font-semibold tracking-tight first:mt-0">
                Habits
            </h2>
            <div className="mb-6 flex gap-4">
                <Button variant="link" asChild>
                    <Link to={AppRouteEnum.ADD_HABIT}>Add Habits</Link>
                </Button>
                <Button variant="link" asChild>
                    <Link to={AppRouteEnum.SETTINGS}>Settings</Link>
                </Button>
                <Button variant="link" asChild>
                    <Link to={AppRouteEnum.NOT_FOUND}>Error</Link>
                </Button>
            </div>
            <div>
                <Button onClick={onLogout}>Logout</Button>
            </div>
            <div className="mt-10 flex justify-center">
                <div className="flex w-[400px] flex-col gap-3">
                    {HABITS.map(({ id, name, description, icon, color }) => (
                        <div
                            key={id}
                            className="flex cursor-pointer items-center gap-4 rounded-lg border px-4 py-3 text-left text-sm transition-all hover:bg-accent"
                        >
                            {icon && cloneElement(icon)}
                            <div className="grid flex-1 gap-1">
                                <p className="flex items-center gap-2 text-sm font-medium leading-none">
                                    {name}
                                    {color && (
                                        <span
                                            className={cn(
                                                'flex size-2 rounded-full',
                                                color
                                            )}
                                        />
                                    )}
                                </p>
                                {description && (
                                    <p className="text-sm text-muted-foreground">
                                        {description}
                                    </p>
                                )}
                            </div>
                            <Checkbox className="size-6" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Habits;
