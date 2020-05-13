import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import FilterForm from "./FilterForm";
import FriendCard from "./FriendCard";
import employees from "./employees.json"

class OmdbContainer extends Component {
  state = {
    employees: employees,
    search: ""

  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    if (!this.state.search) {
      console.log("empty");
    }
    else {
      event.preventDefault();
      let filteredArray = employees.filter(employee => employee.name === this.state.search);
      console.log(filteredArray);
      console.log(this.state.search);
      this.setState({
        employees: filteredArray
      });
    }
  };

  handleCheckBox = event => {
    console.log(event.target.value);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading="Employees">
              {this.state.employees.map(friend => (
                <FriendCard
                  removeFriend={this.removeFriend}
                  id={friend.id}
                  key={friend.id}
                  name={friend.name}
                  image={friend.image}
                  occupation={friend.occupation}
                  location={friend.location}
                />
              ))}

            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
            <br></br>
            <Card heading="Filter">
              <FilterForm
                handleCheckBox={this.handleCheckBox}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
