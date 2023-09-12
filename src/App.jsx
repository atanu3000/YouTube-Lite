import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContext } from "./context/contextApi";

// import all components
import Feed from "./components/Feed";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import VideoDetails from "./components/VideoDetails";

export default function App() {
    return (
        <AppContext>
            <Router>
                <div className="flex flex-col h-full">
                    <Header />
                    <Routes> 
                        <Route path="/" element={<Feed />}/>
                        <Route path="/results/:searchQuery" element={<SearchResults />}/>
                        <Route path="/video/:id" element={<VideoDetails />}/>
                    </Routes>
                </div>
            </Router>
        </AppContext>
    );
}
