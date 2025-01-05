import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/imageCarousel.css";

const ImageCarousel = ({ images, projName }) => {
    const settings = {
        dots: false, // Disable dots below the carousel
        fade: true, // Enable fade effect
        infinite: true, // Infinite scrolling
        speed: 1000, // Transition speed
        slidesToShow: 1, // One slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        arrows: false, // Disable left/right arrows
        autoplay: true, // Automatically transition slides
        autoplaySpeed: 10000, // Time between transitions
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div key={idx} className="carousel-slide">
                        <div className="image-wrapper">
                            <img
                                src={img.path}
                                alt={`${projName} ${img.alt}`}
                                className="carousel-image"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;
