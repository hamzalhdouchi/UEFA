import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MatchCard from '../components/MatchCard';
import Pagination from '../components/Pagination';
import useMatchStore from '../matchStore';

const HomePage = () => {
  const navigate = useNavigate();
  const { matches, currentPage, fetchMatches, setCurrentPage, loading, error } = useMatchStore();
  
  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  // Pagination
  const matchesPerPage = 2;
  const totalPages = Math.ceil(matches.length / matchesPerPage);
  const currentMatches = matches.slice(
    (currentPage - 1) * matchesPerPage, 
    currentPage * matchesPerPage
  );
  
  const handleViewDetails = (matchId) => {
    navigate(`/match/${matchId}`);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center">UEFA Champions League Quarter-Finals 2024/2025</h1>
      
      {loading && (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      {error && (
        <div className="bg-red-500 p-4 rounded mb-4">
          {error}
        </div>
      )}
      
      {!loading && !error && (
        <>
          {currentMatches.map(match => (
            <MatchCard 
              key={match.id} 
              match={match} 
              onViewDetails={handleViewDetails} 
            />
          ))}
          
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={setCurrentPage} 
          />
        </>
      )}
    </>
  );
};

export default HomePage;