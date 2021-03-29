import { COLORS } from "./colors";
import { useBackgroundColor } from "./hooks/useBackgroundColor";
import { Awards } from "./Sections/Awards";
import { Header } from "./Sections/Header";
import { JobExperience } from "./Sections/JobExperience";
import { Overview } from "./Sections/Overview";
import { School } from "./Sections/School";
import { Skills } from "./Sections/Skills";

function App() {
  useBackgroundColor(COLORS.OFF_WHITE);
  return (
    <div id="pdf">
      <Header />
      <Overview />
      <JobExperience />
      <Skills />
      <School />
      <Awards />
    </div>
  );
}

export default App;
