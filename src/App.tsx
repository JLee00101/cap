import { useState } from 'react';
import { createBrowserRouter, Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import { FrontPage } from './components/front-page/front-page';
import styles from './App.module.scss';

function App() {
    const [count, setCount] = useState(0);

   return (
        <div className={styles.App}>
            <Router>
            <Navbar/>
            <Routes>
                <Route path="/frontpage" element={<FrontPage/>}></Route>
            </Routes>
            </Router>
            </div>
   );
}

{/*const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
    },
  ]);
*/}
export default App;
