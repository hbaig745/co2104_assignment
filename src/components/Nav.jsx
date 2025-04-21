import { Link } from "react-router-dom";

export default function Nav({ isLoggedIn }) {
    return <>
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-gray-800 p-6 border-b border-gray-700 shadow-lg">
            <div className="text-white text-4xl font-bold"><Link to="/">Visit Manchester</Link></div>
            <ul className="flex space-x-8">
                <li><Link to="/attractions" className="font-bold text-white hover:text-gray-400">Attractions</Link></li>   
                <li><Link to="/food" className="font-bold text-white hover:text-gray-400">Food</Link></li>
                <li><Link to="/football" className="font-bold text-white hover:text-gray-400">Football</Link></li>
                <li><Link to="/info" className="font-bold text-white hover:text-gray-400">Info</Link></li>
                {isLoggedIn ? (
                    <li><Link to="/profile" className="bg-gray-700 font-bold text-white p-4 hover:bg-white hover:text-gray-800 rounded-lg transition">Profile</Link></li>) : (
                    <li><Link to="/login" className="bg-gray-700 font-bold text-white p-4 hover:bg-white hover:text-gray-800 rounded-lg transition">Login</Link></li>)}
            </ul>
        </nav>
    </>
}