
import { Outlet, } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './Components/Home'
import Products from './Components/Products'
import FollowInsta from './Components/FollowInsta'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <Header></Header>
      <Home></Home>
      <Products></Products>
      <FollowInsta></FollowInsta>
      <Footer></Footer>
     
    </>
  )
}

export default App
