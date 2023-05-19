import { PageTitle } from "./Shared/PageTitle";

export const WinTreffen = () => {
    return (
        <div className="container">
            <PageTitle title="WIN-Treffen am 14.06; 20:00 Uhr"></PageTitle>
            <form
                action="https://formsubmit.co/e54febc83b1ebbc417630d1238dfe6fe"
                method="POST"
            >
                <input
                    type="hidden"
                    name="_subject"
                    value="Neue Anmeldung zum Stammtisch!"
                ></input>
                <input type="hidden" name="_captcha" value="false"></input>
                <p className="lead mb-4">
                    Im Anschluss an unsere Fachschaftssitungen findet das
                    WIN-Treffen im Unikum statt. Wenn du die WINitiative oder
                    andere Wirtschaftsinformatiker kennenlernen willst, bist du
                    herzlich eingeladen.
                </p>
                <p className="mb-4"></p>
                <center>
                    <p className="mb-4" style={{ color: "red" }}>
                        Deadline: 13.06
                    </p>
                </center>
                <br />
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input
                            className="form-control"
                            type="text"
                            name="vorname"
                            placeholder="Vorname*"
                            required
                        ></input>
                    </div>
                    <div className="form-group col-md-6">
                        <input
                            className="form-control"
                            type="text"
                            name="nachname"
                            placeholder="Name*"
                            required
                        ></input>
                    </div>
                </div>
                <div className="form group">
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="E-Mail Addresse*"
                        required
                    ></input>
                </div>
                <br />
                <div className="form-group">
                    <textarea
                        rows={3}
                        className="form-control"
                        name="message"
                        placeholder="Hast du noch Anmerkungen? (z.B. Kann auch ein Freund mitkommen?)"
                    ></textarea>
                </div>
                <div className="checkbox-same-line">
                    <input
                        type="checkbox"
                        id="pp"
                        name="Datenschutzbedingungen"
                        value="DSGVO"
                        required
                    ></input>
                    <label htmlFor="pp" style={{ font: "13pt", marginLeft: "1 rem" }}>
                        Hiermit stimme ich der{" "}
                        <a
                            href="/datenschutzerklaerung"
                            className="text-decoration-none"
                        >
                            Datenschutzerklärung
                        </a>{" "}
                        der WINitiative zu.
                    </label>
                </div>
                <br />
                <center>
                    <input
                        className="btn btn-dark"
                        type="submit"
                        value="Senden"
                    ></input>
                </center>
                <input
                    type="hidden"
                    name="_next"
                    value="https://winitiative-augsburg.de/anmeldung-erfolgreich/"
                ></input>
            </form>
        </div>
    );
};
