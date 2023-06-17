import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card mx-3" style={{ width: "20rem" }}>
                    <img className="card-img-top" src={!imageUrl ?"https://www.mca.org.uk/wp-content/themes/consultix/images/no-image-found-360x260.png":imageUrl} alt='' />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={newsUrl} target = "_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem


// image not found error.
// https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg