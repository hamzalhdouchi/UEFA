import React from 'react';

const MatchDetails = ({ match, matchDetails }) => {
  return (
    <div className="bg-blue-800 rounded-lg p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="flex flex-col items-center md:items-end text-center md:text-right mb-4 md:mb-0">
          <div className="w-16 h-16 mb-2 bg-gray-700 rounded-full"></div>
          <h2 className="text-xl font-bold">{match.homeTeam.name}</h2>
        </div>
        
        <div className="flex flex-col items-center my-4 md:my-0">
          <div className="text-3xl font-bold bg-blue-900 px-6 py-3 rounded">
            {match.homeScore.display} - {match.awayScore.display}
          </div>
          <div className="mt-2 text-sm">
            {new Date(match.startTimestamp * 1000).toLocaleDateString()}
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-16 h-16 mb-2 bg-gray-700 rounded-full"></div>
          <h2 className="text-xl font-bold">{match.awayTeam.name}</h2>
        </div>
      </div>
      
      <div className="border-t border-blue-700 pt-4">
        <h3 className="text-xl font-bold mb-4">Match Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Stadium</h4>
            <p>{match.venue?.name || "Stadium information unavailable"}</p>
          </div>
          
          <div>
            <h4 className="font-semibold">Referee</h4>
            <p>{matchDetails?.referee?.name || "Information not available"}</p>
          </div>
        </div>
      </div>
      
      {matchDetails?.manOfTheMatch && (
        <div className="mt-4 bg-blue-700 p-4 rounded">
          <h3 className="text-lg font-bold mb-2">Man of the Match</h3>
          <div className="flex items-center">
            <div className="w-12 h-12 mr-3 bg-gray-600 rounded-full"></div>
            <div>
              <h4 className="font-bold">{matchDetails.manOfTheMatch.name}</h4>
              <p className="text-sm">{matchDetails.manOfTheMatch.team}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchDetails;