import Image from "next/image";

const Home: React.FC = () => {
    return (
        <div>
            <div className="container h-screen p-3 flex items-center bg-gradient-to-br from-white to-red-700 pt-28">
                <div className="p-16 w-1/2">
                    <h1 className="text-3xl font-semibold">HI, I'M Sasha</h1>
                    <h2 className="text-7xl font-bold">
                        I'M A <br />
                        WEB/APP <br /> DEVELOPER
                    </h2>
                    <p className="text-lg text-gray-900">
                        I create beautiful and interactive websites. My
                        technology <br /> stack includes HTML, CSS, and
                        JavaScript. I am proficient <br /> in working with
                        frameworks such as React and Vue.js and <br /> creating
                        responsive layouts.
                    </p>
                </div>
                <div>
                    <Image
                        src="/coder.svg"
                        alt="image"
                        width={600}
                        height={400}
                    />
                </div>
            </div>
            <div
                id="specialization"
                className="h-screen w-full text-white bg-black flex items-center justify-center gap-10"
            >
                <div className="block max-w-sm p-6 border rounded-lg shadow bg-black border-white">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                    </p>
                </div>

                <div className="block max-w-sm p-6 border rounded-lg shadow bg-black border-white">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                    </p>
                </div>

                <div className="block max-w-sm p-6 border rounded-lg shadow bg-black border-white">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                    </p>
                </div>
            </div>

            <div
                id="contacts"
                className="h-screen w-full text-white bg-gradient-to-br from-black to-white"
            >
                <div className="flex items-center justify-center flex-col h-full">
                    <h1 className="text-9xl font-bold">Contact</h1>
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/1Musl1m"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                          <Image src="/github.svg" alt="image" width={50} height={50}></Image>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <Image src="/telegram.svg" alt="image" width={50} height={50}></Image>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link "
                        >
                            <Image src="/insta.svg" alt="image" width={50} height={50}></Image>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
