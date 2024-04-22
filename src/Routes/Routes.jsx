import { createBrowserRouter } from 'react-router-dom'
import App from './../App';
import Cart from './../Pages/Cart';
import PlaceOrder from './../Pages/PlaceOrder';

const Routes = createBrowserRouter ([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/place_order',
                element: <PlaceOrder/>
            }
        ]
    },
    {
        path: '*',
        element: <h2>404 error page</h2>
    }
])

export default Routes