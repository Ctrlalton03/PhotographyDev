import { useState, useEffect, use } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import '../Css/PhotoSlider.css'; 
import CityBuilding from '../Images/CityBuilding.jpg';
import Library from '../Images/Library.jpg'; 
import Castle from '../Images/Castle.jpg';
import Laura from '../Images/Laura.jpg';

const PhotoSlider = () => {


    const photos = [
        {
            id: 1,
            picture: CityBuilding,
            alt: 'City Building',
            title: 'City Building',
            description: 'A beautiful city building with modern architecture.',
        },
        {
            id: 2,
            picture: Library,
            alt: 'Library',
            title: 'Library',
            description: 'A beautiful city building with modern architecture.',
        },
        {
            id: 2,
            picture: Castle,
            alt: 'Library',
            title: 'Castle',
            description: 'A beautiful city building with modern architecture.',
        },
        {
            id: 2,
            picture: Laura,
            alt: 'Library',
            title: 'Laura Pole',
            description: 'A beautiful city building with modern architecture.',
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [slideDirection, setSlideDirection] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);



    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    };


    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            goToNext();
        }, 5000);

        return () => clearInterval(interval);

    }, [currentIndex, isAutoPlaying]);


    useEffect(() =>{
        const handleKeyPressed = (e) =>{
            if (e.key === 'ArrowLeft') goToPrevious();
            if (e.key === 'ArrowRight') goToNext();
            if (e.key === ' ') {
                e.preventDefault();
                setIsAutoPlay((prev) => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyPressed);
        return () => window.removeEventListener('keydown', handleKeyPressed);
    }, []);

    return(
        <>
            <div className="photo-slider">
                <div className="slider-content">
                    <img src={photos[currentIndex].picture} alt={photos[currentIndex].alt} />
                    <h2>{photos[currentIndex].title}</h2>
                    <p>{photos[currentIndex].description}</p>
                </div>
                <div className="slider-controls">
                    <button onClick={goToPrevious} className="slider-button">
                        <HiChevronLeft />
                    </button>
                    <button onClick={goToNext} className="slider-button">
                        <HiChevronRight />
                    </button>

                </div>

            </div>

        </>
    )
}

export default PhotoSlider;