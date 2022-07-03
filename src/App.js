import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AdminCategories from './components/AdminCategories/AdminCategories';
import CategoryEdit from './components/CategoryEdit/CategoryEdit';
import AddCategory from './components/AddCategory/AddCategory';





function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route  path={'/'} element={<Home></Home>}></Route>
        <Route  path={'/login'} element={<Login></Login>}></Route>
        <Route  path={'/dashboard'} element={<Dashboard></Dashboard>}></Route>
        <Route  path={'/admincategories'} element={<AdminCategories></AdminCategories>}></Route>
        <Route  path={'/categoryForm/:id'} element={<CategoryEdit></CategoryEdit>}></Route>
        <Route  path={'/addCategory'} element={<AddCategory></AddCategory>}></Route>
       
      

      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
