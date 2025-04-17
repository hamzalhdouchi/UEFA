import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useMatchStore from "@/store/matchStore";
import MatchList from "@/components/MatchList";
import Pagination from "@/components/Pagination";
import Header from "@/components/Header";

export default function Home() {
  const router = useRouter();
  const { matches, currentPage, fetchMatches, setCurrentPage, loading, error } = useMatchStore();
  
  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  // Matches per page
  const matchesPerPage = 2;
  
  // Calculate pagination
  const totalPages = Math.ceil(matches.length / matchesPerPage);
  const startIndex = (currentPage - 1) * matchesPerPage;
  const endIndex = startIndex + matchesPerPage;
  const currentMatches = matches.slice(startIndex, endIndex);
  
  const handleViewDetails = (matchId) => {
    router.push(`/match/${matchId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">UEFA Champions League Quarter-Finals 2024/2025</h1>
        
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        
        {error && (
          <div className="bg-red-500 text-white p-4 rounded-md mb-6">
            Error loading matches: {error}
          </div>
        )}
        
        {!loading && !error && (
          <>
            <MatchList matches={currentMatches} onViewDetails={handleViewDetails} />
            
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </main>
      
      <footer className="py-6 text-center text-gray-300 mt-12 border-t border-blue-800">
        <p>&copy; 2025 UEFA Champions League Results</p>
      </footer>
    </div>
  );
}