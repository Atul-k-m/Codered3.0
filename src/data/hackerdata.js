const hackersData = [
    { id: 1, name: "CodeVortex", lead: "Amogh M G", quote: "Pushing past limits to build what others say is impossible.", category: "S1", status: "Shortlisted", domain: "Software" },
    { id: 2, name: "Blue", lead: "Dharshan S N", quote: "Clear minds, clean code, bold results.", category: "S1", status: "Shortlisted", domain: "Software" },
    { id: 3, name: "Code Wizards", lead: "Neshandra G", quote: "Turning imagination into working innovation.", category: "S1", status: "Shortlisted", domain: "Software" },
    { id: 4, name: "CodeBlooded", lead: "ANKIT KUMAR", quote: "Where passion fuels persistence and progress.", category: "S1", status: "Shortlisted", domain: "Software" },

    { id: 5, name: "Neural Nooks", lead: "S SRINIDHI VAS", quote: "Learning from every failure and evolving with every step.", category: "S2", status: "Shortlisted", domain: "Software" },
    { id: 6, name: "Delusion", lead: "Samyukthaa M", quote: "Dreaming boldly, building bravely.", category: "S2", status: "Shortlisted", domain: "Software" },
    { id: 7, name: "Convoy Command Unit", lead: "Shivang Karol", quote: "Moving as one, achieving as many.", category: "S2", status: "Shortlisted", domain: "Software" },
    { id: 8, name: "WI-FIGTERS", lead: "Shreyank Prabhu CB", quote: "Connected by purpose, driven by ambition.", category: "S2", status: "Shortlisted", domain: "Software" },
    { id: 9, name: "Apex-AI-X", lead: "KUSHAL P", quote: "Rising to the top through relentless curiosity.", category: "S2", status: "Shortlisted", domain: "Software" },
    { id: 10, name: "Momentum crew", lead: "Neeraja.R", quote: "Progress is our direction, momentum is our engine.", category: "S2", status: "Shortlisted", domain: "Software" },

    { id: 11, name: "The Gradient Decendents", lead: "Mehaboob S", quote: "Every step improves us, every iteration sharpens us.", category: "S3", status: "Shortlisted", domain: "Software" },
    { id: 12, name: "Runtime Terrors", lead: "Harshendra", quote: "Turning chaos into clarity, one bug at a time.", category: "S3", status: "Shortlisted", domain: "Software" },
    { id: 13, name: "Chai-Fi", lead: "Chethan V", quote: "Fueled by caffeine, guided by passion.", category: "S3", status: "Shortlisted", domain: "Software" },
    { id: 14, name: "Reboot", lead: "Aishwarya J A", quote: "Resetting the ordinary to build the extraordinary.", category: "S3", status: "Shortlisted", domain: "Software" },
    { id: 15, name: "Dr Code", lead: "Shubham Kumar", quote: "Diagnosing problems to engineer solutions.", category: "S3", status: "Shortlisted", domain: "Software" },

    { id: 16, name: "Brogrammers", lead: "Suditya Kulkarni", quote: "Stronger together, smarter together.", category: "S4", status: "Shortlisted", domain: "Software" },
    { id: 17, name: "KernelKoders", lead: "Pramath J", quote: "Solving problems at the core of complexity.", category: "S4", status: "Shortlisted", domain: "Software" },
    { id: 18, name: "KAFKA", lead: "Shivani N K", quote: "Streaming ideas into scalable solutions.", category: "S4", status: "Shortlisted", domain: "Software" },
    { id: 19, name: "Vision Vortex", lead: "Bhuvan K K", quote: "Where imagination spirals into innovation.", category: "S4", status: "Shortlisted", domain: "Software" },
    { id: 20, name: "Misamisa", lead: "Mohit V S", quote: "Crafting ideas that challenge convention.", category: "S4", status: "Shortlisted", domain: "Software" },
    { id: 21, name: "QudraByte", lead: "Supreetha M", quote: "Small bytes, big vision.", category: "S4", status: "Shortlisted", domain: "Software" },

    { id: 22, name: "Tryanuka", lead: "TEJAS H J", quote: "Exploring, experimenting, excelling.", category: "S5", status: "Shortlisted", domain: "Software" },
    { id: 23, name: "VitaCore AI", lead: "Poorvi M", quote: "Building intelligence with intention.", category: "S5", status: "Shortlisted", domain: "Software" },
    { id: 24, name: "AutoMatiks", lead: "Sumukh R", quote: "Automating processes to accelerate progress.", category: "S5", status: "Shortlisted", domain: "Software" },
    { id: 25, name: "phishfry", lead: "Harshita Nagesh", quote: "Turning every challenge into an opportunity.", category: "S5", status: "Shortlisted", domain: "Software" },

    { id: 26, name: "LogicHigh", lead: "Keerthan A K", quote: "Thinking deeper to innovate smarter.", category: "S6", status: "Shortlisted", domain: "Software" },
    { id: 27, name: "Material Girlz", lead: "Nishika", quote: "Breaking stereotypes with skill and substance.", category: "S6", status: "Shortlisted", domain: "Software" },
    { id: 28, name: "Wi-Fight club", lead: "Abhilash G", quote: "We never quit – we only iterate.", category: "S6", status: "Shortlisted", domain: "Software" },
    { id: 29, name: "Kronyx", lead: "VAIBHAV M N", quote: "Strength in focus, success in precision.", category: "S6", status: "Shortlisted", domain: "Software" },
    { id: 30, name: "FourLoop", lead: "Kshitiz Khandelwal", quote: "Looping through challenges to find solutions.", category: "S6", status: "Shortlisted", domain: "Software" },
    { id: 31, name: "VCpro", lead: "Samarth Singh", quote: "Professional minds, purposeful execution.", category: "S6", status: "Shortlisted", domain: "Software" },
    { id: 32, name: "Invincible_4", lead: "MD UMAR ABDULLAH", quote: "Standing strong against every obstacle.", category: "S6", status: "Shortlisted", domain: "Software" },

    { id: 1, name: "Full Stack Biryani", lead: "Aditya Tripathi", quote: "Layering ideas like code — well-structured and flavorful.", category: "S1", status: "Waiting", domain: "Software" },
    { id: 2, name: "Codeless paradigm", lead: "Vinyas G M", quote: "Thinking beyond syntax to spark innovation.", category: "S1", status: "Waiting", domain: "Software" },

    { id: 3, name: "Ohm My God", lead: "Mayur S Nagoji", quote: "Charging creativity with curiosity.", category: "S2", status: "Waiting", domain: "Software" },
    { id: 4, name: "Bonda boys", lead: "Raju M", quote: "Courage, craft, and relentless teamwork.", category: "S2", status: "Waiting", domain: "Software" },

    { id: 5, name: "TesserHack", lead: "N Tarun", quote: "Thinking beyond dimensions to solve real problems.", category: "S3", status: "Waiting", domain: "Software" },
    { id: 6, name: "BlackList", lead: "M Chaitanya Pannegar", quote: "Defying limits and redefining boundaries.", category: "S3", status: "Waiting", domain: "Software" },

    { id: 7, name: "Code Yoddhas", lead: "Ishit Barman", quote: "Warriors of logic and guardians of innovation.", category: "S4", status: "Waiting", domain: "Software" },
    { id: 8, name: "The Algorithm Avengers", lead: "Param Patel", quote: "Assembling talent to conquer complexity.", category: "S4", status: "Waiting", domain: "Software" },

    { id: 9, name: "LEAVE IT TO US", lead: "Antony Fidel Castro A", quote: "Give us the challenge — we’ll deliver the solution.", category: "S5", status: "Waiting", domain: "Software" },
    { id: 10, name: "Shadow Dev", lead: "Mohammed Tahir", quote: "Working silently, delivering powerfully.", category: "S5", status: "Waiting", domain: "Software" },

    { id: 11, name: "X-or", lead: "Astha Rai", quote: "Different by design, determined by purpose.", category: "S6", status: "Waiting", domain: "Software" },
    { id: 12, name: "Mutex", lead: "Saksham Yadav", quote: "Unlocking synergy through coordination.", category: "S6", status: "Waiting", domain: "Software" },

    { id: 1, name: "Databaes", lead: "Srushti K", quote: "Organizing data, engineering destiny.", category: "H1", status: "Shortlisted", domain: "Hardware" },
    { id: 2, name: "VELOCITY FLYERS", lead: "Shreyas S N", quote: "Fast thinking, faster execution.", category: "H1", status: "Shortlisted", domain: "Hardware" },

    { id: 3, name: "Neural Net Ninjas", lead: "Sarang Sanjay", quote: "Precision in action, mastery in motion.", category: "H2", status: "Shortlisted", domain: "Hardware" },
    { id: 4, name: "CodeOps", lead: "V Manivardhan Reddy", quote: "Operation excellence through intelligent engineering.", category: "H2", status: "Shortlisted", domain: "Hardware" },
    { id: 5, name: "Titan core", lead: "Aashish Thakur", quote: "Strength at the core, resilience in the build.", category: "H2", status: "Shortlisted", domain: "Hardware" },

    { id: 6, name: "ElectroEdge", lead: "Aradhya Prakash", quote: "Sharpening electrical innovation with human ingenuity.", category: "H3", status: "Shortlisted", domain: "Hardware" },
    { id: 7, name: "Electronauts", lead: "Pragnya Srikanth Rao", quote: "Navigating circuits to discover possibilities.", category: "H3", status: "Shortlisted", domain: "Hardware" },
    { id: 8, name: "Code Wizards", lead: "Aakanksha K", quote: "Crafting magic from mathematics and logic.", category: "H3", status: "Shortlisted", domain: "Hardware" },
    { id: 9, name: "Questers", lead: "Surabhi R Nadig", quote: "On a journey to solve what others overlook.", category: "H3", status: "Shortlisted", domain: "Hardware" },
    { id: 10, name: "Invincible", lead: "Naveen Kumar T V", quote: "Our strength lies in persistence and preparation.", category: "H3", status: "Shortlisted", domain: "Hardware" },

    { id: 11, name: "Signotech", lead: "B Suraj", quote: "Leaving a signature of excellence in every build.", category: "H4", status: "Shortlisted", domain: "Hardware" },
    { id: 12, name: "Hardkode3.0", lead: "Abhay Krishna B", quote: "Hard-wired for problem-solving.", category: "H4", status: "Shortlisted", domain: "Hardware" },

    { id: 13, name: "Half Brain Cell", lead: "Varsha Lakshmi K", quote: "Creativity needs no overthinking — just courage.", category: "H5", status: "Shortlisted", domain: "Hardware" },
    { id: 14, name: "WiSH", lead: "Wamika Varada", quote: "Turning aspirations into achievements.", category: "H5", status: "Shortlisted", domain: "Hardware" },
    { id: 15, name: "forgeon2.0", lead: "Nishika R Reddy", quote: "Forging new paths through innovation.", category: "H5", status: "Shortlisted", domain: "Hardware" },
    { id: 16, name: "Crazzypeeps", lead: "Priyanka TR", quote: "Bold ideas drive bold breakthroughs.", category: "H5", status: "Shortlisted", domain: "Hardware" },

    { id: 17, name: "Windows12Devs", lead: "Kshiraja Nelapati", quote: "Building forward with futuristic vision.", category: "H6", status: "Shortlisted", domain: "Hardware" },
    { id: 18, name: "GENESIS", lead: "Hemanth S", quote: "Every great creation begins with a spark.", category: "H6", status: "Shortlisted", domain: "Hardware" },
      { id: 1, name: "Aura", lead: "Jayanth DN", quote: "", category: "H1", status: "Waiting", domain: "Hardware" },
    { id: 2, name: "PeaceOps", lead: "Keerthana gururaj", quote: "", category: "H1", status: "Waiting", domain: "Hardware" },

    // H2
    { id: 3, name: "Tech Titans", lead: "Rachit Jain", quote: "", category: "H2", status: "Waiting", domain: "Hardware" },
    { id: 4, name: "NexaTrace", lead: "Naga Venkata Akhilesh Chandluri", quote: "", category: "H2", status: "Waiting", domain: "Hardware" },

    // H3
    { id: 5, name: "Team InfraRed", lead: "Jiya Kulkarni", quote: "", category: "H3", status: "Waiting", domain: "Hardware" },
    { id: 6, name: "Innovastra", lead: "M Hasini", quote: "", category: "H3", status: "Waiting", domain: "Hardware" },

    // H4
    { id: 7, name: "ThunderStack", lead: "Jagruthi Reddy B", quote: "", category: "H4", status: "Waiting", domain: "Hardware" },
    { id: 8, name: "Circuit Masters", lead: "Sankarshan V sastry", quote: "", category: "H4", status: "Waiting", domain: "Hardware" },

    // H5
    { id: 9, name: "NextGen", lead: "Dayana B", quote: "", category: "H5", status: "Waiting", domain: "Hardware" },
    { id: 10, name: "PRIME", lead: "ASHWINI HADAGALI", quote: "", category: "H5", status: "Waiting", domain: "Hardware" },

    // H6
    { id: 11, name: "STASH Monarchs", lead: "Tharun Susri B S", quote: "", category: "H6", status: "Waiting", domain: "Hardware" },
     { id: 1, name: "The Quadrent", lead: "Manjula Rani", quote: "", category: "U2", status: "Shortlisted", domain: "Unisys" },
    { id: 2, name: "No code paradigm", lead: "Vinyas G M", quote: "", category: "U2", status: "Shortlisted", domain: "Unisys" },

    // U3
    { id: 3, name: "Forbidden Phishers", lead: "Shashank Pandey", quote: "", category: "U3", status: "Shortlisted", domain: "Unisys" },
    { id: 4, name: "INNOVCAMP", lead: "Nithin Naik R", quote: "", category: "U3", status: "Shortlisted", domain: "Unisys" },
    { id: 5, name: "CODEBREAKER5", lead: "Sidhartha NS", quote: "", category: "U3", status: "Shortlisted", domain: "Unisys" },

    // U4
    { id: 6, name: "GARUDA", lead: "Srijan U", quote: "", category: "U4", status: "Shortlisted", domain: "Unisys" },
    { id: 7, name: "Redbyte", lead: "Mansi Kalgudi", quote: "", category: "U4", status: "Shortlisted", domain: "Unisys" },
    { id: 8, name: "Run Time Terror", lead: "Pratyush Visu", quote: "", category: "U4", status: "Shortlisted", domain: "Unisys" },

    // U5
    { id: 9, name: "Mjolnir", lead: "Dheeksha N", quote: "", category: "U5", status: "Shortlisted", domain: "Unisys" },
    { id: 10, name: "MSN", lead: "Nithin J", quote: "", category: "U5", status: "Shortlisted", domain: "Unisys" },
    { id: 11, name: "Caffeine Crew", lead: "Thejaswini V Bhat", quote: "", category: "U5", status: "Shortlisted", domain: "Unisys" },
    { id: 12, name: "SlothX", lead: "Nuvvula Geethika", quote: "", category: "U5", status: "Shortlisted", domain: "Unisys" },

    // U6
    { id: 13, name: "Tesla_Curie", lead: "Abhiragini K", quote: "", category: "U6", status: "Shortlisted", domain: "Unisys" },
    { id: 14, name: "Team 269", lead: "Keerthi Narayan M V", quote: "", category: "U6", status: "Shortlisted", domain: "Unisys" },

    // U7
    { id: 15, name: "Infinity Devs", lead: "Sumit Srivastava", quote: "", category: "U7", status: "Shortlisted", domain: "Unisys" },
    { id: 16, name: "Prototype Pirates", lead: "Nipun Gupta", quote: "", category: "U7", status: "Shortlisted", domain: "Unisys" },
    { id: 17, name: "Tenet", lead: "Satvika Prashanth Hiremath", quote: "", category: "U7", status: "Shortlisted", domain: "Unisys" },

    // U8
    { id: 18, name: "Team 0/1", lead: "Sunder Gandhi Ningappa", quote: "", category: "U8", status: "Shortlisted", domain: "Unisys" },
    { id: 19, name: "LOLgorithms", lead: "Sushruth Kumar", quote: "", category: "U8", status: "Shortlisted", domain: "Unisys" },
    { id: 20, name: "Unified Cargo Exchange", lead: "V Nanda Kishore Naik", quote: "", category: "U8", status: "Shortlisted", domain: "Unisys" },
    { id: 100, name: "4Direction", lead: "Aman", quote: "", category: "U2", status: "Waiting", domain: "Unisys" },
    { id: 101, name: "Team Algorithm", lead: "Mustafa Joyabali Vora", quote: "", category: "U3", status: "Waiting", domain: "Unisys" },
    { id: 102, name: "Tech Dominators", lead: "Akhil", quote: "", category: "U4", status: "Waiting", domain: "Unisys" },
    { id: 103, name: "The 8th Question", lead: "Marmik Jain", quote: "", category: "U5", status: "Waiting", domain: "Unisys" },
    { id: 104, name: "tech titans", lead: "Aditya Kumar Bangre", quote: "", category: "U6", status: "Waiting", domain: "Unisys" },
    { id: 105, name: "Byte_Me", lead: "Shreyas Santosh Naik", quote: "", category: "U7", status: "Waiting", domain: "Unisys" },
    { id: 106, name: "Minus Zero", lead: "Kishan MN", quote: "", category: "U8", status: "Waiting", domain: "Unisys" }




];


export default hackersData;