/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import './index.css'

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {isGameInProgress: true, TopScore: 0, clickEmojiList: []}

  resetGame = () => {
    this.setState({clickEmojiList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickEmojiList} = this.state
    const isWon = clickEmojiList.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickEmojiList.length}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {TopScore} = this.state
    let newTopScore = TopScore
    if (currentScore > TopScore) {
      newTopScore = currentScore
    }
    this.setState({TopScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickEmojiList} = this.state
    const isEmojiPresent = clickEmojiList.includes(id)
    const clickedEmojisLength = clickEmojiList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickEmojiList: [...prevState.clickEmojiList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map(emojisObject => (
          <EmojiCard
            key={emojisObject.id}
            EmojiDetails={emojisObject}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickEmojiList, isGameInProgress, TopScore} = this.state
    return (
      <div className="app-container">
        <NavBar
          currentScore={clickEmojiList.length}
          isGameInProgress={isGameInProgress}
          TopScore={TopScore}
        />
        <div className="emojis-game-body">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
