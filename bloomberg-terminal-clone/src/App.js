import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import NewsFeed from "./components/NewsFeed";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
        <NewsFeed />
      </div>
    </div>
  );
};

export default App;

