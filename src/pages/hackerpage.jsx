import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footnote from '../components/Footnote.jsx';
// Complete Hacker Data with Unique IDs
const hackersData = [
    { id: "s1-1", name: "CodeVortex", lead: "Amogh M G", quote: "Pushing past limits to build what others say is impossible.", category: "S1", status: "Shortlisted", domain: "Software" },
    { id: "s1-2", name: "Blue", lead: "Dharshan S N", quote: "Clear minds, clean code, bold results.", category: "S1", status: "Shortlisted", domain: "Software" },
    { id: "s1-3", name: "Code Wizards", lead: "Neshandra G", quote: "Turnistacng imagination into working innovation.", category: "S1", status: "Shortlisted", domain: "Software" },
    { id: "s1-4", name: "CodeBlooded", lead: "Ankit Kumar", quote: "Where passion fuels persistence and progress.", category: "S1", status: "Shortlisted", domain: "Software" },

    { id: "s2-1", name: "Neural Nooks", lead: "S Srinidhi Vas", quote: "Learning from every failure and evolving with every step.", category: "S2", status: "Shortlisted", domain: "Software" },
    { id: "s2-2", name: "Delusion", lead: "Samyukthaa M", quote: "Dreaming boldly, building bravely.", category: "S2", status: "Shortlisted", domain: "Software" },
    { id: "s2-3", name: "Convoy Command Unit", lead: "Shivang Karol", quote: "Moving as one, achieving as many.", category: "S2", status: "Shortlisted", domain: "Software" },
    { id: "s2-4", name: "WI-FIGTERS", lead: "Shreyank Prabhu CB", quote: "Connected by purpose, driven by ambition.", category: "S2", status: "Shortlisted", domain: "Software" },
    { id: "s2-5", name: "Apex-AI-X", lead: "Kushal P", quote: "Rising to the top through relentless curiosity.", category: "S2", status: "Shortlisted", domain: "Software" },
    { id: "s2-6", name: "Momentum crew", lead: "Neeraja.R", quote: "Progress is our direction, momentum is our engine.", category: "S2", status: "Shortlisted", domain: "Software" },

    { id: "s3-1", name: "The Gradient Decendents", lead: "Mehaboob S", quote: "Every step improves us, every iteration sharpens us.", category: "S3", status: "Shortlisted", domain: "Software" },
    { id: "s3-2", name: "Runtime Terrors", lead: "Harshendra", quote: "Turning chaos into clarity, one bug at a time.", category: "S3", status: "Shortlisted", domain: "Software" },
    { id: "s3-3", name: "Chai-Fi", lead: "Chethan V", quote: "Fueled by caffeine, guided by passion.", category: "S3", status: "Shortlisted", domain: "Software" },
    { id: "s3-4", name: "Reboot", lead: "Aishwarya J A", quote: "Resetting the ordinary to build the extraordinary.", category: "S3", status: "Shortlisted", domain: "Software" },
    { id: "s3-5", name: "Dr Code", lead: "Shubham Kumr", quote: "Diagnosing problems to engineer solutions.", category: "S3", status: "Shortlisted", domain: "Software" },

    { id: "s4-1", name: "Brogrammers", lead: "Suditya Kulkarni", quote: "Stronger together, smarter together.", category: "S4", status: "Shortlisted", domain: "Software" },
    { id: "s4-2", name: "KernelKoders", lead: "Pramath J", quote: "Solving problems at the core of complexity.", category: "S4", status: "Shortlisted", domain: "Software" },
    { id: "s4-3", name: "KAFKA", lead: "Shivani N K", quote: "Streaming ideas into scalable solutions.", category: "S4", status: "Shortlisted", domain: "Software" },
    { id: "s4-4", name: "Vision Vortex", lead: "Bhuvan K K", quote: "Where imagination spirals into innovation.", category: "S4", status: "Shortlisted", domain: "Software" },
    { id: "s4-5", name: "Misamisa", lead: "Mohit V S", quote: "Crafting ideas that challenge convention.", category: "S4", status: "Shortlisted", domain: "Software" },
    { id: "s4-6", name: "QudraByte", lead: "Supreetha M", quote: "Small bytes, big vision.", category: "S4", status: "Shortlisted", domain: "Software" },

    { id: "s5-1", name: "Tryanuka", lead: "Tejas H J", quote: "Exploring, experimenting, excelling.", category: "S5", status: "Shortlisted", domain: "Software" },
    { id: "s5-2", name: "VitaCore AI", lead: "Poorvi M", quote: "Building intelligence with intention.", category: "S5", status: "Shortlisted", domain: "Software" },
    { id: "s5-3", name: "AutoMatiks", lead: "Sumukh R", quote: "Automating processes to accelerate progress.", category: "S5", status: "Shortlisted", domain: "Software" },
    { id: "s5-4", name: "phishfry", lead: "Harshita Nagesh", quote: "Turning every challenge into an opportunity.", category: "S5", status: "Shortlisted", domain: "Software" },

    { id: "s6-1", name: "LogicHigh", lead: "Keerthan A K", quote: "Thinking deeper to innovate smarter.", category: "S6", status: "Shortlisted", domain: "Software" },
    { id: "s6-2", name: "Material Girlz", lead: "Nishika", quote: "Breaking stereotypes with skill and substance.", category: "S6", status: "Shortlisted", domain: "Software" },
    { id: "s6-3", name: "Wi-Fight club", lead: "Abhilash G", quote: "We never quit – we only iterate.", category: "S6", status: "Shortlisted", domain: "Software" },
    { id: "s6-4", name: "Kronyx", lead: "Vaibhav M N", quote: "Strength in focus, success in precision.", category: "S6", status: "Shortlisted", domain: "Software" },
    { id: "s6-5", name: "FourLoop", lead: "Kshitiz Khandelwal", quote: "Looping through challenges to find solutions.", category: "S6", status: "Shortlisted", domain: "Software" },
    { id: "s6-6", name: "VCpro", lead: "Samarth Singh", quote: "Professional minds, purposeful execution.", category: "S6", status: "Shortlisted", domain: "Software" },
    { id: "s6-7", name: "Invincible_4", lead: "MD Umar Abdullah", quote: "Standing strong against every obstacle.", category: "S6", status: "Shortlisted", domain: "Software" },

    { id: "s1-w1", name: "Full Stack Biryani", lead: "Tanmay Kapadnis", quote: "Layering ideas like code — well-structured and flavorful.", category: "S1", status: "Waiting", domain: "Software" },
    { id: "s1-w2", name: "Codeless paradigm", lead: "Vinyas G M", quote: "Thinking beyond syntax to spark innovation.", category: "S1", status: "Waiting", domain: "Software" },

    { id: "s2-w1", name: "Ohm My God", lead: "Mayur S Nagoji", quote: "Charging creativity with curiosity.", category: "S2", status: "Waiting", domain: "Software" },
    { id: "s2-w2", name: "Bonda boys", lead: "Raju M", quote: "Courage, craft, and relentless teamwork.", category: "S2", status: "Waiting", domain: "Software" },

    { id: "s3-w1", name: "TesserHack", lead: "N Tarun", quote: "Thinking beyond dimensions to solve real problems.", category: "S3", status: "Waiting", domain: "Software" },
    { id: "s3-w2", name: "BlackList", lead: "M Chaitanya Pannegar", quote: "Defying limits and redefining boundaries.", category: "S3", status: "Waiting", domain: "Software" },

    { id: "s4-w1", name: "Code Yoddhas", lead: "Ishit Barman", quote: "Warriors of logic and guardians of innovation.", category: "S4", status: "Waiting", domain: "Software" },
    { id: "s4-w2", name: "The Algorithm Avengers", lead: "Param Patel", quote: "Assembling talent to conquer complexity.", category: "S4", status: "Waiting", domain: "Software" },

    { id: "s5-w1", name: "LEAVE IT TO US", lead: "Antony Fidel Castro A", quote: "Give us the challenge — we'll deliver the solution.", category: "S5", status: "Waiting", domain: "Software" },
    { id: "s5-w2", name: "Shadow Dev", lead: "Mohammed Tahir", quote: "Working silently, delivering powerfully.", category: "S5", status: "Waiting", domain: "Software" },

    { id: "s6-w1", name: "X-or", lead: "Astha Rai", quote: "Different by design, determined by purpose.", category: "S6", status: "Waiting", domain: "Software" },
    { id: "s6-w2", name: "Mutex", lead: "Saksham Yadav", quote: "Unlocking synergy through coordination.", category: "S6", status: "Waiting", domain: "Software" },

    { id: "h1-1", name: "Databaes", lead: "Srushti K", quote: "Organizing data, engineering destiny.", category: "H1", status: "Shortlisted", domain: "Hardware" },
    { id: "h1-2", name: "VELOCITY FLYERS", lead: "Shreyas S N", quote: "Fast thinking, faster execution.", category: "H1", status: "Shortlisted", domain: "Hardware" },

    { id: "h2-1", name: "Neural Net Ninjas", lead: "Sarang Sanjay", quote: "Precision in action, mastery in motion.", category: "H2", status: "Shortlisted", domain: "Hardware" },
    { id: "h2-2", name: "CodeOps", lead: "V Manivardhan Reddy", quote: "Operation excellence through intelligent engineering.", category: "H2", status: "Shortlisted", domain: "Hardware" },
    { id: "h2-3", name: "Titan core", lead: "Aashish Thakur", quote: "Strength at the core, resilience in the build.", category: "H2", status: "Shortlisted", domain: "Hardware" },

    { id: "h3-1", name: "ElectroEdge", lead: "Aradhya Prakash", quote: "Sharpening electrical innovation with human ingenuity.", category: "H3", status: "Shortlisted", domain: "Hardware" },
    { id: "h3-2", name: "Electronauts", lead: "Pragnya Srikanth Rao", quote: "Navigating circuits to discover possibilities.", category: "H3", status: "Shortlisted", domain: "Hardware" },
    { id: "h3-3", name: "Code Wizards", lead: "Aakanksha K", quote: "Crafting magic from mathematics and logic.", category: "H3", status: "Shortlisted", domain: "Hardware" },
    { id: "h3-4", name: "Questers", lead: "Surabhi R Nadig", quote: "On a journey to solve what others overlook.", category: "H3", status: "Shortlisted", domain: "Hardware" },
    { id: "h3-5", name: "Invincible", lead: "Naveen Kumar T V", quote: "Our strength lies in persistence and preparation.", category: "H3", status: "Shortlisted", domain: "Hardware" },

    { id: "h4-1", name: "Signotech", lead: "B Suraj", quote: "Leaving a signature of excellence in every build.", category: "H4", status: "Shortlisted", domain: "Hardware" },
    { id: "h4-2", name: "Hardkode3.0", lead: "Abhay Krishna B", quote: "Hard-wired for problem-solving.", category: "H4", status: "Shortlisted", domain: "Hardware" },

    { id: "h5-1", name: "Half Brain Cell", lead: "Varsha Lakshmi K", quote: "Creativity needs no overthinking — just courage.", category: "H5", status: "Shortlisted", domain: "Hardware" },
    { id: "h5-2", name: "WiSH", lead: "Wamika Varada", quote: "Turning aspirations into achievements.", category: "H5", status: "Shortlisted", domain: "Hardware" },
    { id: "h5-3", name: "forgeon2.0", lead: "Nishika R Reddy", quote: "Forging new paths through innovation.", category: "H5", status: "Shortlisted", domain: "Hardware" },
    { id: "h5-4", name: "Crazzypeeps", lead: "Priyanka TR", quote: "Bold ideas drive bold breakthroughs.", category: "H5", status: "Shortlisted", domain: "Hardware" },

    { id: "h6-1", name: "Windows12Devs", lead: "Kshiraja Nelapati", quote: "Building forward with futuristic vision.", category: "H6", status: "Shortlisted", domain: "Hardware" },
    { id: "h6-2", name: "GENESIS", lead: "Hemanth S", quote: "Every great creation begins with a spark.", category: "H6", status: "Shortlisted", domain: "Hardware" },
    // H2
    // H1
    { id: 1, name: "Aura", lead: "Jayanth DN", quote: "Code is like humor. When you have to explain it, it’s bad.", category: "H1", status: "Waiting", domain: "Hardware" },
    { id: 2, name: "PeaceOps", lead: "Keerthana gururaj", quote: "Debugging is like being the detective in a crime movie where you are also the murderer.", category: "H1", status: "Waiting", domain: "Hardware" },
    { id: 3, name: "Tech Titans", lead: "Rachit Jain", quote: "Programming is thinking, not typing.", category: "H2", status: "Waiting", domain: "Hardware" },
    { id: 4, name: "NexaTrace", lead: "Naga Venkata Akhilesh Chandluri", quote: "Eat, Sleep, Code, Repeat.", category: "H2", status: "Waiting", domain: "Hardware" },

    // H3
    { id: 5, name: "Team InfraRed", lead: "Jiya Kulkarni", quote: "First, solve the problem. Then, write the code.", category: "H3", status: "Waiting", domain: "Hardware" },
    { id: 6, name: "Innovastra", lead: "M Hasini", quote: "Code never lies, comments sometimes do.", category: "H3", status: "Waiting", domain: "Hardware" },

    // H4
    { id: 7, name: "ThunderStack", lead: "Jagruthi Reddy B", quote: "In coding, the journey matters more than the destination.", category: "H4", status: "Waiting", domain: "Hardware" },
    { id: 8, name: "Circuit Masters", lead: "Sankarshan V sastry", quote: "Keep calm and code on.", category: "H4", status: "Waiting", domain: "Hardware" },

    // H5
    { id: 9, name: "NextGen", lead: "Dayana B", quote: "Code hard or go home.", category: "H5", status: "Waiting", domain: "Hardware" },
    { id: 10, name: "PRIME", lead: "ASHWINI HADAGALI", quote: "Semicolons are like life: sometimes optional, sometimes fatal.", category: "H5", status: "Waiting", domain: "Hardware" },

    // H6
    { id: 11, name: "STASH Monarchs", lead: "Tharun Susri B S", quote: "Real programmers count from 0.", category: "H6", status: "Waiting", domain: "Hardware" },



    { id: "u1-1", name: "NexTech", lead: "Chinmayee S Pujar", quote: "Code is the closest thing we have to magic.", category: "U1", status: "Shortlisted", domain: "Unisys" },
    { id: "u1-2", name: "LogiMind", lead: "Harshil Sharma", quote: "In the world of logic, bugs fear clarity.", category: "U1", status: "Shortlisted", domain: "Unisys" },
    { id: "u1-3", name: "Vague_Sense", lead: "Amitesh Bhardwaj", quote: "Great ideas begin where comfort ends.", category: "U1", status: "Shortlisted", domain: "Unisys" },


    // -------------------- U2 --------------------
    { id: "u2-1", name: "The Quadrent", lead: "Manjula Rani", quote: "Code never lies, but comments do.", category: "U2", status: "Shortlisted", domain: "Unisys" },
    { id: "u2-2", name: "No code paradigm", lead: "Vinyas G M", quote: "When logic gets tough, break it into functions.", category: "U2", status: "Shortlisted", domain: "Unisys" },
    { id: "u2-3", name: "4Direction", lead: "Aman", quote: "Finding the right path in every direction.", category: "U2", status: "Shortlisted", domain: "Unisys" },
    { id: "u2-4", name: "The binary brain", lead: "Prajna Saha", quote: "Thinking in 1s and 0s.", category: "U2", status: "Shortlisted", domain: "Unisys" },



    { id: "u3-1", name: "Forbidden Phishers", lead: "Shashank Pandey", quote: "Hack the problem, not the system.", category: "U3", status: "Shortlisted", domain: "Unisys" },

    { id: "u3-2", name: "INNOVCAMP", lead: "Nithin Naik R", quote: "Innovation begins where templates end.", category: "U3", status: "Shortlisted", domain: "Unisys" },

    { id: "u3-3", name: "CODEBREAKER5", lead: "Sidhartha NS", quote: "If it works, ship it. If it doesn't, debug it.", category: "U3", status: "Shortlisted", domain: "Unisys" },


    { id: "u4-1", name: "GARUDA", lead: "Srijan U", quote: "You don't need wings when you can deploy.", category: "U4", status: "Shortlisted", domain: "Unisys" },

    { id: "u4-2", name: "Redbyte", lead: "Mansi Kalgudi", quote: "Redefine limits one byte at a time.", category: "U4", status: "Shortlisted", domain: "Unisys" },

    { id: "u4-3", name: "Run Time Terror", lead: "Pratyush Visu", quote: "Turn runtime errors into runtime excellence.", category: "U4", status: "Shortlisted", domain: "Unisys" },


    { id: "u5-1", name: "Mjolnir", lead: "Dheeksha N", quote: "A coder's hammer is logic—strike wisely.", category: "U5", status: "Shortlisted", domain: "Unisys" },

    { id: "u5-2", name: "MSN", lead: "Nithin J", quote: "Good code is silent; bad code screams.", category: "U5", status: "Shortlisted", domain: "Unisys" },

    { id: "u5-3", name: "Caffeine Crew", lead: "Thejaswini V Bhat", quote: "Caffeine in, creativity out.", category: "U5", status: "Shortlisted", domain: "Unisys" },

    { id: "u5-4", name: "SlothX", lead: "Nuvvula Geethika", quote: "Slow and steady still wins—especially in debugging.", category: "U5", status: "Shortlisted", domain: "Unisys" },


    { id: "u6-1", name: "Tesla_Curie", lead: "Abhiragini K", quote: "Electric ideas need magnetic execution.", category: "U6", status: "Shortlisted", domain: "Unisys" },

    { id: "u6-2", name: "Team 269", lead: "Keerthi Narayan M V", quote: "Sometimes all you need is one perfect loop.", category: "U6", status: "Shortlisted", domain: "Unisys" },
    { id: "u6-3", name: "Tech titans", lead: "Aditya Kumar Bangre", quote: "Titans of technology, masters of code.", category: "U6", status: "Shortlisted", domain: "Unisys" },


    { id: "u7-1", name: "Tenet", lead: "Satvika Prashanth H", quote: "Time bends, but logic doesn't.", category: "U7", status: "Shortlisted", domain: "Unisys" },

    { id: "u7-2", name: "Infinity Devs", lead: "Sumit Srivastava", quote: "Infinity is just recursion with style.", category: "U7", status: "Shortlisted", domain: "Unisys" },

    { id: "u7-3", name: "Prototype Pirates", lead: "Nipun Gupta", quote: "Steal ideas. Build better ones. Ship faster.", category: "U7", status: "Shortlisted", domain: "Unisys" },


    { id: "u8-1", name: "LOLgorithms", lead: "Sushruth Kumar", quote: "Algorithms solve problems; laughter solves stress.", category: "U8", status: "Shortlisted", domain: "Unisys" },

    { id: "u8-2", name: "Team 0/1", lead: "Sunder Gandhi N", quote: "Life is binary—either you code or you don't.", category: "U8", status: "Shortlisted", domain: "Unisys" },

    { id: "u8-3", name: "Unified Cargo Exchange", lead: "V Nanda Kishore N", quote: "Clean logic moves faster than any cargo.", category: "U8", status: "Shortlisted", domain: "Unisys" },

    { id: "u8-4", name: "Kairos", lead: "Srinidhi P", quote: "Perfect timing is the ultimate feature.", category: "U8", status: "Shortlisted", domain: "Unisys" }
]



