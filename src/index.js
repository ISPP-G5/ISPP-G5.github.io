import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import './styles.css';

import LandingPage from './LandingPage';
import TeamPage from './TeamPage';
import MilestonesPage from './MilestonePage';

function App() {
  return (
    <Router>
      <Routes>
            <Route path="/" exact={true} element={<LandingPage />} />
            <Route path="/equipo" exact={true} element={<TeamPage />} />
            <Route path="/hito" exact={true} element={<MilestonesPage />} />

            </Routes>
    </Router>
  );
}
export default App;