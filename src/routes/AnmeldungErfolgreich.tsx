import mailGIF from "./Mail.gif";
import { PageTitle } from "./Shared/PageTitle";

export const AnmeldungErfolgreich = () => {
    return (
        <>
            <div className="container">
                <PageTitle title="Wir haben deine Anmeldung erhalten!"></PageTitle>
                <center>
                    <img src={mailGIF} alt="success"></img>
                </center>
                <center>
                    <p>
                        Deine Anmeldung ist bei uns eingegangen. Sobald wir sie
                        bearbeitet haben, melden wir uns per E-Mail bei dir um
                        weitere Details zu klären!
                    </p>
                </center>
            </div>
        </>
    );
};
