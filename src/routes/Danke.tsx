import mailGIF from "./Mail.gif";
import { PageTitle } from "./Shared/PageTitle";


export const Danke = () => {
    return (
        <>
            <div className="container">
                <PageTitle title="Wir haben deinen Antrag erhalten!"></PageTitle>
                <center>
                    <img src={mailGIF} alt="success" loading="lazy"></img>
                </center>
                <center>
                    <p>
                        Dein Antrag ist bei uns eingegangen. Sobald wir ihn
                        bearbeitet haben, melden wir uns per Email bei dir!
                    </p>
                </center>
            </div>
        </>
    );
};
