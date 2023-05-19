import { Route, Routes } from "react-router-dom";
import "./animate.css";
import "./custom.css";
import { HomeEntry } from "./routes/0_home/HomeEntry";
import { AboutUsEntry } from "./routes/1_about-us/AboutUsEntry";
import { RegisterMemberEntry } from "./routes/2_register-member/RegisterMemberEntry";
import { EventsEntry } from "./routes/3_events/EventEntry";
import { ContactEntry } from "./routes/4_contact/ContactEntry";
import { Alumni } from "./routes/Alumni";
import { AnmeldungErfolgreich } from "./routes/AnmeldungErfolgreich";
import { Danke } from "./routes/Danke";
import { DataProtection } from "./routes/DataProtection";
import { Imprint } from "./routes/Imprint";
import { Footer } from "./routes/Shared/Footer";
import { Navbar } from "./routes/Shared/Navbar";
import { WinTreffen } from "./routes/WinTreffen";
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
                        <Route element={<Danke />} path="/danke"></Route>
                        <Route
                            element={<AnmeldungErfolgreich />}
                            path="/anmeldung-erfolgreich"
                        ></Route>
                        <Route
                            element={<WinTreffen />}
                            path="/win-treffen"
                        ></Route>
                        <Route element={<Alumni />} path="/alumni"></Route>
                        <Route
                            element={<DataProtection />}
                            path="/datenschutzerklaerung"
                        ></Route>

                        <Route element={<Imprint />} path="/impressum"></Route>
                        <Route path="/*" element={<HomeEntry />}></Route>
                    </Routes>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default App;
