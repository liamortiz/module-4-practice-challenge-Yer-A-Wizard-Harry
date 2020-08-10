import React from "react";

class StorySettings extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.newWizard.value;
    const house = form.newWizardHouse.value;

    if (name && house) {
      this.props.addWizard({ name, house });
      form.reset();
    }
  }

  handleChecked = (event) => {
    const radio = event.target;
    radio.checked = true;
    this.props.filterWizards(radio.value)
  }

  render() {
    return (
      <div className="StorySettings">
        <form onSubmit={this.handleSubmit}>
          <div>
            <h3>Add a new Wizard</h3>
          </div>
          <input type="text" name="newWizard" />
          <select name="newWizardHouse">
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
          <input type="submit" />
        </form>
        <form>
          <div>
            <h3>Filter By House</h3>
          </div>
          <input onChange = { this.handleChecked } name="selectedHouse" type="radio" value="All" />All
          <input onChange = { this.handleChecked } name="selectedHouse" type="radio" value="Gryffindor" />Gryffindor
          <input onChange = { this.handleChecked } name="selectedHouse" type="radio" value="Slytherin" />Slytherin
          <input onChange = { this.handleChecked } name="selectedHouse" type="radio" value="Hufflepuff" />Hufflepuff
          <input onChange = { this.handleChecked } name="selectedHouse" type="radio" value="Ravenclaw" />Ravenclaw
        </form>
      </div>
    );   
  }
}

export default StorySettings;
