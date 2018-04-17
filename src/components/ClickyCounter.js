import React from 'react';

class ClickyCounter extends React.Component {
  state = {
    count: 0
  };

  scorePoints = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

export default ClickyCounter;