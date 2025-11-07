import React from 'react';

export default function TeamPage() {
  const team = [
    {
      id: 1,
      name: "Alex Chen",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Sarah Martinez",
      position: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Michael Park",
      position: "Lead Designer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Emma Wilson",
      position: "Head of Marketing",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      name: "David Kumar",
      position: "Engineering Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      name: "Lisa Anderson",
      position: "Product Manager",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">
          Our <span className="text-red-600">Team</span>
        </h1>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Meet the talented people behind our success
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div 
              key={member.id} 
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-red-600 text-sm">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}