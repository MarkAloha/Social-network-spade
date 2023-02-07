import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar
          sidebar={props.state.sidebar}
          names={props.state.dialogs.names}
        />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  messages={props.state.dialogs.messages}
                  names={props.state.dialogs.names}
                  addMessage={props.addMessage}
                  newMessageText={props.state.newMessageText}
                  onMessageChange={props.onMessageChange}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  posts={props.state.profile}
                  addPost={props.addPost}
                  newPostText={props.state.newPostText}
                  onPostChange={props.onPostChange}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          {/* <Dialogs /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
