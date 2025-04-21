import { useNavigate } from 'react-router-dom';

export default function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const loginClicked = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        navigate("/");
    }
    
  return (
    <div className="min-h-screen bg-gray flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login to Visit Manchester</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"/>
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"/>
          </div>
          <div className="space-y-4">
            <a onClick={loginClicked} className="block w-full text-center bg-gray-700 text-white font-bold py-2 rounded-lg hover:bg-white hover:text-gray-800 transition">Login</a>
            <a href="signup" className="block w-full text-center bg-gray-700 text-white font-bold py-2 rounded-lg hover:bg-white hover:text-gray-800 transition">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}
