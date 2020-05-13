import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import FilterForm from "./FilterForm";
import EmployeeCard from "./EmployeeCard";
import employees from "./employees.json"

class EmployeeDirectory extends Component {
  state = {
    employees: employees,
    search: "",
    occupation: "Any",
    location: "Any"
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.id;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    if (this.state.search) {
      event.preventDefault();
      let filteredArray = employees.filter(employee => employee.name === this.state.search);
      this.setState({
        employees: filteredArray
      });
    }
  };

  handleFilterChange = event => {
    const name = event.target.id;
    const value = event.target.value
    this.setState({
      [name]: value
    });
  }

  handleFilter = event => {
    event.preventDefault();
    if (this.state.occupation !== "Any") {
      let firstFilteredArray = employees.filter(employee => employee.occupation === this.state.occupation);
      if (this.state.location !== "Any") {
        let filteredArray = firstFilteredArray.filter(employee => employee.location === this.state.location);
        this.setState({
          employees: filteredArray,
          frontEndDevelopers: true
        });
      } else {
        this.setState({
          employees: firstFilteredArray,
          frontEndDevelopers: true
        });
      }
    } else if (this.state.location !== "Any") {
      let filteredArray = employees.filter(employee => employee.location === this.state.location);
      this.setState({
        employees: filteredArray,
        frontEndDevelopers: true
      });
    } else {
      this.setState({
        employees: employees,
        frontEndDevelopers: true
      });
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading="Employees">
              {this.state.employees.map(friend => (
                <EmployeeCard
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
                handleFilterChange={this.handleFilterChange}
                handleFilter={this.handleFilter}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeDirectory;
