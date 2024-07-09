import { Router } from "./Routes/router";
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
