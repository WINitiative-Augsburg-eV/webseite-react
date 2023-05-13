import { PageTitle } from "../Shared/PageTitle";
import bierpong from "./Bier_Pong_Becher_Aufstellung.jpg";
import brauerei from "./Brauereiführung.jpg";
import EventsSection, { PostProps } from "./FeaturedEvents";
import { HomeIntro } from "./HomeIntro";
import o_phase from "./O-Phase-2022.jpg";
import kneipentour from "./weichnachts-kneipentour.jpg";

export const HomeEntry = () => {
    const posts: PostProps[] = [
        {
            featured: true,
            imageUrl: kneipentour,
            text: "Am 14.12.22 fand unsere erste Winter Kneipentour statt. Eingeladen waren alle Wirtschaftsinformatiker.",
            title: "WINitiative Winter Kneipentour 2022",
        },
        {
            featured: true,
            imageUrl: o_phase,
            text: "Pünktlich zum Semesterstart fand die WINitiative O-Phase mit Ersti-Stammtisch, einer Brauereiführung und der Kneipentour statt.",
            title: "WINitiative O-Phase 2022",
        },
        {
            featured: true,
            imageUrl: brauerei,
            text: "Am 05.07 war die WINitiative bei der Riegele Brauereiführung dabei. Weitere Eindrücke findest du auf unserer Instagram Seite! ",
            title: "Riegele Brauereiführung",
        },
        {
            featured: true,
            imageUrl: bierpong,
            text: "The WINner takes it all. Wenn du beim nächsten Mal dabei sein willst, folgst du uns am besten auf Instagram oder trittst der WhatsApp-Gruppe bei.",
            title: "BierPong Turnier 2022",
        },
    ];

    return (
        <div className="container">
            <PageTitle></PageTitle>
            <HomeIntro></HomeIntro>
            <EventsSection posts={posts}></EventsSection>
        </div>
    );
};
