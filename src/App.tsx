import { Header } from "./Sections/Header";
import { JobExperience } from "./Sections/JobExperience";
import { Overview } from "./Sections/Overview";

function App() {
  return (
    <div id="pdf">
      <Header />
      <Overview />
      <JobExperience />
    </div>
  );
}

export default App;
