import React from 'react';
// Updated Lucide imports to include Instagram and YouTube
import { Mail, Phone, Camera, Linkedin,ArrowRight, Youtube, Instagram } from 'lucide-react'; 
import { CTASection,Footer } from '@/components/layout/Footer';
const IMAGE_BG_COLOR = 'white'

// --- 1. DATA STRUCTURES ---

const statsData = [
    { value: "05+", label: "Years of experience" },
    { value: "50+", label: "Team members" },
    { value: "50+", label: "Clients worldwide" },
];

const philosophyBlocks = [
    { 
        title: "OUR PHILOSOPHY", 
        description: "Our philosophy on creativity has one simple purpose: We believe great ideas come from a mix of creativity, insight, and relentless execution. Everything we create is driven by the goal to make meaningful impact—not just brands, but to change the way people think, feel, and act.",
        bgColor: '#E8E8E3', 
        textColor: 'text-adko-dark-text',
        className: 'border border-adko-dark-text' 
    },
    { 
        
        imageSrc: 'New Project (3).png', 
        
        isImageCard: true 
    },
    { 
        title: "OUR EXPERTISE", 
        description: "We specialize in turning ideas into powerful digital experiences. From strategic and content creation to web development, performance marketing, and immersive visuals, our expertise spans the full spectrum of modern marketing. We combine creative technology and results to deliver solutions that elevate brands and drive growth.",
        bgColor: '#7EA8BA', 
        textColor: 'text-adko-dark-text',
        className: 'text-zinc-800'
    }
];

// 🔥 FIXED TEAM DATA:
// 1. Corrected structure to use 'image' property with a string URL.
// 2. Added a placeholder 'role' for the member.
// 3. Ensured the 'url' is present in the social object.
const teamData = [
    { 
        name: "Priyansh Yadav", 
    
        location: "Locbizz",
        image: "mine.jpg", // Placeholder image URL
        social: [ 
            { 
                icon: <Instagram size={16} />, 
                url: "https://www.instagram.com/priyanshwhy" 
            }
        ]
    },
    { 
        name: "Anurag Singh", 
      
        location: "Locbizz",
        image: "da.jfif", // Placeholder image URL
        social: [ 
            { 
                icon: <Instagram size={16} />, 
                url: "https://www.instagram.com/codernormie" 
            }
        ]
    },
    { 
        name: "Deepak Mishra", 
  
        location: "Locbizz",
        image: "deepak.jpg", // Placeholder image URL
        social: [ 
            { 
                icon: <Instagram size={16} />, 
                url: "https://www.instagram.com/whosedeepak" 
            }
        ]
    }
];

const groupByLocation = (team) => {
    return team.reduce((acc, member) => {
        const location = member.location;
        if (!acc[location]) {
            acc[location] = [];
        }
        acc[location].push(member);
        return acc;
    }, {});
};


