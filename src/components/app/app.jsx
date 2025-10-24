import { Layout } from '../layout/layout.jsx'
import { Restaurants } from '../restaurants/restaurants.jsx';
import { ThemeContextProvider } from '../themeContext/themeContextProvider.jsx';
import { AuthContextProvider } from '../authContext/authContextProvider.jsx';
import './reset.css';
import "./app.css";

export const App = () => {
    return (
    <AuthContextProvider>
        <ThemeContextProvider>
            <Layout>
                <Restaurants />
            </Layout>
        </ThemeContextProvider>
    </AuthContextProvider>
    );
}

