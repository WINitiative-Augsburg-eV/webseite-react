import { PageTitle } from "../Shared/PageTitle";

export const RegisterMemberEntry: React.FC = () => {
    return (
        <div className="container">
            <PageTitle title="Mitgliedsantrag"></PageTitle>

            <p>
                Hier kannst du deinen Mitgliedsantrag für die WINitiative
                einreichen. Dabei hast du zwei Möglichkeiten:
            </p>
            <ol
                style={{ fontSize: "16pt", fontWeight: "bold" }}
                className="liste1"
            >
                <li>
                    Wir schicken dir deinen vorausgefüllten Antrag als PDF und
                    du unterschreibst nur noch (bspw. mit dem Tablet).
                </li>
                <br />
                <li>
                    Wir bereiten deinen Antrag vor und du unterschreibst beim
                    nächsten WINitiative-Treffen.
                </li>
            </ol>
            <div className="liste2">
                <p style={{ fontWeight: "bold", fontSize: "16pt" }}>
                    1. Wir schicken dir deinen vorausgefüllten Antrag als PDF
                    und du unterschreibst nur noch (bspw. mit dem Tablet).
                    <br />
                    <br />
                    2. Wir bereiten deinen Antrag vor und du unterschreibst beim
                    nächsten WINitiative-Treffen.
                </p>
            </div>
            <br />
            <div>
                <form
                    action="https://formsubmit.co/09d59bd4883cc050554222c88652ce2d"
                    method="POST"
                >
                    <input
                        type="hidden"
                        name="_subject"
                        value="Neuer Mitgliedsantrag!"
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="form-row">
                        <div className="form-group col-md-20 mb-2">
                            <legend
                                style={{
                                    fontSize: "14pt",
                                    marginBottom: "-3px",
                                }}
                            >
                                Ich möchte meinen Antrag:
                            </legend>
                            <input
                                type="radio"
                                id="pp"
                                name="zahlung"
                                value="an-mich-senden"
                                required
                                className="mx-2"
                            />
                            <label htmlFor="pp" style={{ fontSize: "13pt", marginRight: 20 }}>
                                Selbst unterschreiben
                            </label>
                            <br className="mobile-break" />
                            <input
                                type="radio"
                                id="br"
                                name="zahlung"
                                value="beim-treffen"
                                className="mx-2"
                            />
                            <label htmlFor="br" style={{ fontSize: "13pt" }}>
                                Beim Treffen unterschreiben
                            </label>
                        </div>
                        <div className="d-flex p-2">
                            <div className="form-group col-md-6">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="Vorname"
                                    placeholder="Vorname*"
                                    required
                                />
                                <input
                                    className="form-control"
                                    type="text"
                                    name="Nachname"
                                    placeholder="Nachname*"
                                    required
                                />
                            </div>
                            <div className="form-group col-md-6">
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
                                    name="Handynummer"
                                    placeholder="Handynummer*"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group col-md-12">
                            <span style={{ fontSize: "17px" }}>
                                Immatrikuliert seit
                            </span>
                            <input
                                className="form-control"
                                type="text"
                                name="Immatrikulation"
                                placeholder="MM/JJJJ*"
                                required
                            />
                        </div>
                    </div>
                    <div className="checkbox-same-line">
                        <input
                            type="checkbox"
                            id="pp"
                            name="Datenschutzbedingungen"
                            className=""
                            value="DSGVO"
                            required
                        />
                        <label style={{ font: "13pt" }} className="mx-2">
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
                    <center>
                        <input
                            className="btn btn-dark"
                            type="submit"
                            value="Senden"
                        />
                    </center>
                    {/* <input
                        type="hidden"
                        name="_next"
                        value="https://winitiative-augsburg.de/danke"
                    /> */}
                </form>
            </div>
        </div>
    );
};
