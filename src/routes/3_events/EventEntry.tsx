import React from "react";

export const EventsEntry: React.FC = () => {
    return (
        <>
            <div className="angebote" id="angebote">
                <div className="card" id="card">
                    <div className="cardy__content">
                        <center>
                                <img
                                    src=""
                                    alt=""
                                />
                        </center>
                        <div>
                            <center>
                                <h3 className="card-title h4">
                                    Digitalisierung, Pizza & Bier: Montag, den
                                    15.05.2023 um 19 Uhr am FIM/ Fraunhofer FIT
                                </h3>
                            </center>
                            <p className="card-text text-muted">
                                WINler aufgepasst! Der Start in die Vorlesungen
                                war doch etwas anstrengender als erwartet? Dann
                                gönn‘ dir eine Pause und triff deine
                                Kommiliton*innen! <br />
                                <br />
                                Das Fraunhofer FIT/FIM lädt Euch herzlich zu
                                Digitalisierung, Pizza & Bier am 15.05. um 19
                                Uhr, ins BCM ein, um in entspannter Atmosphäre
                                das FIT/FIM und auch eure Kommiliton*innen näher
                                kennenzulernen. An mehreren Ständen präsentiert
                                das FIT/FIM verschiedene Themenbereiche und
                                Praxisprojekte und ihr habt dabei die
                                Möglichkeit mit den Hiwis ins Gespräch zu
                                kommen. Vielleicht lächelt Euch auch eine
                                Anstellung als wissenschaftliche Hilfskraft im
                                Bereich Digitalisierung, Innovation und
                                Wirtschaftsinformatik an ;)
                                <br />
                                <br />
                                Für das leibliche Wohl ist natürlich gesorgt!{" "}
                                <br /> <br />
                                Das BCM ist an der Haltestelle
                                Bukowina-Institut/PCI der 3er Linie und somit
                                nur eine Haltestelle von der Uni entfernt.
                                <br />
                                <br />
                                Weitere Infos zum FIM/ Fraunhofer FIT findet ihr
                                hier:{" "}
                                <a
                                    style={{ color: "#80d6e8" }}
                                    href="https://www.fim-rc.de"
                                >
                                    fim-rc.de
                                </a>
                                <br />
                                <br />
                                Wir freuen uns auf Euch!
                            </p>
                            <center>
                                <p>
                                    <a
                                        href="https://survey.fim-rc.de/index.php/272348?lang=de"
                                        className="btn btn-dark text-white px-4 btn-lg"
                                    >
                                        Zur Anmeldung
                                    </a>
                                </p>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div
                    style={{ marginTop: "2em" }}
                    className="rounded mb-5 hero whatsapp"
                >
                    <h3 style={{ color: "white" }}>
                        Sie wollen hier über Veranstaltungen ihres Lehrstuhls
                        oder Unternehmens informieren?
                    </h3>
                    <p className="lead mb-4" style={{ color: "white" }}>
                        Dann schreiben sie uns ganz einfach über unser Kontakt
                    </p>
                </div>
            </section>
        </>
    );
};
