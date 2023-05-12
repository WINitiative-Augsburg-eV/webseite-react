import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./animate.css";
import "./custom.css";
import { HomeEntry } from "./routes/0_home/HomeEntry";
import { AboutUsEntry } from "./routes/1_about-us/AboutUsEntry";
import { RegisterMemberEntry } from "./routes/2_register-member/RegisterMemberEntry";
import { EventsEntry } from "./routes/3_events/EventEntry";
import { ContactEntry } from "./routes/4_contact/ContactEntry";
import { Footer } from "./routes/Shared/Footer";
import { Navbar } from "./routes/Shared/Navbar";
import "./theme.scss";

function App() {
    const router = createBrowserRouter([
        {
            path: "/ueber-uns",
            element: <AboutUsEntry></AboutUsEntry>,
        },
        {
            path: "/mitglied-werden",
            element: <RegisterMemberEntry></RegisterMemberEntry>,
        },
        {
            path: "/angebote",
            element: <EventsEntry></EventsEntry>,
        },
        {
            path: "/kontakt",
            element: <ContactEntry></ContactEntry>,
        },
        {
            path: "*",
            element: <HomeEntry />,
        },
    ]);
    return (
        <>
            <Navbar></Navbar>
            <div className="d-flex flex-column align-items-center">
                <div className="w-75">
                    <RouterProvider router={router} />
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default App;
