import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Target from "./Target";
import Loading from "./Loading";
import PushAlert from "./PushAlert";
import PhoneType from "./PhoneType";
import SignupDone from "./SignupDone";
import SignUp1 from "./SignUp1";
import SignUp2 from "./SignUp2";
import SignUp3 from "./SignUp3";
import SignUp4 from "./SignUp4";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/SignUp1" element={<SignUp1 />} />
                <Route path="/SignUp2" element={<SignUp2 />} />
                <Route path="/SignUp3" element={<SignUp3 />} />
                <Route path="/SignUp4" element={<SignUp4 />} />
                <Route path="/Target" element={<Target />} />
                <Route path="/Loading" element={<Loading />} />
                <Route path="/PushAlert" element={<PushAlert />} />
                <Route path="/PhoneType" element={<PhoneType />} />
                <Route path="/SignupDone" element={<SignupDone />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