// Hacker Card Component
const HackerCard = ({ team }) => {
    return (
        <div
            className="relative bg-black border border-gray-800 p-6 h-full flex flex-col justify-between group hover:border-red-600 transition-colors duration-300"
            style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}
        >
            {/* Waiting List Tag */}
            {team.status === "Waiting" && (
                <div className="absolute -top-3 -left-3 bg-orange-600 text-white text-xs font-bold px-3 py-1 transform -rotate-6 shadow-lg z-10">
                    Waiting List
                </div>
            )}

            {/* Category Tag */}
            <div className="absolute -top-4 -right-2 bg-red-600 text-white text-sm font-bold px-4 py-1 shadow-lg transform rotate-2">
                {team.category}
            </div>

            <div className="mt-4">
                <h3 className="text-2xl font-bold text-red-600 mb-4 uppercase tracking-wider glow">
                    {team.name}
                </h3>

                <div className="mb-4">
                    <p className="text-gray-400 text-sm font-semibold">Team Lead :</p>
                    <p className="text-white text-lg font-medium">{team.lead}</p>
                </div>
            </div>

            <div className="mt-auto pt-4 border-t border-gray-900 flex justify-between items-end">
                <p className="text-gray-500 text-xs italic max-w-[70%]">
                    "{team.quote}"
                </p>
                <span className="text-xs text-red-400 border border-red-900/50 px-2 py-1 rounded">
                    {team.domain}
                </span>
            </div>

            {/* Corner decorations */}
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-red-600/50"></div>
            <div className="absolute top-0 left-0 w-2 h-2 bg-red-600/50"></div>
        </div>
    );
};

