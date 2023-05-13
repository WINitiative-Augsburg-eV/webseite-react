import { Link } from "react-router-dom";

export const Footer = () => {
    const footerMenu = [
        { title: "Startseite", url: "/" },
        { title: "Datenschutzerklärung", url: "datenschutzerklaerung/" },
        { title: "Impressum", url: "impressum/" },
        { title: "Mitglied werden", url: "mitglied-werden/" },
    ];

    return (
        <footer className="footer container text-center">
            <ul className="p-0 mb-1 small">
                {footerMenu.map((m) => (
                    <>
                        <li>
                            <Link to={m.url}>
                                {m.title}
                            </Link>
                        </li>
                    </>
                ))}
            </ul>
            <div className="copyright small">
                Copyright © 2023 WINitiative Augsburg e.V.
            </div>
        </footer>
    );
};
