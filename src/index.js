import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class QuoteBox extends React.Component {
  render() {
    return (
      <div id="quote-box">
        <p id="text">{this.props.text}</p>
        <h2 id="author">{this.props.author}</h2>
        <div className="buttons">
          <button id="new-quote" onClick={this.props.handleClick}>
            New Quote
          </button>
          <a id="tweet-quote" href="https://www.twitter.com/intent/tweet" target="_blank">
            Tweet Quote
          </a>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.getQuote();
  }
  handleClick() {
    this.getQuote();
  }

  getQuote() {
    const url = "https://api.quotable.io/random";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          quote: data.content,
          author: data.author,
        });
      });
  }

  render() {
    const quote = this.state.quote;
    const author = this.state.author;
    return (
      <div className="main">
        <QuoteBox text={quote} author={author} handleClick={this.handleClick} />
      </div>
    );
  }
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