// Main Hackers Page Component
const HackersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');
    const [activeDomain, setActiveDomain] = useState('Software');

    // Get unique categories for the active domain
    const categories = useMemo(() => {
        const domainCategories = hackersData
            .filter(team => team.domain === activeDomain)
            .map(team => team.category);
        return ['All', ...new Set(domainCategories)].sort();
    }, [activeDomain]);

    const domains = [
        { id: 'Software', label: 'Software', range: 'S1-S8' },
        { id: 'Hardware', label: 'Hardware', range: 'H1-H8' },
        { id: 'Unisys', label: 'Unisys', range: 'U1-U8' }
    ];

    // Filter teams based on search, category, and domain
    const filteredTeams = useMemo(() => {
        return hackersData.filter(team => {
            const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                team.lead.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter = activeFilter === 'All' || team.category === activeFilter;
            const matchesDomain = team.domain === activeDomain;

            return matchesSearch && matchesFilter && matchesDomain;
        });
    }, [searchTerm, activeFilter, activeDomain]);

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 relative overflow-hidden">
            {/* Background Elements */}
            <Navbar />
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-widest text-white">
                        Hackers
                    </h1>
                    <div className="w-24 h-1 bg-red-600 mx-auto"></div>
                </div>

                {/* Domain Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-900/50 border border-gray-800 backdrop-blur-sm"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}>
                        {domains.map((domain) => {
                            const isActive = activeDomain === domain.id;
                            return (
                                <button
                                    key={domain.id}
                                    onClick={() => {
                                        setActiveDomain(domain.id);
                                        setActiveFilter('All');
                                    }}
                                    className={`flex items-center gap-2 px-8 py-4 text-base md:text-lg font-bold uppercase tracking-wider transition-all duration-300 border-r border-gray-800 last:border-r-0
                                ${isActive
                                            ? 'bg-red-600 text-white'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {domain.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-8">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-500 group-focus-within:text-red-500 transition-colors" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-3 border border-gray-800 rounded-none leading-5 bg-black/50 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 sm:text-sm transition-all duration-300"
                            placeholder={`Search ${activeDomain} teams...`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            style={{
                                backgroundImage: activeFilter !== category ? 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)' : 'none',
                                backgroundSize: '20px 20px'
                            }}
                            className={`px-6 py-2 border transition-all duration-300 uppercase tracking-wider font-bold text-sm
                ${activeFilter === category
                                    ? 'bg-red-600 border-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]'
                                    : 'bg-transparent border-red-900/50 text-gray-400 hover:border-red-600 hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Teams Grid */}
                {filteredTeams.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-12">
                        {filteredTeams.map((team) => (
                            <HackerCard key={team.id} team={team} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 py-12">
                        <p className="text-xl">No {activeDomain} teams found matching your criteria.</p>
                    </div>
                )}
            </div>
            <Footnote />
        </div>
    );
};

export default HackersPage;