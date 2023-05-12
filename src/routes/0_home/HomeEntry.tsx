import EventsSection from "./FeaturedEvents";
import { HomeIntro } from "./HomeIntro";

export const HomeEntry = () => {
    return (
        <>
            <HomeIntro></HomeIntro>
            <EventsSection
                paginator={{ posts: [{ post: { featured: true, text: "" } }] }}
            ></EventsSection>
        </>
    );
};
