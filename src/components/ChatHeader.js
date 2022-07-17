const ChatHeader = ({ user }) => {

    function hideDiv() {
        var htmlShow = document.getElementByClassName("chat-container");
        if (htmlShow.style.display === "none") {
          htmlShow.style.display = "block";
        } else {
          htmlShow.style.display = "none";
        }
        console.log('yes')
      }

    return ( 
        <div className="chat-container-header"> 
            <div className="profile">
                <div className="img-container">
                    <img src=""/>
                </div>
                <h3>{user!=null ?user.full_name : "Loading data..."}</h3>
            </div>
            <i className="log-out-icon" onClick={hideDiv}>⮐</i>
        </div> 
    )
}

export default ChatHeader