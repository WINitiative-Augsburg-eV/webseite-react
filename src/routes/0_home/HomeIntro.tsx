import { Link } from "react-router-dom";

export const HomeIntro = () => {
    return (
        <div className="welcome ">
            <div className="grid">
                <div className="animate__animated animate__fadeInUp main-page-card">
                    <div className="content">
                        <h5>We Want YOU</h5>
                        <p>
                            Wir veranstalten verschiedene Events wie das
                            WIN-Treffen, Exkursionen und Lerngruppen. Als
                            Mitglied kannst du bei der Planung und Organisation
                            mitwirken und wertvolle Kontakte zu WINern aus
                            verschiedenen Semestern knüpfen. Du brauchst noch
                            mehr Gründe?
                        </p>
                        <center>
                            <Link
                                to={`/ueber-uns`}
                                className="btn btn-info text-white px-5 mx-4 btn-lg"
                                style={{ color: "#037c94" }}
                            >
                                Über uns
                            </Link>
                            <Link
                                to={`/mitglied-werden`}
                                className="btn btn-info text-white px-5 btn-lg"
                                style={{ color: "#037c94" }}
                            >
                                Mitglied werden
                            </Link>
                        </center>
                    </div>
                </div>
                <div className="animate__animated animate__fadeInUp main-page-card">
                    <div className="content">
                        <h5>Das WIN-Treffen</h5>
                        <p>
                            Das WIN-Treffen bietet Wirtschaftsinformatik
                            Studierenden eine entspannte Atmosphäre, um sich
                            auszutauschen, Kontakte zu knüpfen und
                            Karrieremöglichkeiten zu teilen. Es ist eine
                            großartige Gelegenheit, von anderen Studierenden zu
                            lernen und ihr Fachwissen und Erfahrungen zu nutzen.{" "}
                        </p>
                        <center>
                            <Link
                                to={`/win-treffen`}
                                className="btn btn-info text-white px-5 btn-lg"
                                style={{ color: "#037c94" }}
                            >
                                 Anmeldung
                            </Link>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
};
