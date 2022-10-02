import React from "react";
import { Link } from "react-router-dom";
import "./PricingStyles.css";

class Pricing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {},
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://nasa-space-app-api.herokuapp.com/all")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.Data,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );
    return (
      <div className="pricing">
        <div className="card-container">
          {items.map((item) => (
            <ol key={item.id}>
              <div className="card">
                <h3>- {item.title} -</h3>
                <span className="bar"></span>
                <p className="btc">{item.mode}</p>
                <p>{item.theme}</p>
                <p>- Views -</p>
                <p>- Featured -</p>
                <p>- Private Quarters -</p>
                <Link to={item.link} className="btn">
                  Course
                </Link>
              </div>
              {/* Title: , Desc: , Theme:{item.Theme}
            Language: {item.Language}
            Date: {item.Date}
            Mode: {item.Mode} */}
            </ol>
          ))}
        </div>
      </div>
    );
  }
}

export default Pricing;
