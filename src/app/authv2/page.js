"use client"; 
import Navbarcomponent from "@/components/navbar/Navbar";
import { useRouter } from 'next-nprogress-bar';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function AuthPage({
}) {

  const router = useRouter();

  return (
    <>
      <Navbarcomponent/>
      <div className="bg-[#1a1a1f] rounded-lg p-4 flex h-screen flex-col items-center justify-center gap-8">
        <h2 className="text-center font-bold text-3xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
          Welcome to SkyAnime X 1Anime Auth, Choose a way to login or signup!
        </h2>
        <p className="text-center font-bold leading-tight">by using SkyAnime X 1Anime, you agree to our <a className="text-blue-500 hover:text-blue-600" href="">Privacy Policy + Terms of Service</a></p>
        <div className="flex flex-row gap-4">
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium py-2 px-6 rounded-lg shadow-lg hover:shadow-purple-500/50 transform transition-all duration-300 hover:scale-105"
            onClick={() => {
                router.push("/");
            }}
          >
            Go back home
          </button>
          <button disabled className="bg-gradient-to-r from-gray-400 to-gray-500 text-white font-medium py-2 px-6 rounded-lg shadow-lg opacity-70"
            onClick={() => {
                router.push("#");
            }}
          >
            Email (Coming soon)
          </button>
          <button disabled className="bg-gradient-to-r from-gray-400 to-gray-500 text-white font-medium py-2 px-6 rounded-lg shadow-lg opacity-70"
            onClick={() => {
                router.push("#");
            }}
          >
            Discord (Coming soon)
          </button>
          <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transform transition-all duration-300 hover:scale-105"
           onClick={() => signIn('AniListProvider')}
          >
            AniList
          </button>
        </div>
      </div>
    </>
  );
}
