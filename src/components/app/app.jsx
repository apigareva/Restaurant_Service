import { Provider } from 'react-redux';
import { Layout } from '../layout/layout.jsx'
import { ThemeContextProvider } from '../themeContext/themeContextProvider.jsx';
import { AuthContextProvider } from '../authContext/authContextProvider.jsx';
import { store } from '../../redux/store.js';

import './reset.css';
import "./app.css";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { RestaurantsLayout } from '../../layouts/restaurantsLayout.jsx';
import { RestaurantsPage } from '../../pages/restaurantsPage.jsx';
import { RestaurantPage } from '../../pages/restaurantPage.jsx';
import { MenuPage } from '../../pages/menuPage.jsx';
import { ReviewsPage } from '../../pages/reviewsPage.jsx';
import { NotFoundPage } from '../../pages/notFoundPage.jsx';
import { HomePage } from '../../pages/homePAge.jsx';
import { DishPage } from '../../pages/dishPage.jsx';
import { DishLayout } from '../../layouts/dishLayout.jsx';

export const App = () => {
    return (
    <Provider store={store}>
        <AuthContextProvider>
            <ThemeContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path='/' index element={<HomePage />} />
                            <Route path='/restaurants' element={<RestaurantsLayout />}> 
                                <Route index element={<RestaurantsPage />} />
                                <Route path=':restaurantId' element={<RestaurantPage />}>
                                    <Route index element={<Navigate to={'menu'}/>}/>
                                    <Route path='menu' index element={<MenuPage />} />
                                    <Route path='reviews' element={<ReviewsPage />} />
                                </Route>
                            </Route>
                            <Route path='dish' element={<DishLayout />}>
                                <Route path=':dishId' element={<DishPage />}></Route>
                            </Route>
                            <Route path='*' element={<NotFoundPage />}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeContextProvider>
        </AuthContextProvider>
    </Provider>
    );
}

