import landingImg from '../assets/landingpage.jpg';
import { useNavigate } from 'react-router-dom';

export default function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const loginClicked = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        navigate("/");
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${landingImg})` }}
        >
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className="relative z-10 w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-10 border border-gray-700 text-white">
                <h2 className="text-3xl font-bold mb-8 text-center">Login to Visit Manchester</h2>
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-300 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400"
                            placeholder="••••••••"
                        />
                    </div>
                    <div className="space-y-4 pt-2">
                        <button
                            onClick={loginClicked}
                            className="w-full bg-white text-gray-900 font-semibold py-3 rounded-lg shadow hover:bg-gray-100 transition duration-200 cursor-pointer"
                        >
                            Login
                        </button>
                        <a
                            href="signup"
                            className="block text-center w-full bg-gray-700 text-white font-semibold py-3 rounded-lg border border-gray-600 hover:bg-gray-600 transition duration-200 cursor-pointer"
                        >
                            Sign Up
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}
