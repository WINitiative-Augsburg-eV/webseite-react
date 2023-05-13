import { Route, Routes } from "react-router-dom";
import "./animate.css";
import "./custom.css";
import { HomeEntry } from "./routes/0_home/HomeEntry";
import { AboutUsEntry } from "./routes/1_about-us/AboutUsEntry";
import { RegisterMemberEntry } from "./routes/2_register-member/RegisterMemberEntry";
import { EventsEntry } from "./routes/3_events/EventEntry";
import { ContactEntry } from "./routes/4_contact/ContactEntry";
import { DataProtection } from "./routes/DataProtection/DataProtection";
import { Imprint } from "./routes/Imprint/Imprint";
import { Footer } from "./routes/Shared/Footer";
import { Navbar } from "./routes/Shared/Navbar";
import "./theme.scss";


function App() {
    return (
        <>
            <Navbar></Navbar>
            <div className="d-flex flex-column align-items-center">
                <div className="mx-4 ">
                    <Routes>
                        <Route
                            element={<AboutUsEntry />}
                            path="/ueber-uns"
                        ></Route>
                        <Route
                            element={<RegisterMemberEntry />}
                            path="/mitglied-werden"
                        ></Route>
                        <Route
                            element={<EventsEntry />}
                            path="/angebote"
                        ></Route>
                        <Route
                            element={<ContactEntry />}
                            path="/kontakt"
                        ></Route>
                        <Route
                            element={<DataProtection />}
                            path="/datenschutzerklaerung"
                        ></Route>
                        <Route element={<Imprint />} path="/impressum"></Route>
                        <Route path="/" element={<HomeEntry />}></Route>
                    </Routes>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default App;
