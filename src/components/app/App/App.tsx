import { ThemeEnum } from '@constants';
import { useTheme } from '@hooks';
import { getOppositeTheme } from '@utils';

const App: React.FC = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div className="flex items-center justify-between p-4">
            <div className="text-3xl font-bold text-primary-text">
                Habit Tracker
            </div>
            <button
                className="border p-2"
                type="button"
                onClick={() => setTheme(getOppositeTheme(theme))}
            >
                {theme === ThemeEnum.LIGHT ? 'Dark' : 'Light'}
            </button>
        </div>
    );
};

export default App;
