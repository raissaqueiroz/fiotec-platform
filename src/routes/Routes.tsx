import { Route, Routes as AppRoutes, BrowserRouter } from 'react-router-dom';
import { Default } from '../components/templates/Default';
import { GlobalStyle } from '../globalStyles';
import { DetailsProjects } from '../pages/DetailsProject';
import { FavoriteProjects } from '../pages/FavoriteProjects';
import { FeaturedProjects } from '../pages/FeaturedProjects';

export const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <AppRoutes>
                <Route path="/" element={<Default enableCategory={true} />}>
                    <Route path="/projects" element={<FeaturedProjects />} />
                    <Route path="/projects/:projectID" element={<DetailsProjects />} />
                </Route>
                <Route path="/" element={<Default enableCategory={false} />}>
                    <Route path="/favorites" element={<FavoriteProjects />} />
                </Route>
            </AppRoutes>
        </BrowserRouter>
        
    );
};
