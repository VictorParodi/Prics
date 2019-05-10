import React from 'react';

class ImageCard extends React.Component {
    render() {
        let {description, urls} = this.props.image;

        return (
            <div>
                <img
                    alt={description}
                    src={urls.small}
                />
            </div>
        );
    }
}

export default ImageCard;