import './App.css';
import { Box } from "@mui/material"
import Dartboard from './components/DartBoard';
import Menu from './components/Menu';
import { Slides } from './components/Slides';

function App() {
  return (
    <Box sx={{ display: "flex" }} className="App">
      <Dartboard />
    </Box>
  );
}

export default App;
