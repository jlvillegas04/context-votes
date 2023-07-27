import { useVoteContext } from "./VoteContext";
import PropTypes from "prop-types";

function Candidate({ id, name, img }) {
  const { addVote } = useVoteContext();

  const handleVoteClick = () => {
    addVote(id);
  };

  return (
    <div>
      <h3>{name}</h3>
      <img src={img} alt={name} style={{ width: "200px", height: "200px" }} />
      <button onClick={handleVoteClick}>Vote</button>
    </div>
  );
}

Candidate.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Candidate;
