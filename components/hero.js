export default function Hero() {
    return (
        <div className="mx-auto h-screen h-max-64 flex flex-col items-center justify-center text-black">
            <div className=" flex flex-col gap-5 justify-center items-center">
                <div className="text-5xl font-poppins">Mathew Mendoza</div>
                <div className="max-w-4xl text-center text-xl font-montserrat tracking-wide">
                    I’m a Web Developer. Please explore more on my website to
                    learn more about me and my works.
                </div>
                <button
                    type="button"
                    className="bg-green w-44 py-2 text-white font-poppins"
                >
                    Contact Me
                </button>
            </div>
        </div>
    );
}
