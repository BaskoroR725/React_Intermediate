
import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import ScoreKeeperPlus from './ScoreKeeperPlus'

function App() {
  return (
    <>
    {/*   <h1>State Demo</h1>
      <Counter/>
      <Dumbo />
      <ScoreKeeper/> */}
      {/* <EmojiClicker/> */}
      <ScoreKeeperPlus numPlayer={6} target={6}/>
    </>
  )
}

export default App
