import React from 'react';

const MatchCard = ({ match, onViewDetails }) => {
  return (
    <div className="bg-blue-800 rounded-lg p-4 mb-4 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <div className="w-16 h-16 mb-2 bg-gray-700 rounded-full"></div>
          <h2 className="text-lg font-bold">{match.homeTeam.name}</h2>
        </div>
        
        <div className="flex flex-col items-center my-4 md:my-0">
          <div className="text-2xl font-bold bg-blue-900 px-4 py-2 rounded">
            {match.homeScore.display} - {match.awayScore.display}
          </div>
          <div className="mt-2 text-sm">
            {new Date(match.startTimestamp * 1000).toLocaleDateString()}
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-2 bg-gray-700 rounded-full"></div>
          <h2 className="text-lg font-bold">{match.awayTeam.name}</h2>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <button 
          onClick={() => onViewDetails(match.id)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default MatchCard;