import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card-box card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark">
                        <span className="visually-hidden">{source}</span>
                    </span>
                    <img className="card-img-top" src={!imageUrl ? "https://www.mca.org.uk/wp-content/themes/consultix/images/no-image-found-360x260.png" : imageUrl} alt='' />
                    <div className="card-body">
                        <h5 className="card-title"><strong>{title}</strong></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By <strong>{author ? author : "Unknown"}</strong> on <strong>{new Date(date).toGMTString()}</strong></small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="read-btn btn btn-dark">Read News &rarr;</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem