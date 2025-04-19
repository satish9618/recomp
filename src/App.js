import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './Homeview';
import Workout from './Workout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/workout" element={<Workout />} />
      </Routes>
    </Router>
  );
}

export default App;