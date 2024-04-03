import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export interface RouterProps {
    routes: ReturnType<typeof createBrowserRouter>;
}

const Router: React.FC<RouterProps> = ({ routes }) => {
    return <RouterProvider router={routes} />;
};

export default Router;
