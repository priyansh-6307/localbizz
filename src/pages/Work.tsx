import React, { useState } from "react";
import { Play, X } from "lucide-react";
import Footer from "@/components/layout/Footer";

const videos = [
  { id: "CozUkdtvVzk", type: "youtube", thumbnail: "/new image/1.webp", isVertical: true },
  { id: "MtuFBUN9SCY", type: "youtube", thumbnail: "/new image/2.webp", isVertical: true },
  { id: "sxPoSMlE1tI", type: "youtube", thumbnail: "/new image/3.webp", isVertical: false },
  { id: "prsxsTHhRHE", type: "youtube", thumbnail: "/new image/4.webp", isVertical: false },
  { id: "DWe5gP3AYNv", type: "instagram", thumbnail: "/new image/5.webp", isVertical: true },
  { id: "DWEYcZTgfuP", type: "instagram", thumbnail: "/new image/6.webp", isVertical: true },
  { id: "DIEe87dBX9w", type: "instagram", thumbnail: "/new image/7.webp", isVertical: true },
  { id: "DVOVRQqEV3H", type: "instagram", thumbnail: "/new image/8.webp", isVertical: true },
  { id: "DUx7p2Qmj7-", type: "instagram", thumbnail: "/new image/9.jpg", isVertical: true },
];

const images = [9, 10, 11, 12, 13];

export default function Work() {
  const [selectedVideo, setSelectedVideo] = useState<null | typeof videos[0]>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl pb-24">
        
        {/* Videos Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 pl-2 uppercase tracking-tighter">Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedVideo(video)}
                className="group relative block overflow-hidden rounded-xl bg-neutral-900 aspect-[9/16] md:aspect-video cursor-pointer border border-zinc-800"
              >
                <img 
                  src={video.thumbnail} 
                  alt={`Video Thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Images Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 pl-2 uppercase tracking-tighter">Images</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((num) => (
              <div key={num} className="break-inside-avoid overflow-hidden rounded-xl bg-neutral-900 group border border-zinc-800">
                <img 
                  src={num === 9 ? `/new image/${num}.jpg` : `/new image/${num}.webp`} 
                  alt={`Gallery Image ${num}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Video Modal Overlay */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          ></div>
          
          <div className={`relative w-full ${selectedVideo.isVertical ? 'max-w-md aspect-[9/16]' : 'max-w-4xl aspect-video'} bg-black rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 transition-all duration-500`}>
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {selectedVideo.type === 'youtube' ? (
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <iframe
                src={`https://www.instagram.com/reel/${selectedVideo.id}/embed`}
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
              ></iframe>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}