import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClickyCounter from "./components/ClickyCounter.js"
import ClickyCard from "./components/ClickyCard";
import clickyCardDetails from "./clickyCardDetails.json";

class App extends React.Component {
  state = {
    clickyCardDetails,
    score: 0, // ClickyCounter.state.count
  };

  render() {
    return (
      <div>
        <Navbar score={0 || this.state.score} />
        <div className="container">
          <Wrapper>
            {this.state.clickyCardDetails.map(cardDeets => (
              <ClickyCard
                id={cardDeets.id}
                key={cardDeets.id}
                name={cardDeets.name}
                image={cardDeets.image}
              />
            ))}
          </Wrapper>
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;