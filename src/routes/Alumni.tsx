import { PageTitle } from "./Shared/PageTitle";

export const Alumni = () => {
    return (
        <div className="container">
            <PageTitle title="Alumni Bereich"></PageTitle>
            <center>
                <p>Herzlich Wilkommen im Alumni Bereich der WINitiative!</p>
            </center>
            <p>
                Hier hast du die Möglichkeit als Alumni wieder der WINitiative
                beizutreten. Das bedeutet für dich:
            </p>
            <ol
                style={{ fontSize: "14pt", fontWeight: "bold" }}
                className="liste1"
            >
                <li>
                    Du wirst Teil unseres Alumni-Netzwerks und kannst damit beim
                    Alumni-Treffen oder unseren anderen Veranstaltungen dabei
                    sein.
                </li>
                <br />
                <li>
                    Wir kommen eventuell auf dich zu, wenn wir beispielsweise
                    einen Kaminabend organisieren.
                </li>
                <br />
                <li>
                    In der Alumni WhatsApp-Gruppe kannst du dich mit anderen
                    Ehemaligen vernetzen.
                </li>
                <br />
                <li>
                    Im Newsletter informieren wir dich über relevante
                    Neuigkeiten. (Bspw. Alumni Treffen)
                </li>
                <br />
                <li>
                    Über die Alumni-Rolle wirst du zum außerordentlichen
                    Mitglied der WINitiative. Das heißt, du hast keine Stimme
                    bei der Vorstandswahl und bist bei der allgemeinen
                    Organisation nicht eingebunden. Nichtsdestotrotz kannst du
                    den Verein bei Entscheidungen mit deiner Expertise
                    unterstützen.
                </li>
            </ol>
            <div className="liste2">
                <p style={{ fontWeight: "bold", fontSize: "14pt" }}>
                    1. Du wirst Teil unseres Alumni-Netzwerks und kannst damit
                    beim Alumni-Treffen oder unseren anderen Veranstaltungen
                    dabei sein.
                    <br />
                    <br />
                    2. Wir kommen eventuell auf dich zu, wenn wir beispielsweise
                    einen Kaminabend organisieren.
                    <br />
                    <br />
                    3. In der Alumni WhatsApp-Gruppe kannst du dich mit anderen
                    Ehemaligen vernetzen.
                    <br />
                    <br />
                    4. Im Newsletter informieren wir dich über relevante
                    Neuigkeiten. (Bspw. Alumni Treffen)
                    <br />
                    <br />
                    5. Über die Alumni-Rolle wirst du zum außerordentlichen
                    Mitglied der WINitiative. Das heißt, du hast keine Stimme
                    bei der Vorstandswahl und bist bei der allgemeinen
                    Organisation nicht eingebunden. Nichtsdestotrotz kannst du
                    den Verein bei Entscheidungen mit deiner Expertise
                    unterstützen.
                </p>
            </div>
            <br />
            <p>
                Fülle dieses Formular aus und wir schicken dir den Antrag als
                vorausgefülltes PDF zu.
            </p>
            <div>
                <form
                    action="https://formsubmit.co/e54febc83b1ebbc417630d1238dfe6fe"
                    method="POST"
                >
                    <input
                        type="hidden"
                        name="_subject"
                        value="Neuer Alumni-Antrag!"
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="form-group row">
                        <div className="col-md-12">
                            <legend
                                style={{
                                    fontSize: "14pt",
                                    marginBottom: "-3px",
                                }}
                            >
                                Ich möchte:
                            </legend>
                            <input
                                type="checkbox"
                                id="pp"
                                name="Newsletter?"
                                value="Newsletter erhalten"
                            />
                            <label
                                htmlFor="pp"
                                style={{
                                    fontSize: "13pt",
                                    marginLeft: "0.5rem",
                                }}
                            >
                                Den Newsletter erhalten
                            </label>
                            <br className="mobile-break" />
                            <input
                                style={{ marginLeft: "1rem" }}
                                type="checkbox"
                                id="br"
                                name="Whatsapp"
                                value="Whatsapp erhalten"
                            />
                            <label
                                htmlFor="br"
                                style={{
                                    fontSize: "13pt",
                                    marginLeft: "0.5rem",
                                }}
                            >
                                Die WhatsApp Einladung erhalten
                            </label>
                        </div>
                        <div className="col-md-6">
                            <input
                                className="form-control"
                                type="text"
                                name="vorname"
                                placeholder="Vorname*"
                                required
                            />
                            <input
                                className="form-control"
                                type="text"
                                name="nachname"
                                placeholder="Name*"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="E-Mail Addresse*"
                                required
                            />
                            <input
                                className="form-control"
                                type="text"
                                name="Jahrgang"
                                placeholder="Jahrgang"
                            />
                        </div>
                    </div>
                    <input
                        type="checkbox"
                        id="pp"
                        name="Datenschutzbedingungen"
                        value="DSGVO"
                        required
                    />
                    <label
                        htmlFor="pp"
                        style={{ fontSize: "13pt", marginLeft: "0.5rem" }}
                    >
                        Hiermit stimme ich der{" "}
                        <a
                            href="/datenschutzerklaerung"
                            className="text-decoration-none"
                        >
                            Datenschutzerklärung
                        </a>{" "}
                        der WINitiative zu.
                    </label>
                    <center>
                        <input
                            className="btn btn-dark"
                            type="submit"
                            value="Senden"
                        />
                    </center>
                    <input
                        type="hidden"
                        name="_next"
                        value="https://winitiative-augsburg.de/danke"
                    />
                </form>
            </div>
        </div>
    );
};
