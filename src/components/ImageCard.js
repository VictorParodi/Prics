import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', () => {
            console.log(this.imageRef.current.clientHeight);
        });
    }

    render() {
        let {description, urls} = this.props.image;

        return (
            <div>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.small}
                />
            </div>
        );
    }
}

export default ImageCard;