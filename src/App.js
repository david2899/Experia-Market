import React, { Suspense } from 'react';
import './App.css';
import {   Routes , Route } from 'react-router-dom';
import routes from './pages/index'
import { Loading } from './components/Loading';

function App() {

    return ( 
    
         <Suspense fallback={<Loading />}>

   
        <Routes >
            {
            routes.map((data,index) => (
                <Route onUpdate={() => window.scrollTo(0, 0)} exact={true} path={data.path} element={data.component} key={index} />
            ))
            }
      </Routes>
      </Suspense>
      
    );
}

export default App;
