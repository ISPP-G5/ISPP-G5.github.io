import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import '../styles/styles.css';
import LandingPage from '../LandingPage/LandingPage';
import TeamPage from '../LandingPage/TeamPage';
import MilestonePage from '../LandingPage/MilestonePage';

function App() {
  return (
    <Router>
      <Routes>
            
            <Route path="/" exact={true} element={<LandingPage />} />
            <Route path="/equipo" exact={true} element={<TeamPage />} />
            <Route path="/hitos" exact={true} element={<MilestonePage />} />

      </Routes>
    </Router>
  );
}
export default App;