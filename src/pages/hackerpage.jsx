import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import hackersData from '../data/hackerdata';
import Footnote from '../components/Footnote';
import Navbar from '../components/Navbar';

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
                <div className="absolute -top-3 -left-3 bg-orange-600 text-white text-xs font-bold px-3 py-1 transform -rotate-6 shadow-lg z-10" style={{ fontFamily: 'Grotesk, sans-serif' }}>
                    Waiting List
                </div>
            )}

            {/* Category Tag */}
            <div className="absolute -top-4 -right-2 bg-red-600 text-white text-sm font-bold px-4 py-1 shadow-lg transform rotate-2" style={{ fontFamily: 'Grotesk, sans-serif' }}>
                {team.category}
            </div>

            <div className="mt-4">
                <h3 className="text-2xl font-bold text-red-600 mb-4 uppercase tracking-wider glow" style={{ fontFamily: 'Riccione, sans-serif' }}>
                    {team.name}
                </h3>

                <div className="mb-4">
                    <p className="text-gray-400 text-sm font-semibold" style={{ fontFamily: 'Grotesk, sans-serif' }}>Team Lead :</p>
                    <p className="text-white text-lg font-medium" style={{ fontFamily: 'Grotesk, sans-serif' }}>{team.lead}</p>
                </div>
            </div>

            <div className="mt-auto pt-4 border-t border-gray-900 flex justify-between items-end">
                <p className="text-gray-500 text-xs italic max-w-[70%]" style={{ fontFamily: 'Grotesk, sans-serif' }}>
                    "{team.quote}"
                </p>
                <span className="text-xs text-red-400 border border-red-900/50 px-2 py-1 rounded" style={{ fontFamily: 'Grotesk, sans-serif' }}>
                    {team.domain}
                </span>
            </div>

            {/* Corner decorations */}
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-red-600/50"></div>
            <div className="absolute top-0 left-0 w-2 h-2 bg-red-600/50"></div>
        </div>
    );
};

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
        <div className="min-h-screen bg-black text-white pt-24 pb-12 relative overflow-hidden" style={{ fontFamily: 'Grotesk, sans-serif' }}>
            {/* Background Elements */}
            <Navbar />
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black"></div>
                <div className="particles opacity-30">
                    {/* Simple CSS particles can be added here or reused from index.css if available */}
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-widest text-white" style={{ fontFamily: 'offbit, sans-serif' }}>
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
                                    style={{ fontFamily: 'Riccione, sans-serif' }}
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
                            style={{ fontFamily: 'Grotesk, sans-serif' }}
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
                                fontFamily: 'offbit, sans-serif',
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
                        <p className="text-xl" style={{ fontFamily: 'Grotesk, sans-serif' }}>No {activeDomain} teams found matching your criteria.</p>
                    </div>
                )}
            </div>

            <div className="mt-20">
                <Footnote />
            </div>
        </div>
    );
};

export default HackersPage;