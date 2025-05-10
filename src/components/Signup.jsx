import { useNavigate } from "react-router-dom";
import landingImg from "../assets/landingpage.jpg";

export default function Signup({ setIsLoggedIn }) {
    const navigate = useNavigate();

    const signupClicked = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        navigate("/");
    };

    const goToLogin = (e) => {
        e.preventDefault();
        navigate("/login");
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 relative"
            style={{ backgroundImage: `url(${landingImg})` }}
        >
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className="relative z-10 w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-10 border border-gray-700 text-white">
                <h2 className="text-3xl font-bold mb-8 text-center">Create Your Account</h2>
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm text-gray-300 mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400"
                            placeholder="John Doe"
                        />
                    </div>
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
                    <div>
                        <label className="block text-sm text-gray-300 mb-1">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400"
                            placeholder="••••••••"
                        />
                    </div>
                    <div className="space-y-4 pt-2">
                        <button
                            onClick={signupClicked}
                            className="w-full bg-white text-gray-900 font-semibold py-3 rounded-lg shadow hover:bg-gray-100 transition duration-200 cursor-pointer"
                        >
                            Sign Up
                        </button>
                        <button
                            onClick={goToLogin}
                            className="w-full bg-gray-700 text-white font-semibold py-3 rounded-lg border border-gray-600 hover:bg-gray-600 transition duration-200 cursor-pointer"
                        >
                            Back to Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
