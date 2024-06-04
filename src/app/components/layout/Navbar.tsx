import { Button } from "antd";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between fixed top-0 bg-opacity-80 backdrop-blur-md z-10 p-9">
            <Link href="/">
                <h1 className="text-2xl font-bold">
                    <span className="text-red-800 font-semibold">/</span>Ashanti
                </h1>
            </Link>
            <ul className="flex items-center justify-end text-xl gap-6 font-medium">
                <li>
                    <Link
                        href="#"
                        className=" transition-all duration-100 hover:border-b-2 border-gray-800"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="transition-all duration-100 hover:border-b-2 border-gray-800"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className=" transition-all duration-100 hover:border-b-2 border-gray-800"
                    >
                        Specialization
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className=" transition-all duration-100 hover:border-b-2 border-gray-800"
                    >
                        Contacts
                    </Link>
                </li>
            </ul>
            <button className="text-lg border-2 p-2 px-3 rounded border-black font-medium"><Link href='#'>Hire me</Link></button>
        </nav>
    );
};

export default Navbar;
