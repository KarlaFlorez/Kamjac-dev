import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Open from './Componentes/open';
import Login from './Componentes/login';
import Welcome from './Componentes/welcome';
import Conected from './Conected';
import ConectedI from './ConectedI';


function App() {
    return(
		<div>
			<BrowserRouter>
				<Routes>
				<Route path='/*' element={<Open />}/>
				<Route path='/form' element={<Login />}/>
				<Route path='/user' element={<Welcome />}/>
        		<Route path='/con' element={<Conected />}/>
				<Route path='/conI' element={<ConectedI />}/>
				</Routes>
			</BrowserRouter>
		</div>
		
    );
}
export default App;