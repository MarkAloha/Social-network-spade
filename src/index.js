import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        addMessage={store.addMessage.bind(store)}
        onPostChange={store.onPostChange.bind(store)}
        onMessageChange={store.onMessageChange.bind(store)}
      />
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// reportWebVitals();
