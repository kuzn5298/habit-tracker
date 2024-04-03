import { HTMLAttributes } from 'react';

import { cn } from '@/utils/ui';

type ViewLoadingProps = HTMLAttributes<HTMLDivElement>;

const ViewLoading: React.FC<ViewLoadingProps> = ({ className, ...props }) => {
    return (
        <div
            className={cn(
                'flex size-full items-center justify-center bg-background',
                className
            )}
            {...props}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                className="w-32"
            >
                <circle
                    fill="none"
                    strokeOpacity="1"
                    stroke="currentColor"
                    strokeWidth=".5"
                    cx="100"
                    cy="100"
                    r="0"
                >
                    <animate
                        attributeName="r"
                        calcMode="spline"
                        dur="2"
                        values="1;80"
                        keyTimes="0;1"
                        keySplines="0 .2 .5 1"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="stroke-width"
                        calcMode="spline"
                        dur="2"
                        values="0;25"
                        keyTimes="0;1"
                        keySplines="0 .2 .5 1"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="stroke-opacity"
                        calcMode="spline"
                        dur="2"
                        values="1;0"
                        keyTimes="0;1"
                        keySplines="0 .2 .5 1"
                        repeatCount="indefinite"
                    />
                </circle>
            </svg>
        </div>
    );
};

export default ViewLoading;
