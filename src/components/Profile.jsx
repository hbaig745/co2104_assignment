import { useNavigate } from 'react-router-dom';
import landingImg from '../assets/landingpage.jpg';

export default function Profile({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const logout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center px-6 pt-40 pb-20 relative"
      style={{ backgroundImage: `url(${landingImg})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 max-w-md mx-auto bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-10 text-white space-y-10">
        <h2 className="text-3xl font-bold text-center">Your Profile</h2>
        <div className="space-y-4">
          <p className="text-gray-300">
            <span className="font-bold text-white">Name:</span> admin
          </p>
          <p className="text-gray-300">
            <span className="font-bold text-white">Email:</span> admin@adminemail.com
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={logout}
            className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-700 transition cursor-pointer shadow-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
