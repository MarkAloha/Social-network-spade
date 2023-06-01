import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
let state = store.getState()

// let rerenderEntireTree = () => {
  
  root.render(
    <React.StrictMode>
      <Provider store={store}>        
      <App      
        state={state}
        store={store}   
        dispatch={store.dispatch.bind(store)}          
      />
      </Provider>   
    </React.StrictMode>
  )

// rerenderEntireTree();

// store.subscribe(() => { 
//   let state = store.getState()  
//   rerenderEntireTree(state)
// } );

// reportWebVitals();
