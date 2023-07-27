import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const VoteContext = createContext();

export function useVoteContext() {
  return useContext(VoteContext);
}

export function VoteProvider({ children }) {
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "Candidate 1",
      votes: 0,
      img: "https://petcostumecenter.com/wp-content/uploads/2020/05/580413_PS_PAW_BILL_SUIT-scaled.jpg",
    },
    {
      id: 2,
      name: "Candidate 2",
      votes: 0,
      img: "https://petcostumecenter.com/wp-content/uploads/2020/05/580413_PS_PAW_BILL_SUIT-scaled.jpg",
    },
    {
      id: 3,
      name: "Candidate 3",
      votes: 0,
      img: "https://petcostumecenter.com/wp-content/uploads/2020/05/580413_PS_PAW_BILL_SUIT-scaled.jpg",
    },
    {
      id: 4,
      name: "Candidate 4",
      votes: 0,
      img: "https://petcostumecenter.com/wp-content/uploads/2020/05/580413_PS_PAW_BILL_SUIT-scaled.jpg",
    },
  ]);

  const addVote = (idCandidate) => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === idCandidate
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      )
    );
  };

  return (
    <VoteContext.Provider value={{ candidates, addVote }}>
      {children}
    </VoteContext.Provider>
  );
}

VoteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
