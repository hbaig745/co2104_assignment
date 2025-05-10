import landingImg from '../assets/landingpage.jpg';

export default function Home() {
    return (
        <div
            className="relative w-full h-[calc(100vh-80px)] overflow-hidden mt-20" 
            style={{
                backgroundImage: `url(${landingImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Discover the Heart of Manchester
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
                    Explore rich history, vibrant culture, and world-famous attractions in one of the UK's most iconic cities.
                </p>
                <div className="w-full max-w-5xl shadow-2xl rounded-2xl overflow-hidden border border-gray-700">
                </div>
            </div>
        </div>
    );
}
