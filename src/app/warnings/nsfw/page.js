"use client"; // Error components must be Client Components
import React from 'react';
import Navbarcomponent from "@/components/navbar/Navbar";
import { useRouter } from 'next-nprogress-bar';

function NSFWPage({ statusCode, reset }) {

    const navigations = [
      {
       icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
     </svg>     
     ,
       title: "Learn more why",
       desc: "Why did we remove NSFW Content?",
       href:  "https://1anime.tawk.help/article/nsfw-policy"
      },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>,
            title: "Go Explore Anime",
            desc: "Watch Anime now for FREE",
            href: "/"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>,
            title: "Support",
            desc: "Contact Support or let us know about this error",
            href: "https://1anime.tawk.help"
        }
    ]

    return (
        <main>
<Navbarcomponent/>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto text-white-600">
                    <div className="space-y-3 text-center">
                        <h3 className="text-indigo-600 font-semibold">
                            {statusCode}
                        </h3>
                        <p className="text-white-800 text-4xl font-semibold sm:text-5xl">
                            NSFW Content Removed
                        </p>
                        <p>
                            Sorry but We officially removed any NSFW-Related Anime/Manga/Novel. Thank you.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="divide-y">
                            {
                                navigations.map((item, idx) => (
                                    <li key={idx} className="flex gap-x-4 py-6">
                                        <div className="flex-none w-14 h-14 bg-indigo-50 rounded-full text-indigo-600 flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-white-800 font-medium">{item.title}</h4>
                                            <p>
                                                {item.desc}
                                            </p>
                                            <a href={item.href} className="text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1">
                                                Learn more
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NSFWPage;
