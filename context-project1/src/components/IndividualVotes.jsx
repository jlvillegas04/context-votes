import { useState } from "react";
import { useVoteContext } from "./VoteContext";

function IndividualVotes() {
  const { candidates } = useVoteContext();
  const [showPercentage, setShowPercentage] = useState(false);

  const getTotalVotes = () => {
    return candidates.reduce((total, candidate) => total + candidate.votes, 0);
  };

  const toggleShowPercentage = () => {
    setShowPercentage((prev) => !prev);
  };

  return (
    <div>
      <h2>Individual Results</h2>
      <button onClick={toggleShowPercentage}>
        Show {showPercentage ? "Numbers" : "Percentage"}
      </button>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            {candidate.name}:{" "}
            {showPercentage
              ? `${((candidate.votes * 100) / getTotalVotes()).toFixed(1)}%`
              : candidate.votes}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndividualVotes;
