import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  Route
} from 'react-router-dom';
import Layout from './pages/Layout';
import AboutUs from './pages/AboutUs/AboutUs';
import LandingPage from './pages/LandingPage/LandingPage';
import Playlist from "./pages/Playlist/Playlist.jsx";
import Home from "./pages/Home/Home.jsx";
import Board from "./pages/Game/Board.jsx";
import Login from "./pages/LandingPage/Login.jsx";
import UserCheck from "./protected/UserCheck.jsx";
import Logout from "./pages/LandingPage/Logout.jsx";
import Signup from "./pages/LandingPage/Signup.jsx";


function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <LandingPage />
        },
        {
          path: 'about-us',
          element: <AboutUs />
        },
        {
          path: 'playlist',
          element: <Playlist/>
        },
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'board',
          element: <Board />
        },
        
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'protecteduser',
          element: <UserCheck />
        },
        {
          path: 'logout',
          element: <Logout />
        },
        {
          path: 'signup',
          element: <Signup />
        }
       
      ]
    },
    {
      path: '*', 
      loader: () => {
        return redirect('/')
      }
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default Router;
