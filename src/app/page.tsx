import Image from "next/image";

const Home: React.FC = () => {
    return (
        <div>
            <div className="container h-screen p-3 flex items-center bg-gradient-to-br from-white to-red-700 pt-28">
                <div className="p-16 w-1/2">
                    <h1 className="text-3xl font-semibold">HI, I'M Muslim</h1>
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
                        UI/UX DESIGN
                    </h5>
                    <p className="font-normal">
                        I can design and type of web - based application
                        interface from scratch and research user experience and
                        implement this design.
                    </p>
                </div>

                <div className="block max-w-sm p-6 border rounded-lg shadow bg-black border-white">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        FRONT-END DEVELOPMENT
                    </h5>
                    <p className="font-normal">
                        I convert design to coding by using photoshop and
                        front-end language and framework such as twitter
                        bootstrap and Sass
                    </p>
                </div>

                <div className="block max-w-sm p-6 border rounded-lg shadow bg-black border-white">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        BUG FIXING
                    </h5>
                    <p className="font-normal">
                        Give me your bug and design issue.l can fix any kind of
                        coding and design issue under the hood. I can quickly
                        support at emergency situtation.
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
                            <Image
                                src="/github.svg"
                                alt="image"
                                width={50}
                                height={50}
                            ></Image>
                        </a>
                        <a
                            href="https://t.me/wwqizi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <Image
                                src="/telegram.svg"
                                alt="image"
                                width={50}
                                height={50}
                            ></Image>
                        </a>
                        <a
                            href="https://www.instagram.com/meowwsliim?igsh=MTlrZWN5emJ0aGYzOQ%3D%3D&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link "
                        >
                            <Image
                                src="/insta.svg"
                                alt="image"
                                width={50}
                                height={50}
                            ></Image>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
