// Write your code here.
import './index.css'

const Navbar = props => {
  const {currentScore, TopScore, isGameInProgress} = props
  return (
    <div className="nav-bar-container">
      <div className="title-with-logo-container">
        <div className="logo-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="logo-image"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="score-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {TopScore}</p>
          </div>
        )}
      </div>
    </div>
  )
}
export default Navbar
