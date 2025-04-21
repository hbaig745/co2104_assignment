import { useNavigate } from 'react-router-dom';

export default function Profile({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const logout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Your Profile</h2>
        <div className="space-y-10">
          <div className='flex justify-between flex-col'>
            <p className="text-gray-300 font-bold">Name: <span className="font-semibold">admin</span></p>
            <p className="text-gray-300 font-bold">Email: <span className="font-semibold">admin@adminemail.com</span></p>
          </div>
          <div className="flex justify-center">
            <button onClick={logout} className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
