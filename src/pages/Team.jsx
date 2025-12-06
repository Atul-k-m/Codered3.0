import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footnote from '../components/Footnote.jsx';
import maxsonImg from './assets/team/maxson.JPG';
import mohitImg from './assets/team/mohit.jpeg';
import nishithaImg from './assets/team/nishitha.jpg';
import vaibhavImg from './assets/team/vaibhav.jpg';

// Heads
import atulImg from './assets/team/atul.jpg';
import fardeenImg from './assets/team/fardeen.jpeg';
import gaganjithImg from './assets/team/gaganjith.jpg';
import hiteshImg from './assets/team/hitesh.jpeg';
import shriyaImg from './assets/team/shriya.jpg';
import tirthImg from './assets/team/tirth.jpg';

// Vice Heads
import akhileshImg from './assets/team/akhilesh.jpeg';
import bhanuImg from './assets/team/bhanu.JPG';
import milanImg from './assets/team/milan.jpeg';

// Associates
import ananyaImg from './assets/team/ananya.jpg';
import bhavanaImg from './assets/team/bhavana.jpg';
import dhyeyaImg from './assets/team/Dhyeya.jpg';
import jasvantiImg from './assets/team/jasvanti.jpeg';
import krishnaImg from './assets/team/krishna.jpg';
import faizanImg from './assets/team/Faizan.jpg';
import ansuImg from './assets/team/ansu.jpg';
import anvitaImg from './assets/team/anvita.jpeg';
import arushImg from './assets/team/arush.jpeg';
import ashutoshImg from './assets/team/ashutosh.jpg';
import deepthiImg from './assets/team/deepthijain.jpg';
import gaganhsImg from './assets/team/gagan.jpeg';
import jayakeerthiImg from './assets/team/jayakeerthi.png';
import krishImg from './assets/team/krishjain.jpg';
import manalImg from './assets/team/manal.jpg';
import raashiImg from './assets/team/raashi.jpg';
import rishavImg from './assets/team/rishav.jpg';
import sathyaImg from './assets/team/sathyashivani.jpeg';
import parikshithImg from './assets/team/parikshith.jpg';
import ujwalImg from './assets/team/ujwal.jpg';
import talhaImg from './assets/team/talha.jpeg';
// --- 2. CATEGORIZED DATA (Updated & Split) ---
const teamData = {
  leadership: [
    { 
      name: "Maxson Matthew", 
      position: "President", 
      image: maxsonImg,
      linkedin: null,
      instagram: null
    },
    { 
      name: "Mohit Monnappa", 
      position: "Mentor", 
      image: mohitImg,
      linkedin: "http://linkedin.com/in/mohit-monnappa",
      instagram: "Deactivated"
    },
    { 
      name: "Nishitha Bodipati", 
      position: "Vice President", 
      image: nishithaImg,
      linkedin: "https://www.linkedin.com/in/nishithabodipati",
      instagram: "https://www.instagram.com/nishithabodipati?igsh=dGU0NTkwZjYwOHI4"
    },
    { 
      name: "Vaibhav P", 
      position: "Vice President", 
      image: vaibhavImg,
      linkedin: "https://www.linkedin.com/in/vaibhavbalakundi",
      instagram: "https://www.instagram.com/bvaibhav_1199"
    }
  ],

  tech: [
    { 
      name: "Atul Kumar", 
      position: "Tech Head", 
      image: atulImg,
      linkedin: null,
      instagram: null
    },
    { 
      name: "Milan S", 
      position: "Tech Vice Head", 
      image: milanImg,
      linkedin: "https://www.linkedin.com/in/milan4606",
      instagram: "https://www.instagram.com/milxn_18"
    },
    { 
      name: "Ansu Kumar", 
      position: "Tech Associate", 
      image: ansuImg,
      linkedin: "https://www.linkedin.com/in/ansu-kumar-24359230a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://www.instagram.com/ansu_kumar07?igsh=MTR4eHM0ZDhwZ3o4Yw=="
    },
    { 
      name: "Krish Jain", 
      position: "Tech Associate", 
      image: krishImg,
      linkedin: "https://www.linkedin.com/in/krish-jain-28028928b",
      instagram: "https://www.instagram.com/krish_jain876?igsh=ZDQ3ZXNxdWYza3Rs"
    }
  ],

  design: [
    { 
      name: "Tirth Panchori", 
      position: "Design Head", 
      image: tirthImg,
      linkedin: null,
      instagram: null
    },
    { 
      name: "Akhilesh P", 
      position: "Design Vice Head", 
      image: akhileshImg,
      linkedin: "https://linkedin.com/akhilesh-pachnanda",
      instagram: "https://www.instagram.com/akhilesh.pachnanda"
    },
    { 
      name: "Jasvanti", 
      position: "Design Associate", 
      image: jasvantiImg,
      linkedin: "https://www.linkedin.com/in/jasvantim?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/jasvanti_17?igsh=MTR3cHV0NzQ2emhwNA%3D%3D&utm_source=qr"
    },
    { 
      name: "Raashi", 
      position: "Design Associate", 
      image: raashiImg,
      linkedin: "https://www.linkedin.com/in/raashi-a-85703133a",
      instagram: "@rraa.shii"
    }
  ],

  media: [
    { 
      name: "Hitesh R", 
      position: "Media Head", 
      image: hiteshImg,
      linkedin: "https://www.linkedin.com/in/hiteshgowdaaa",
      instagram: "https://www.instagram.com/hiteshgowdaaa"
    },
    { 
      name: "Bhanu Prasad", 
      position: "Media Vice Head", 
      image: bhanuImg,
      linkedin: "https://www.linkedin.com/in/bhanu-prasad-n-10706424b",
      instagram: "https://www.instagram.com/bhanu_prasad_30"
    },
    { 
      name: "Ananya", 
      position: "Media Associate", 
      image: ananyaImg,
      linkedin: "https://www.linkedin.com/in/ananya-akkihal-212406302",
      instagram: "https://www.instagram.com/ananyaakkihal"
    },
    { 
      name: "Bhavana", 
      position: "Marketing Associate", 
      image: bhavanaImg,
      linkedin: null,
      instagram: null
    },
    { 
      name: "Krishna", 
      position: "Marketing Associate", 
      image: krishnaImg,
      linkedin: null,
      instagram: null
    },
    { 
      name: "Faizan Khan", 
      position: "Marketing Associate", 
      image: faizanImg,
      linkedin: "https://www.linkedin.com/in/faizan-khan-a88720286",
      instagram: "https://www.instagram.com/faizankhan__17"
    },
    { 
      name: "Anvita", 
      position: "Marketing Associate", 
      image: anvitaImg,
      linkedin: "https://www.linkedin.com/in/anvita-singh-82377135a",
      instagram: "https://www.instagram.com/anvitasinghh"
    },
    { 
      name: "Manal", 
      position: "Marketing Associate", 
      image: manalImg,
      linkedin: "https://www.linkedin.com/in/manal-gupta-90429532a",
      instagram: "https://www.instagram.com/manal_gupta_"
    }
  ],

  events: [
    { 
      name: "Gaganjith R", 
      position: "Events Head", 
      image: gaganjithImg,
      linkedin: null,
      instagram: null
    },
    { 
      name: "Dhyeya", 
      position: "Ops Associate", 
      image: dhyeyaImg,
      linkedin: "https://www.linkedin.com/in/dhyeya-talupula-7473b1290",
      instagram: "https://www.instagram.com/dhyeya_06"
    },
    { 
      name: "Deepthi Jain", 
      position: "Event/Ops Associate", 
      image: deepthiImg,
      linkedin: "https://www.linkedin.com/in/p-deepthi-jain-931621357",
      instagram: "https://www.instagram.com/deepthiijain"
    },
    { 
      name: "Gagan HS", 
      position: "Operations Associate", 
      image: gaganhsImg,
      linkedin: "https://www.linkedin.com/in/gagan-h-s-b12199347",
      instagram: "https://www.instagram.com/_notgagann"
    },
    { 
      name: "Rishav", 
      position: "Event/Ops Associate", 
      image: rishavImg,
      linkedin: null,
      instagram: null
    },
    { 
      name: "Md Talha", 
      position: "Event/Ops Associate", 
      image: talhaImg,
      linkedin: null,
      instagram: null
    },

    {
      name: "Ujwal",
      position: "Event/Ops Associate",
      image: ujwalImg,
      linkedin: "https://www.linkedin.com/in/ujwal-u-jawalgi-132944320",
      instagram: "https://www.instagram.com/the._ujwal?igsh=ZGxrcm11aTE2YmRt"
    }
  ],

  corporate: [
    { 
      name: "Fardeen K", 
      position: "Corporate Relations Head", 
      image: fardeenImg,
      linkedin: "https://www.linkedin.com/in/kfk1509/",
      instagram: null
    },
    { 
      name: "Arush", 
      position: "Corporate Relations Associate", 
      image: arushImg,
      linkedin: "https://www.linkedin.com/in/arush-singh-257782341",
      instagram: "https://www.instagram.com/_not.arush_"
    },
    { 
      name: "Sathya Shivani", 
      position: "Corporate Relations Associate", 
      image: sathyaImg,
      linkedin: null,
      instagram: null
    }
  ],

  content: [
    { 
      name: "Shriya", 
      position: "Content Head", 
      image: shriyaImg,
      linkedin: null,
      instagram: null
    },
    { 
      name: "Ashutosh", 
      position: "Content Associate", 
      image: ashutoshImg,
      linkedin: "https://www.linkedin.com/in/bhattvashutosh",
      instagram: "https://www.instagram.com/_.ashutosh._26"
    },
    { 
      name: "Jayakeerthi", 
      position: "Content Associate", 
      image: jayakeerthiImg,
      linkedin: "https://www.linkedin.com/in/jayakeerthy-n-j-37a533334",
      instagram: "https://www.instagram.com/jayakeerthyy"
    },
    { 
      name: "Parikshith S",
      position: "Content Associate",
      image: parikshithImg,
      linkedin: "https://www.linkedin.com/in/parikshith-s-30b762334",
      instagram: "https://www.instagram.com/parikshith_27"
    }
  ]
};


