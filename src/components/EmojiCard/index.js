// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {EmojiDetails, clickEmoji} = props
  const {emojiName, id, emojiUrl} = EmojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }
  return (
    <li className="emoji-item">
      <button className="emoji-btn" type="button" onClick={onClickEmojiCard}>
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}

export default EmojiCard
