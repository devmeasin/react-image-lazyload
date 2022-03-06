import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ({ images_src }) => {
    return (
        <>
            <div className="card_image">
                <LazyLoadImage placeholderSrc="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png" src={images_src} effect="blur" height="100%" width="100%" alt="Image" />
            </div>
        </>
    )
}

export default Card