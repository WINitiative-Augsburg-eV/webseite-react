

import React from "react";
import { PageTitle } from "../Shared/PageTitle";

export const ContactEntry: React.FC = () => {
    return (
        <div className="container">
            <PageTitle title="Kontakt"></PageTitle>
            <form
                action="https://formsubmit.co/e54febc83b1ebbc417630d1238dfe6fe"
                method="POST"
            >
                <input
                    type="hidden"
                    name="_subject"
                    value="Neue Kontaktanfrage!"
                />
                <p className="mb-4">
                    Vielen Dank, dass du mit uns in Kontakt treten möchtest.
                    Schreibe hier einfach deine Nachricht und wir antworten so
                    schnell wie möglich!
                </p>
                <div className="form-group row">
                    <div className="col-md-6">
                        <input
                            className="form-control"
                            type="text"
                            name="name"
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
                    </div>
                </div>
                <textarea
                    rows={8}
                    className="form-control mb-3"
                    name="message"
                    placeholder="Nachricht*"
                    required
                />
                <input
                    type="checkbox"
                    id="pp"
                    name="Datenschutzbedingungen"
                    value="DSGVO"
                    required
                />
                <label htmlFor="pp" style={{ fontSize: "13pt" }} className="mx-2">
                    Hiermit stimme ich der{" "}
                    <a
                        href="/datenschutzerklaerung"
                        className="text-decoration-none"
                    >
                        Datenschutzerklärung
                    </a>{" "}
                    der WINitiative zu.
                </label>
                <input className="btn btn-dark" type="submit" value="Senden" />
                <input
                    type="hidden"
                    name="_next"
                    value="https://winitiative-augsburg.de/nachricht-erfolgreich"
                />
            </form>
        </div>
    );
};
