import { BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export default function Nav() {
    return (
        <nav className="w-full h-20 fixed top-0 flex justify-between items-center">
            <div className="w-4/6 flex mx-auto justify-between">
                <ul className="w-72 flex justify-between font-montserrat tracking-wide">
                    <li className="">Home</li>
                    <li className="">Projects</li>
                    <li className="">About Me</li>
                </ul>
                <div className="w-36 flex justify-between items-center">
                    <GrLinkedinOption color="#505F1C" fontSize="1.25em" />
                    <BsGithub color="#505F1C" fontSize="1.25em" />
                    <FaFacebookF color="#505F1C" fontSize="1.25em" />
                    <GrMail color="#505F1C" fontSize="1.25em" />
                </div>
            </div>
        </nav>
    );
}
