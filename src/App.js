// import logo from './logo.svg';
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
//
// function App() {
//   const a = 123;
//   const b = 234;
//   let c = a + b;
//   const d = [a, b, c];
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/*Edit <code>src/App.js</code> and save to reload.*/}
//           Welcome to Web Dev CS5610 Section 6
//         </p>
//         <p>
//           a = {a}
//           <br/>
//           b = {b}
//           <br/>
//           c = {c}
//           <br/>
//           d = {d}
//           <ul>
//             <li>{d[0]}</li>
//             <li>{d[1]}</li>
//             <li>{d[2]}</li>
//           </ul>
//           <ol>
//             {d.map(item => <li>{item}</li>)}
//           </ol>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    {/*<Route path="/labs"*/}
                    {/*       element={<Labs/>}/>*/}
                    <Route index element={<Labs/>}/>
                    <Route path="/hello" element={<HelloWorld/>}/>
                    <Route path="/tuiter/*" element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;
