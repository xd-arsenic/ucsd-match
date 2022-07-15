import ChatHeader from "./ChatHeader"
import ChatDisplay from "./ChatDisplay"
import MatchesDisplay from "./MathcesDisplay"

const ChatContainer = () => {
    return ( 
        <div className="chat-container"> 
            <ChatHeader/>
 
            <div>
                <button className="option">Matches</button>
                <button className="option">Chat</button>
            </div>


            <ChatDisplay/>

        </div> 
    )
}

export default ChatContainer