import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ReviewImage01 from "../../assets/c1.jpg";
import ReviewImage02 from "../../assets/c2.jpg";
import ReviewItem from "./ReviewItem";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

export default function BriefSlider() {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass="item"
        >
            <ReviewItem image={ReviewImage01} name="Joao Maria" role="Python developer" />
            <ReviewItem image={ReviewImage02} name="Maria" role="Python developer" />
            <ReviewItem image={ReviewImage01} name="Maria Joao" role="Python developer" />
            <ReviewItem image={ReviewImage01} name="Joao" role="Python developer" />
            <ReviewItem image={ReviewImage02} name="Maria" role="Python developer" />
            <ReviewItem image={ReviewImage01} name="Maria Joao" role="Python developer" />
            <ReviewItem image={ReviewImage02} name="Joao Maria" role="Python developer" />

        </Carousel >
    );
};