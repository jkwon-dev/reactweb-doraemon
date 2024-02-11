import { GiAtomicSlashes } from "react-icons/gi";
import { FaSearch} from "react-icons/fa";
import { MdArrowDropDown } from 'react-icons/md';

const MenuLinks = [
    {
        name: "Episodes",
        link: "#/",
    },
    {
        name: "Store",
        link: "#/store",
    },
    {
        name: "Toys",
        link: "#/toys",
    },
    {
        name: "3D videos",
        link: "#/videos"
    },
]

const Navbar = () => {
  return (
    <div data-aos="fade-down" className="py-4">
        <div className='container'>
            <div className="flex items-center justify-between">
                {/* logo section */}
                <div className="flex items-center gap-4">
                <GiAtomicSlashes className="text-6xl text-primary"/>
                    <div className="flex flex-col text-2xl font-bold text-gray-600 leading-5">
                        <span>Dora</span>
                        <span>Emon</span>
                    </div>
                </div>
                {/* Links section */}
                <div className="hidden md:block">
                    <ul className="center">
                        {MenuLinks.map((link) => {
                            return (
                                <li key={link.name}>
                                    <a href={link.link} className="navlink">
                                        {link.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {/* Search section */}
                <div className="flex items-center gap-6">
                    <input type="text" placeholder="Search" 
                    className="hidden sm:block py-2 px-3 rounded-full bg-slate-200"
                    />
                    <div className="bg-primary hover:bg-primary/80 p-3 rounded-full cursor-pointer">
                        <FaSearch className="text-white text-sm"/>
                    </div>
                    <div className="flex items-center navlink cursor-pointer">
                        Eng 
                        <span>
                            <MdArrowDropDown  className="text-xl text-primary"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar