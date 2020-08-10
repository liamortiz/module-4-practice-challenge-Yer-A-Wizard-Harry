import React, { Component } from "react";

import StorySettings from "./StorySettings";
import WizardList from "./WizardList";
import "./App.css";

const baseURL = "http://hp-api.herokuapp.com/api/characters/students";

class App extends Component {

  state = {wizards: [], filteredWizards: []}

  componentDidMount() {
    fetch(baseURL).then((resp) => resp.json())
      .then((wizards) => this.setState({ wizards: wizards, filteredWizards: wizards}))
  }

  addWizard = (wizard) => {
    this.setState({
      wizards: [...this.state.wizards, wizard],
    });
  }

  filterWizards = (house) => {
    if (house !== 'All') {
      const filteredWizards = this.state.wizards.filter((wizzard) => wizzard.house === house)
      this.setState({ filteredWizards: filteredWizards })
    } else {
      this.setState({ filteredWizards: this.state.wizards })
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h2>Harry Potter Fan Fiction Story Creator</h2>
        <StorySettings addWizard = { this.addWizard } filterWizards = { this.filterWizards }/>
        <WizardList wizards = { this.state.filteredWizards } />
      </div>
    );
  }
}

export default App;
