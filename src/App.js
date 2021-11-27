import React, {Suspense} from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import CoinPage from "./components/CoinPage";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Suspense fallback={<Loading styled />}>
      <Router>
        <Layout>
          <NavBar />
          <Switch>
            <Route path="/" exact children={<Home />} />
            <Route path="/coins/:id" exact children={<CoinPage />} />
          </Switch>
          <Footer />
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;

// import {useEffect, useState, memo, useCallback} from "react";

// const User = memo(({item, handelClick}) => {
//   useEffect(() => {
//     console.log("user", item, "rendered");
//   });
//   return <div onClick={() => handelClick(item)}>{item}</div>;
// });

// function App() {
//   const [list, setList] = useState([]);
//   const [input, setInput] = useState("");
//   const handelAddItem = () => {
//     setList((prev) => [...prev, input]);
//   };

//   const handelClick = useCallback((item) => {
//     console.log(item);
//   }, []);

//   return (
//     <div className="App">
//       <input value={input} onChange={(e) => setInput(e.target.value)} />
//       <button onClick={handelAddItem}> Add Item </button>
//       <div>
//         {list.length ? (
//           list.map((item, index) => (
//             <User key={index} item={item} handelClick={handelClick} />
//           ))
//         ) : (
//           <h1>no Item in list</h1>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
