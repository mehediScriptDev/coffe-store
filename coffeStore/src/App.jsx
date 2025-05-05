
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './Components/Home'
import Products from './Components/Products'
import FollowInsta from './Components/FollowInsta'

function App() {


  return (
    <>
      <Header></Header>
      <Home></Home>
      <Products></Products>
      <FollowInsta></FollowInsta>
     
    </>
  )
}

export default App
