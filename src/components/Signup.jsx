import { useNavigate } from "react-router-dom";

export default function Signup({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const signupClicked = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        navigate("/");
    }
    return (
        <div className="min-h-screen bg-gray flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Create Your Account</h2>
                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-300 mb-1">Name</label>
                        <input type="text" className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"/>
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-1">Email</label>
                        <input type="email" className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"/>
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-1">Password</label>
                        <input type="password" className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"/>
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-1">Confirm Password</label>
                        <input type="password" className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"/>
                    </div>
                    <a onClick={signupClicked} className="block w-full text-center bg-gray-700 text-white font-bold py-2 rounded-lg hover:bg-white hover:text-gray-800 transition">Sign Up</a>
                </form>
            </div>
        </div>
    );
}
