import './App.css';
import {Routes, Route, useParams, BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/blinking-text/:text" element={<Text/>}/>
            </Routes>
        </BrowserRouter>
    );
}

function Text() {
    let params = useParams();
    return <div className={"blinker"}>
        {params.text}
    </div>

}

export default App;
