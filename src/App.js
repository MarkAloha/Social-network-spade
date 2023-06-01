import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import RecipesContainer from "./components/Recipes/RecipesContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar
          sidebar={props.state.sidebarReducer.sidebar}
          names={props.state.dialogsReducer.dialogs.names}
        />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <DialogsContainer
                  // store={props.store}
                  // messages={props.state.dialogsReducer.dialogs.messages}
                  // names={props.state.dialogsReducer.dialogs.names}
                  // newMessageText={
                  //   props.state.dialogsReducer.dialogs.newMessageText
                  // }
                  
                />
              }
            />
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path="/profile/:userId/*" element={<ProfileContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/recipes" element={<RecipesContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
