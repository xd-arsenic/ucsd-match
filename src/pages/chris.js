import TinderCard from 'react-tinder-card'
import { useState } from 'react'
import ChatContainer from '../components/ChatContainer'

const Dashboard = () => {

    const characters = [
        {
            name: 'Richard Hendricks',
            url: 'https://i.imgur.com/Q9WPlWA.jpeg'
        },
        {
            name: 'Erlich Bachman',
            url: 'https://i.imgur.com/MWAcQRM.jpeg'
        },
        {
            name: 'Monica Hall',
            url: 'https://i.imgur.com/Q9WPlWA.jpeg'
        },
        {
            name: 'Jared Dunn',
            url: 'https://i.imgur.com/MWAcQRM.jpeg'
        },
        {
            name: 'Dinesh Chugtai',
            url: 'https://i.imgur.com/MWAcQRM.jpeg'
        }
    ]

    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div className="dashboard">
            <ChatContainer/>
            <div className="swiper-container">
                <div className="card-container">
                    {characters.map((character) =>
                        <TinderCard
                            className='swipe'
                            key={character.name}
                            onSwipe={(dir) => swiped(dir, character.name)}
                            onCardLeftScreen={() => outOfFrame(character.name)}>
                            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                                <div className="card-name">
                                    <h3>{character.name}</h3>
                                </div>
                            </div>
                        </TinderCard>
                    )}

                    <div className="swipe-info">
                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard