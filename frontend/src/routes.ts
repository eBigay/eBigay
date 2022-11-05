import About from './pages/About';
import Home  from './pages/Home'


 const routes = [
    {
        path : '/',
        element: Home,
        key: 'Home',
    },
    {
        path : '/about',
        element: About,
        key: 'About',
    }
]

export default routes;