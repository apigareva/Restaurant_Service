import { Layout } from '../layout/layout.jsx'
import { Restaurants } from '../restaurants/restaurants.jsx';
import './reset.css';
import "./app.css";

export const App = () => {
    return (
        <Layout>
            <Restaurants />
        </Layout>
    );
}

