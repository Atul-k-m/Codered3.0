import React from 'react';
import Footnote from '../components/Footnote.jsx';
// Import images
import arush from './assets/team/arush.jpg';
import ashutosh from './assets/team/ashutosh.jpg';
import deepthijain from './assets/team/deepthijain.jpg';
import Dhyeya from './assets/team/Dhyeya.jpg';
import divyashree from './assets/team/divyashree.jpg';
import gaganhs from './assets/team/gaganhs.jpeg';
import gaganjith from './assets/team/gaganjith.jpg';
import jasvanti from './assets/team/jasvanti.jpeg';
import jayakeerthi from './assets/team/jayakeerthi.jpg';
import krishna from './assets/team/krishna.jpg';
import manal from './assets/team/manal.png';
import maxson from './assets/team/maxson.JPG';
import mohit from './assets/team/mohit.jpeg';
import parathana from './assets/team/parathana.jpeg';
import sathyashivani from './assets/team/sathyashivani.jpeg';
import vaibhav from './assets/team/vaibhav.jpg';
import atul from './assets/team/atul.jpg';
import hitesh from './assets/team/hitesh.jpeg';
import tirth from './assets/team/tirth.jpg';
import fardeen from './assets/team/fardeen.jpeg';
import krishjain from './assets/team/krishjain.jpg';
import shriya from './assets/team/shriya.jpg';
import nishitha from './assets/team/nishitha.jpeg';
import milan from './assets/team/milan.jpg';
import akhilesh from './assets/team/akhilesh.jpeg';
import bhanu from './assets/team/bhanu.JPG';
import raashi from './assets/team/raashi.jpg';
import ananya from './assets/team/ananya.jpg';
import anvita from './assets/team/anvita.jpg';
import ansu from './assets/team/ansu.jpg';
import bhavana from './assets/team/bhavana.jpg';
import faizan from './assets/team/Faizan.jpg';
import rishav from './assets/team/rishav.jpg';

const teamData = {
  "leadership": [
    { "name": "Maxson Matthew", "position": "President", "image": maxson },
    { "name": "Mohit Monnappa", "position": "Mentor", "image": mohit },
    { "name": "Nishitha Bodipati", "position": "Vice President", "image": nishitha },
    { "name": "Vaibhav P", "position": "Vice President", "image": vaibhav }
  ],
  "heads": [
    { "name": "Atul Kumar", "position": "Tech", "image": atul },
    { "name": "Fardeen K", "position": "Corporate Relations", "image": fardeen },
    { "name": "Gaganjith R", "position": "Events & Ops", "image": gaganjith },
    { "name": "Hitesh R", "position": "Media & Marketing", "image": hitesh },
    { "name": "Shriya", "position": "Content", "image": shriya },
    { "name": "Tirth Panchori", "position": "Design", "image": tirth }
  ],
  "viceHeads": [
     { "name": "Akhilesh Pachnanda", "position": "Design", "image": akhilesh },
     { "name": "Bhanu Prasad", "position": "Media", "image": bhanu },
    { "name": "Milan S", "position": "Tech", "image": milan }
  ],
  "associates": [
    { "name": "Ananya", "position": "Media", "image": ananya },
    { "name": "Bhavana", "position": "Marketing", "image": bhavana },
    { "name": "Dhyeya", "position": "Operations", "image": Dhyeya },
    { "name": "Divyashree", "position": "Operations", "image": divyashree },
    { "name": "Jasvanti", "position": "Design", "image": jasvanti },
    { "name": "Krishna", "position": "Marketing", "image": krishna },
    { "name": "Faizan Khan", "position": "Marketing", "image": faizan },
    { "name": "Parathana Dillip", "position": "Corporate Relations", "image": parathana },
    { "name": "Ansu Kumar", "position": "Tech", "image": ansu },
    { "name": "Anvita", "position": "Marketing", "image": anvita },
    { "name": "Arush", "position": "Corporate Relations", "image": arush },
    { "name": "Ashutosh", "position": "Content", "image": ashutosh },
    { "name": "Deepthi Jain", "position": "Event & Ops", "image": deepthijain },
    { "name": "Gagan HS", "position": "Operations", "image": gaganhs },
    { "name": "Jayakeerthi", "position": "Content", "image": jayakeerthi },
    { "name": "Krish Jain", "position": "Tech", "image": krishjain },
    { "name": "Manal", "position": "Marketing", "image": manal },
    { "name": "Raashi", "position": "Design", "image": raashi },
    { "name": "Rishav", "position": "Event & Ops", "image": rishav },
    { "name": "Sathya Shivani", "position": "Corporate Relations", "image": sathyashivani }
  ]
};

// Square Card Component
const SquareCard = ({ member }) => {
  return (
    <div className="group relative flex flex-col items-center justify-center">
      {/* Square Image Container */}
      <div className="relative mb-2 sm:mb-4 flex items-center justify-center">
        <div className="w-full aspect-[3/4] max-w-[200px] overflow-hidden border-2 border-gray-700 group-hover:border-orange-500 transition-all duration-300">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
      
      {/* Name */}
      <h3 className="font-semibold text-white text-center text-xs sm:text-sm md:text-base mb-1 sm:mb-2 group-hover:text-orange-500 transition-colors duration-300 px-1">
        {member.name}
      </h3>
      
      {/* Position */}
      <p className="text-gray-400 text-xs sm:text-sm text-center px-1">
        {member.position}
      </p>
    </div>
  );
};

const TeamPage = () => {
  // Combine all team members into one array
  const allMembers = [
    ...teamData.leadership,
    ...teamData.heads,
    ...teamData.viceHeads,
    ...teamData.associates
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[1]" 
           style={{
             backgroundImage: `linear-gradient(rgba(163, 159, 159, 0.68) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(197, 191, 191, 0.7) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }}>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 relative z-10">
        
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 italic tracking-tight">
            Meet Our Team
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-3 sm:mb-4"></div>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            The passionate individuals driving innovation forward
          </p>
        </div>

     
        <div className="flex justify-center px-2 sm:px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 w-full max-w-[1600px]">
            {allMembers.map((member, index) => (
              <SquareCard key={index} member={member} />
            ))}
                  
          </div>
        </div>
      </div>
      <Footnote/>
    </div>
  );
};

export default TeamPage;