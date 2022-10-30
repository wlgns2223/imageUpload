import { Main } from "./components/main";
import { Background } from "./core/ui/background";

function App() {
    return (
        <div className="App">
            <Background>
                <div className="w-96 relative top-20 ">
                    <Main />
                </div>
            </Background>
        </div>
    );
}

export default App;
