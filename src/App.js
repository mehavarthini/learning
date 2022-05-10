import Login from './learningPages/Login.js';
import './CSS/Login.css'
function App() {
  return (
    <>
    
    <div className='split left'>
      <div className='middle'>
        <p class='test'>Welcome to <br/><span style={njh}>
                Crystal Delta </span><br/>E-learning</p>
      </div>
    </div>
    <div className='split right'>
    <div className='midd'>
        <Login/>
      </div>
    </div>
    </>
  );
}

export default App;

const njh={
  color:'#996600'
}