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
                            mehr Gründe?{" "}
                            <a style={{ color: "#037c94" }} href="/ueber-uns">
                                Dann schau hier mal vorbei!
                            </a>
                        </p>
                        <center>
                            <a
                                href={`/mitglied-werden`}
                                className="btn btn-info text-white px-5 btn-lg"
                                style={{ color: "#037c94" }}
                            >
                                Mitglied werden &#x1F4C4
                            </a>
                        </center>
                    </div>
                </div>
                <div className="animate__animated animate__fadeInUp main-page-card">
                    <div className="content">
                        <h5>Melde dich zum nächsten WIN-Treffen an</h5>
                        <p>
                            Das WIN-Treffen bietet Wirtschaftsinformatik
                            Studierenden eine entspannte Atmosphäre, um sich
                            auszutauschen, Kontakte zu knüpfen und
                            Karrieremöglichkeiten zu teilen. Es ist eine
                            großartige Gelegenheit, von anderen Studierenden zu
                            lernen und ihr Fachwissen und Erfahrungen zu nutzen.{" "}
                        </p>
                        <center>
                            <a
                                href={`/win-treffen`}
                                className="btn btn-info text-white px-5 btn-lg"
                                style={{ color: "#037c94" }}
                            >
                                zur Anmeldung &#x1F37B
                            </a>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
};
