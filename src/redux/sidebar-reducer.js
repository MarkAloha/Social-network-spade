let instialState = { sidebar: [
    { id:1, url: "/profile", item: "Profile" },
    { id:2, url: "/dialogs", item: "Messages" },
    { id:3, url: "/users", item: "Users"},
    { id:4, url: "/news", item: "News" },
    { id:5, url: "/recipes", item: "Recipes" },
    { id:6, url: "/music", item: "Music" },
    { id:7, url: "/settings", item: "Settings" }
    
  ]}

const sidebarReducer = (state = instialState, action) => {
    
    return state;
}

export default sidebarReducer