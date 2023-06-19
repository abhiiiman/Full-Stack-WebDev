import React, { Component } from 'react'
import NewsItem from './NewsItem'
import SpinLoader from './SpinLoader';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4b7a1b7e835c4f98bec0b3a4fc8051e9&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }

    handleNextClick = async () => {
        console.log("Next Page");
        if (this.state.page > this.state.totalResults / this.props.pageSize) {
            // do nothing.
        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4b7a1b7e835c4f98bec0b3a4fc8051e9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ articles: parsedData.articles })
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    handlePrevClick = async () => {
        console.log("Prev Page")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4b7a1b7e835c4f98bec0b3a4fc8051e9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    render() {
        return (
            <div className="container my-4">
                <h1 className='text-center'>Trending Now - INDIA</h1>
                {this.state.loading && <SpinLoader />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                    <div className="container my-3 mx-3 d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Prev</button>
                        <button disabled={this.state.page > this.state.totalResults / this.props.pageSize} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News