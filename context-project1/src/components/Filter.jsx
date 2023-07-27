import { useState } from "react";
import { useVoteContext } from "./VoteContext";
import PropTypes from "prop-types";

function Filter() {
  const { candidates } = useVoteContext();
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [showPercentage, setShowPercentage] = useState(false);

  const getTotalVotes = () => {
    return candidates.reduce((total, candidate) => total + candidate.votes, 0);
  };

  const handleCandidateChange = (event) => {
    setSelectedCandidate(event.target.value);
  };

  const toggleShowPercentage = () => {
    setShowPercentage((prev) => !prev);
  };

  return (
    <div>
      <h2>Filter Results</h2>
      <label htmlFor="candidate-select">Select Candidate: </label>
      <select
        id="candidate-select"
        value={selectedCandidate}
        onChange={handleCandidateChange}
      >
        <option value="">All Candidates</option>
        {candidates.map((candidate) => (
          <option key={candidate.id} value={candidate.id}>
            {candidate.name}
          </option>
        ))}
      </select>

      <button onClick={toggleShowPercentage}>
        Show {showPercentage ? "Numbers" : "Percentage"}
      </button>

      <ul>
        {candidates.map((candidate) => {
          if (
            selectedCandidate === "" ||
            parseInt(selectedCandidate) === candidate.id
          ) {
            return (
              <li key={candidate.id}>
                {candidate.name}:{" "}
                {showPercentage
                  ? `${((candidate.votes * 100) / getTotalVotes()).toFixed(1)}%`
                  : candidate.votes}
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}

Filter.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Filter;
