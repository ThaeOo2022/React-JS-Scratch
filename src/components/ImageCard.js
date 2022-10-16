import React from "react";
class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

  //  componentDidMount() {
        //console.log(this.imageref);
     //   this.imageref.current.addEventListener('load', this.setSpans);
  //  }
  componentDidMount() {
    console.log(this.imageRef.current.clientHeight);
   this.imageRef.current.addEventListener('load', this.setSpans);
  }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    }
    render() {
        const { description, urls } = this.props.image;
        return (
            <>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </>
        );
    }
}

export default ImageCard;


/*import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;*/
