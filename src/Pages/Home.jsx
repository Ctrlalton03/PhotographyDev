import { Link } from 'react-router-dom'
import '../Css/Home.css'
import homeImage from '../Images/DSC05809.jpg'

const Home = () => {
    return (
        <>
        <div className='home-container'>
            <div className='home-content'>
                <h1>Alton <br /> Simpson</h1>
                <h3>Capturing Moments, Creating Stories.</h3>
            </div>
            <div className='home-image'>
                <img src={homeImage} alt="home-image" />
            </div>
            <div className='social-buttons-container'>
                <div className='social-container'>
                    <button className='social-button'><Link to="/Gallery">View Instagram</Link></button>
                    <button className='social-button'><Link to="/Gallery">View Instagram</Link></button>
                </div>
                <button className='gallery-button'><Link to="/Gallery">View Gallery</Link></button>
            </div>
        </div>
        <div className='home-container-2'>
            <div className='home-content-2'>
                <h1>Framing Life’s Beauty, One Shot at a Time</h1>
            </div>
            <div className="home-text-2">
                <div className='Text-container-2'>
                    <p>
                        Hey, I’m <b>Alton Simpson</b>, a photographer who loves capturing the world as it is, 
                        one candid moment at a time. Whether it’s the depth in a portrait, the energy 
                        of the streets, or the sleek curves of a car. Photography,
                    </p>
                    <img className='Profile-Img'/>    
                </div>
                <p>
                    for me, is all about the fun, the thrill of freezing a fleeting moment, the 
                    excitement of finding beauty in the unexpected. Even though I’ve only been doing this for 
                    a few months, every shot is a new adventure, and I’m always pushing myself to see the world differently. 
                    Let’s capture something real, something meaningful, one frame at a time.
                </p>

                <div className='Link-to-other-work'>
                    <h2> 
                        Want to collaborate or see more of my 
                        work? <Link to="/Gallery">Check out my Portfolio</Link> or <Link to="/">Lets Connect!</Link>
                    </h2>
                </div>
            </div>

            
        </div>
        <div className='home-container-3'>
            <h1>Capturing Moments: <br /> A Glimpse into my work</h1>
            <div className='home-content-3'>
                <img className='home-image-3' alt="home-image" />
                <div className='home-text-3'>
                    <p>Date</p>
                    <p>Location</p>
                </div>
                <button className='gallery-button-2'><Link to="/Gallery">View My Portfolio</Link></button>
            </div>
            
        </div>
        </>
    )
}

export default Home;