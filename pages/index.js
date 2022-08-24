import Head from "next/head";
import Hero from "../components/hero";
import Nav from "../components/nav";

export default function Home() {
    return (
        <div className="mx-auto bg-main-bg">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins&display=swap"
                    rel="stylesheet"
                />
                <title>Mathew Mendoza</title>
            </Head>
            <Nav />
            <Hero />
        </div>
    );
}
