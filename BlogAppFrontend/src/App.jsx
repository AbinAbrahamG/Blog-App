  import React from 'react';
  import Home from './components/Home';
  import Login from './components/Login';
  import Signup from './components/Signup';
  import { Route, Routes } from 'react-router-dom';
  import Addblogs from './components/Addblogs';
  import Main1 from './components/Main1';
  import PrivateRoutes from './components/PrivateRoutes';

  const App = () => {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Login />} ></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route element={<PrivateRoutes/>}>
          <Route path='/blogs' element={<Main1 child={<Home />} />} ></Route>
          <Route path='/addblogs' element={<Main1 child={<Addblogs />} />} ></Route>
          </Route>
        </Routes>
      </div>
    );
  }

  export default App;