// --- 3. COMPONENTS ---

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const SectionDivider = ({ title }) => (
  <div className="section-divider">
    <div className="line"></div>
    <div className="divider-content">
       <span className="diamond">❖</span>
       <span className="divider-text">{title}</span>
       <span className="diamond">❖</span>
    </div>
    <div className="line"></div>
  </div>
);

const TeamCard = ({ member }) => {
  return (

    <div className="shard-card">
      <div className="shard-image-wrapper">
        <img 
          src={member.image} 
          alt={member.name} 
          className="shard-img"
          onError={(e) => {e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=111&color=fff&size=256`}}
        />
      </div>
      <div className="shard-content">
        <h3 className="shard-name">{member.name}</h3>
        <p className="shard-role">{member.position}</p>
        
        <div className="shard-socials">
          {member.instagram && <a href={member.instagram} className="social-link"><InstagramIcon /></a>}
          {member.linkedin && <a href={member.linkedin} className="social-link"><LinkedinIcon /></a>}
        </div>
      </div>
    </div>
  );
};

const TeamPage = () => {
  return (
    <div className="team-container">
      <Navbar />
      <style>{`
        :root {
          --bg-color: #050505; /* Very dark grey, almost black */
          --text-primary: #ffffff;
          --text-secondary: #aaaaaa;
          --accent-color: #ff3333;
        }

        body { margin: 0; background-color: var(--bg-color); }

        .team-container {
          background-color: var(--bg-color);
          min-height: 100vh;
          padding: 110px 1.5rem 4rem 1.5rem;
          font-family: 'Helvetica Neue', sans-serif;
          overflow-x: hidden;
          
          /* --- GRID BACKGROUND EFFECT --- */
          /* Creates a 50px x 50px grid of very faint lines */
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .main-heading {
          text-align: center;
          color: var(--text-primary);
          font-size: 3rem;
          font-weight: 900;
          text-transform: uppercase;
          margin-bottom: 1rem;
          letter-spacing: 2px;
          font-family: 'Riccione', sans-serif;
          text-shadow: 0 4px 10px rgba(0,0,0,0.8);
        }

        /* --- DIVIDER STYLES --- */
        .section-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 4rem 0 2rem 0;
          width: 100%;
          gap: 15px;
        }

        .line {
          height: 1px;
          background: rgba(255, 255, 255, 0.3);
          flex-grow: 1;
          max-width: 300px;
        }

        .divider-content {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-primary);
          background: var(--bg-color); /* Hides grid behind text */
          padding: 0 10px; 
          border-radius: 4px;
        }

        .divider-text {
          font-size: 1.5rem;
          font-weight: 700;
          font-family: 'offbit', sans-serif;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .diamond {
          color: var(--accent-color);
          font-size: 1.2rem;
        }

        /* --- GRID SYSTEM --- */
        .grid-layout {
          display: grid;
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
          grid-template-columns: repeat(4, 1fr);
        }

        /* MOBILE OVERRIDE: 2 COLUMNS */
        @media (max-width: 1024px) {
           .grid-layout {
              grid-template-columns: repeat(2, 1fr);
              gap: 1rem;
           }
        }

        /* --- CARD STYLES --- */
        .shard-card {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .shard-image-wrapper {
          width: 100%;
          aspect-ratio: 1 / 1; 
          position: relative;
          /* Cutout shape */
          clip-path: polygon(
            15% 0%, 100% 0%, 
            100% 85%, 85% 100%, 
            0% 100%, 0% 15%
          );
          transition: all 0.3s ease;
          background: #1a1a1a;
          overflow: hidden;
        }

        .shard-img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: top center; 
          transition: transform 0.4s ease;
          /* --- COLOR FILTER REMOVED --- */
          filter: none; 
        }

        /* HOVER EFFECTS */
        .shard-card:hover .shard-image-wrapper {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(255, 51, 51, 0.2);
          border-bottom: 4px solid var(--accent-color);
        }

        .shard-card:hover .shard-img {
          transform: scale(1.05);
        }

        .shard-content {
          padding-top: 1rem;
          text-align: left;
          font-family: 'grotesk', sans-serif;
        }

        .shard-name {
          font-size: 1.1rem;
          font-weight: 700;

          color: var(--text-primary);
          text-transform: uppercase;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis; 
        }

        .shard-role {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin: 4px 0 8px 0;
          font-family: monospace;
        }

        .shard-socials {
          display: flex;
          gap: 10px;
        }

        .social-link {
          color: var(--text-primary);
          opacity: 0.6;
          transition: 0.2s;
        }
        .social-link:hover { opacity: 1; color: var(--accent-color); }

        @media (max-width: 768px) {
           .shard-name { font-size: 0.95rem; }
           .shard-role { font-size: 0.75rem; }
           .divider-text { font-size: 1.2rem; }
        }
      `}</style>

      <h1 className="main-heading" >Meet The Team</h1>

      <SectionDivider title="Leadership" />
      <div className="grid-layout">
        {teamData.leadership.map((m, i) => <TeamCard key={i} member={m} />)}
      </div>

      <SectionDivider title="Tech Domain" />
      <div className="grid-layout">
        {teamData.tech.map((m, i) => <TeamCard key={i} member={m} />)}
      </div>

      <SectionDivider title="Design Domain" />
      <div className="grid-layout">
        {teamData.design.map((m, i) => <TeamCard key={i} member={m} />)}
      </div>

      <SectionDivider title="Media & Marketing" />
      <div className="grid-layout">
        {teamData.media.map((m, i) => <TeamCard key={i} member={m} />)}
      </div>

      <SectionDivider title="Events & Ops" />
      <div className="grid-layout">
        {teamData.events.map((m, i) => <TeamCard key={i} member={m} />)}
      </div>

      <SectionDivider title="Corporate Relations" />
      <div className="grid-layout">
        {teamData.corporate.map((m, i) => <TeamCard key={i} member={m} />)}
      </div>

      <SectionDivider title="Content Team" />
      <div className="grid-layout">
        {teamData.content.map((m, i) => <TeamCard key={i} member={m} />)}
      </div>
      <Footnote />
    </div>
  );
};

export default TeamPage;