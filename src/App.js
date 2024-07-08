import { Router } from "./routes";
import NavigationBar from "./common/Navigation";

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <Router />
        </div>
    );
}

export default App;
