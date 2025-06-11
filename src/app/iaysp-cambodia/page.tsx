import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const IayspCambodiaPage = () => {
  return (
    <div className="relative overflow-hidden">
      <Header />

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

            {/* Title */}
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center mt-4">
              IAYSP-Cambodia
            </h2>
          </div>

          {/* Information Section */}
          <div className="text-gray-800 text-left mt-10">
            <p>
              <strong>Duration:</strong> December 2020 – October 2022
            </p>
            <p>
              <strong>Position:</strong> Volunteer (Technical Support / Graphic
              Design)
            </p>
          </div>

          {/* Key Responsibilities */}
          <div className="mt-4 text-gray-600 space-y-2">
            <p>
              <strong>Key Responsibilities:</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>Provided IT support and troubleshooting.</li>
              <li>Designed event and promotional materials.</li>
              <li>Managed technical aspects of events.</li>
              <li>Developed creative solutions for technical challenges.</li>
            </ul>
          </div>

          {/* Additional Details */}
          <div className="mt-4 text-gray-600 space-y-2 text-justify">
            <p>
              <strong>Key Responsibilities:</strong>
            </p>
            <p>
              I was responsible for ensuring smooth technical operations during
              events, including setting up AV equipment and troubleshooting
              issues.
            </p>
            <p>
              Additionally, I designed promotional materials, requiring
              creativity and attention to detail.
            </p>
            <p>
              I utilized tools like Adobe Photoshop, Illustrator, and Canva to
              produce high-quality designs that met the company&rsquo;s
              standards and resonated with customers.
            </p>
          </div>

          {/* Artworks Section */}
          <div className="mt-6">
            {/* Certificates Section */}
            <div className="mt-10">
              <p className="font-bold text-blue-600 text-center text-2xl">
                Certificates
              </p>
              <div className="flex justify-center items-center mt-4">
                <Image
                  src="/catification/Certificate of Appriciation.jpg"
                  alt="Certificate 1"
                  width={500}
                  height={700}
                  className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg transition-all duration-500 
                    hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:-translate-y-2"
                />
              </div>
            </div>

            <p className="font-bold text-blue-600 text-center text-2xl mt-10">
              Artworks
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
              <Image
                src="/Project-ArtWork/Pchum Ben day poster.jpg"
                alt="Artwork 1"
                width={400}
                height={500}
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-500 
                hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:-translate-y-2"
              />
              <Image
                src="/Project-ArtWork/Workshop.jpg"
                alt="Artwork 2"
                width={400}
                height={500}
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-500 
                hover:scale-110 hover:-rotate-3 hover:shadow-2xl hover:-translate-y-2"
              />
              <Image
                src="/Project-ArtWork/Ticket.jpg"
                alt="Artwork 3"
                width={400}
                height={500}
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

export default IayspCambodiaPage;
