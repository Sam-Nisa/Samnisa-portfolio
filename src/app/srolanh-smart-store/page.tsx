import React from 'react';
import WaveBackground from '@/components/WaveBackground';
import Footer from '@/components/Footer';
import Link from 'next/link';

const SrolanhSmartStorePage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Wave Background */}
      <WaveBackground />
      {/* Main Content */}
      <div className="min-h-screen py-12 mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button & Title */}
          <div className="flex flex-col w-full">
            {/* Back Button (left-aligned) */}
            <Link href="/#experience">
              <button
                className="relative px-6 py-2 rounded-lg text-blue-500 font-semibold transition-all duration-300 ease-in-out 
                hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent 
                shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 active:translate-y-0"
              >
                ← Back
              </button>
            </Link>

            {/* SROLANH Smart Store Title (centered) */}
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center mt-4">
              SROLANH Smart Store
            </h2>
          </div>

          {/* Information Section */}
          <div className="text-gray-800 text-left mt-10">
            <p>
              <strong>Duration:</strong> December 2022 – May 2023
            </p>
            <p>
              <strong>Position:</strong> Graphic Designer
            </p>
          </div>

          {/* Key Responsibilities */}
          <div className="mt-4 text-gray-600 space-y-2">
            <p>
              <strong>Key Responsibilities:</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>Designed and created visual content for branding.</li>
              <li>Collaborated with marketing for campaigns.</li>
              <li>Maintained brand identity consistency.</li>
              <li>Used Adobe Photoshop, Illustrator, and Canva.</li>
            </ul>
          </div>

          {/* Additional Details */}
          <div className="mt-4 text-gray-600 space-y-2 text-justify">
            <p>
              <strong>Key Responsibilities:</strong>
            </p>
            <p>
              At SROLANH Smart Store, I was responsible for creating visually
              appealing designs that aligned with the brand's identity. This
              included designing logos, banners, social media posts, and
              promotional materials.
            </p>
            <p>
              I worked closely with the marketing team to develop creative
              campaigns that effectively communicated the brand's message to the
              target audience. This required a strong understanding of design
              principles and the ability to adapt to the brand's evolving needs.
            </p>
            <p>
              I utilized tools like Adobe Photoshop, Illustrator, and Canva to
              produce high-quality designs that met the company's standards and
              resonated with customers.
            </p>
          </div>

          {/* Artworks Section */}
          <div className="mt-6">
            <p className="font-bold text-blue-600 text-center text-2xl">
              Artworks
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
              <img
                src="/Project-ArtWork/Family.jpg"
                alt="Artwork 1"
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-500 
                           hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:-translate-y-2"
              />
              <img
                src="/Project-ArtWork/Poster chat.jpg"
                alt="Artwork 2"
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-500 
                           hover:scale-110 hover:-rotate-3 hover:shadow-2xl hover:-translate-y-2"
              />
              <img
                src="/Project-ArtWork/Knowledge.jpg"
                alt="Artwork 1"
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-500 
                           hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:-translate-y-2"
              />
              <img
                src="/Project-ArtWork/Product template.jpg"
                alt="Artwork 1"
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-500 
                           hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:-translate-y-2"
              />
              <img
                src="/Project-ArtWork/Landscape.jpg"
                alt="Artwork 2"
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-500 
                           hover:scale-110 hover:-rotate-3 hover:shadow-2xl hover:-translate-y-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SrolanhSmartStorePage;
