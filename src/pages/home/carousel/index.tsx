import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import HomeImg from './escritorio.jpg'
import HomeImg2 from './escritorio2.jpg'
import HomeImg3 from './escritorio3.jpg'

const images = [HomeImg, HomeImg2, HomeImg3]

function HomeCarousel() {
    return (
      <Carousel
        className="h_bg-image order-1 order-lg-2"
        autoPlay
        infiniteLoop
        dynamicHeight
        stopOnHover={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        {images.map(image => (
          <div className="h-100 max-h-screen" key={image}>
            <img src={image} />
          </div>
        ))}
      </Carousel>
    );
}

export default HomeCarousel;
