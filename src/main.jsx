import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Root/Root.jsx';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Users from './Users/Users.jsx';
import Users2 from './Users2/Users2.jsx';
import UserDetails from './UserDetails/UserDetails.jsx';
import Posts from './Posts/Posts.jsx';
import PostDetails from './PostDetails/PostDetails.jsx';


const usersPromiss = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index: true,
      path: "home",
      Component: Home
    },
    {
      path: "about",
      element: <About></About>
    },
    {
      path: "/users",
      loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      Component: Users
    },
    {
      path: "/users2",
      element: <Suspense fallback={<span>loading ....</span>}>
        <Users2 usersPromiss={usersPromiss}></Users2>
        </Suspense>
    },
    {
      path: "/users/:userid",
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
      Component: UserDetails
    },
    {
      path: "/posts",
      loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      Component: Posts
    },
    {
      path: "/posts/:postId",
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      Component: PostDetails
    }
  ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
