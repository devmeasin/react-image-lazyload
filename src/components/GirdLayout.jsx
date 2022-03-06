import React from 'react';
import Card from './Card';

export const GirdLayout = ({ images }) => {

    const { urls } = images;
    return (

        <div className="col-md-4 col-sm-12">
            <Card images_src={urls?.regular} />
        </div>

    )
}
