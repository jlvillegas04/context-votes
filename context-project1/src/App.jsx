import { VoteProvider } from "./components/VoteContext";
import Candidate from "./components/Candidate";
import TotalVotes from "./components/TotalVotes";
import IndividualVotes from "./components/IndividualVotes";
import Filter from "./components/Filter";

function App() {
  return (
    <VoteProvider>
      <div className="container">
        <h1 className="header">Vote System</h1>
        <div className="candidate-container">
          <Candidate
            id={1}
            name="Candidate 1"
            className="candidate"
            img="https://petcostumecenter.com/wp-content/uploads/2020/05/580413_PS_PAW_BILL_SUIT-scaled.jpg"
          />
          <Candidate
            id={2}
            name="Candidate 2"
            className="candidate"
            img="https://petcostumecenter.com/wp-content/uploads/2020/05/580413_PS_PAW_BILL_SUIT-scaled.jpg"
          />
          <Candidate
            id={3}
            name="Candidate 3"
            className="candidate"
            img="https://petcostumecenter.com/wp-content/uploads/2020/05/580413_PS_PAW_BILL_SUIT-scaled.jpg"
          />
          <Candidate
            id={4}
            name="Candidate 4"
            className="candidate"
            img="https://petcostumecenter.com/wp-content/uploads/2020/05/580413_PS_PAW_BILL_SUIT-scaled.jpg"
          />
        </div>
        <TotalVotes className="total-votes" />
        <IndividualVotes className="individual-votes" />
        <Filter className="filter" />
      </div>
    </VoteProvider>
  );
}

export default App;
