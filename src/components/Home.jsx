import landingImg from '../assets/landingpage.jpg';

export default function Home() {
    return (
        <div className="bg-gray text-white flex flex-col items-center justify-center mt-32">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Discover the Heart of Manchester</h1>
            <p className="text-lg md:text-xl text-gray-300 text-center mb-10">Explore rich history, vibrant culture, and world-famous attractions in one of the UK's most iconic cities.</p>
            <div className="w-full max-w-5xl shadow-2xl rounded-2xl overflow-hidden border border-gray-700">
                <img src={landingImg} alt="Manchester cityscape" className="w-full h-auto object-cover"/>
            </div>
        </div>
    );
}
