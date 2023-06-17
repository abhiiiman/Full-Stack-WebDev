import React, { Component } from 'react'
import NewsItem from './NewsItem'

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
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4b7a1b7e835c4f98bec0b3a4fc8051e9&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }

    handleNextClick = async () => {
        console.log("Next Page");
        if (this.state.page > this.state.totalResults/20){
            // do nothing.
        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4b7a1b7e835c4f98bec0b3a4fc8051e9&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ articles: parsedData.articles })
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }

    handlePrevClick = async () => {
        console.log("Prev Page")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4b7a1b7e835c4f98bec0b3a4fc8051e9&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    render() {
        return (
            <div className="container my-4">
                <h1>Trending Now</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                    <div className="container my-3 mx-3 d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Prev</button>
                        <button type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News