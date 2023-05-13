import { Helmet } from "react-helmet";

export const PageTitle = ({ title }: { title?: string }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link rel="icon" href="{{ site.baseurl }}/{{site.favicon}}" />

                <title>{title ?? "WINitiative Augsburg e.V."}</title>
            </Helmet>
            {title && <h1 className="text-center mb-4">{title}</h1>}
        </>
    );
};