// --- MAIN ABOUT US COMPONENT ---
export default function AboutUsPage() {
    const groupedTeam = groupByLocation(teamData);

    return (
        // Main container uses the light gray background
        <div className="min-h-screen flex flex-col bg-adko-light-bg text-adko-dark-text font-sans">
            
            <main className="flex-grow">
                
                {/* -------------------------------------- */}
                {/* 1. MEET ADKO & STATS SECTION           */}
                {/* -------------------------------------- */}
                <section className="py-24 px-4 sm:px-8 text-center">
                    <h2 className="font-adko-heading text-4xl sm:text-5xl font-extrabold tracking-wider mb-6">
                        MEET LOCBIZZ
                    </h2>
                    <p className="max-w-3xl mx-auto text-sm sm:text-base mb-16 leading-relaxed text-gray-700">
                        At Locbizz, we’re creators, strategists, and storytellers all rolled into one. We believe great ideas come from a mix of 
                        creativity, insight, and relentless execution. From digital marketing and content creation to immersive 3D visuals and 
                        full-scale campaigns, we deliver solutions that make brands stand out and connect with their audience.
                    </p>

                    {/* WE STRONGLY FOLLOW THE WORDS - Section Header */}
                    <h3 className="font-adko-heading text-3xl sm:text-4xl font-extrabold tracking-wider mb-8">
                        WE STRONGLY FOLLOW THE WORDS
                    </h3>
                    
                    {/* Collaborative Color Blocks (Inline Styles for guaranteed color match) */}
                    <div className="max-w-4xl mx-auto flex flex-col items-stretch">
                        <div 
                            style={{ backgroundColor: '#C99E3A', clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0 80%)' }}
                            className="relative h-24 flex items-center justify-center -rotate-2 transform translate-y-2"
                        >
                            <p className="text-adko-dark-text font-bold uppercase tracking-wider text-base sm:text-lg relative z-10">
                                COLLABORATION IS AT THE HEART OF EVERYTHING WE DO
                            </p>
                        </div>
                        <div 
                            style={{ backgroundColor: '#7EA8BA', clipPath: 'polygon(0 20%, 100% 0, 100% 80%, 0 100%)' }}
                            className="relative h-24 flex items-center justify-center transform translate-y-[-10px] rotate-1"
                        >
                            <p className="text-white font-bold uppercase tracking-wider text-base sm:text-lg relative z-10">
                                THERE ARE NO RULES TO CREATIVITY
                            </p>
                        </div>
                        <div 
                            style={{ backgroundColor: '#BF6C27', clipPath: 'polygon(0 20%, 100% 0, 100% 80%, 0 100%)' }}
                            className="relative h-24 flex items-center justify-center transform translate-y-[-30px] -rotate-1"
                        >
                            <p className="text-white font-bold uppercase tracking-wider text-base sm:text-lg relative z-10">
                                OUR WORK DOESN'T JUST EXIST - IT DRIVES CHANGE
                            </p>
                        </div>
                    </div>
                </section>
                
                {/* ---------------------------------------- */}
                {/* 2. OUR FOUNDATIONS SECTION             */}
                {/* ---------------------------------------- */}
                <section className="py-24 px-4 sm:px-8 bg-adko-light-bg">
                    <h2 className="font-adko-heading text-4xl sm:text-5xl font-extrabold tracking-wider mb-16 text-left max-w-7xl mx-auto">
                        OUR FOUNDATIONS
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {philosophyBlocks.map((block, index) => (
                            <div 
                                key={index} 
                                className={`h-[500px] p-6 flex flex-col justify-between relative shadow-lg ${block.className || ''}`}
                                style={{ backgroundColor: block.bgColor }}
                            >
                                <span className="absolute top-2 right-2 text-sm text-adko-dark-text/40">{index + 1}.</span>

                                {block.isImageCard ? (
                                    // Red Chair Image Card 
                                    <div className="w-full h-full flex items-center justify-center overflow-hidden">
                                        <img 
                                            src={block.imageSrc || 'placeholder-chair.jpg'} 
                                            
                                            className="w-full h-full object-cover absolute inset-0 z-0 opacity-80"
                                        />
                                        <div className="absolute inset-0" >
                                            <h3 className="font-adko-heading text-center text-white text-xl sm:text-2xl font-bold tracking-wider relative z-10 p-10">
                                                {block.title}
                                            </h3>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div>
                                            <h3 className="font-adko-heading text-2xl sm:text-3xl font-extrabold tracking-wider mb-4">
                                                {block.title}
                                            </h3>
                                            <p className={`text-sm leading-relaxed ${block.textColor === 'text-white' ? 'text-white/80' : 'text-gray-700'}`}>
                                                {block.description}
                                            </p>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* --------------------------------- */}
                {/* 3. OUR PEOPLE SECTION (Image 2) */}
                {/* --------------------------------- */}
                <section className="py-24 px-4 sm:px-8 bg-adko-dark-text text-white">
                    <h2 className="font-adko-heading text-4xl sm:text-5xl  tracking-wider ml-28 mb-12 text-white">
                        OUR PEOPLE
                    </h2>

                    {Object.keys(groupedTeam).map(location => (
                        <div key={location} className="mb-16">
                            {/* 🔥 REMOVED LOCATION TEXT: The h3 tag below is commented out as requested. */}
                            {/* <h3 className="font-adko-heading text-2xl font-extrabold tracking-widest mb-8 text-adko-dark-text">
                                {location}
                            </h3> */}
                            <div className="flex flex-wrap justify-start gap-12 max-w-7xl mx-auto">
                                {groupedTeam[location].map((member, index) => (
                                    <div key={index} className="w-full sm:w-60"> 
                                        <div className="h-80 w-full overflow-hidden mb-4">
                                            <img 
                                                src={member.image} // 🔥 FIXED: Using the 'image' property which now holds a URL.
                                                alt={member.name} 
                                                className="w-full text-white h-full object-cover rounded-sm" 
                                                style={{ filter: 'grayscale(10%)' }} 
                                            />
                                        </div>
                                        <div className="text-white">
                                            {/* Name (Larger font, bold) */}
                                            <p className="font-bold text-sm leading-snug">{member.name}</p>
                                            
                                            {/* Role (Smaller font, muted color) */}
                                            <p className="text-xs text-gray-700 mb-2">{member.role}</p>
                                            
                                            {/* Social Links (YouTube and Instagram icons) */}
                                            <div className="flex space-x-2 text-gray-700">
                                                {member.social.map((socialItem, i) => (
                                                    <a 
                                                        key={i} 
                                                        href={socialItem.url} // 🔥 FIXED: Using socialItem.url here
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="hover:text-zinc-700 text-white cursor-pointer transition-colors"
                                                    >
                                                        {socialItem.icon}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
                
            </main>

           <section 
            // 1. Set the background color from the image
            style={{ backgroundColor: IMAGE_BG_COLOR }}
            
            // 2. Ensure the section takes up at least half the viewport height 
            // and is positioned correctly. We'll use p-32 for vertical padding.
            className="py-32 flex items-center justify-center min-h-[50vh] w-full"
        >
            {/* Main content container, max-width is optional but good practice */}
            <div className="max-w-xl mx-auto px-6 sm:px-8">
                
                {/* The text in the image looks like it's split into two main blocks 
                  and uses a slightly muted color and a medium-sized font. 
                */}

                {/* --- First Text Block --- */}
                <div className="mb-10 text-lg font-light text-gray-700 leading-relaxed italic">
                    <p>
                       At LocBizz, we believe every business has a story worth sharing. Our mission is to transform local visions into powerful digital realities.
                    </p>
                </div>
                
                {/* --- Second Text Block (The CTA/Welcome) --- */}
                <div className="mb-10 text-lg font-light text-gray-700 leading-relaxed italic">
                    <p>
                        Welcome to Locbizz. Let's create something meaningful together. 
                    </p>
                </div>
                
            </div>
            
            {/* The text you provided, formatted and incorporated */}
            <div className="hidden">
                 {/* This div is included to keep the user's provided text in the codebase, 
                    but hidden, as the request was to match the image text/style.
                    The text "At LocBizz, we believe every business has a story worth sharing. Our mission is to transform local visions into powerful digital realities." 
                    can be placed here or replaced with the image's text.
                 */}
            </div>
        </section>
          <CTASection/>
          <Footer/>
    );
            {/* Custom CSS for the slanted blocks (must be placed in global CSS) */}
            <style jsx global>{`
                /* Ensure these are in your global CSS file for cross-component consistency */
                .clip-path-polygon-top-right {
                    clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 80%);
                }
                .clip-path-polygon-bottom-right {
                    clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
                }
                .clip-path-polygon-top-left {
                    clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
                }
                .bg-adko-light-bg {
                    background-color: #f7f7f7;
                }
                .text-adko-dark-text {
                    color: #333333;
                }
                .bg-adko-blue-grey {
                    background-color: #E8E8E3; /* Using a light grey background for visibility */
                }
            `}</style>
        </div>
    );
}