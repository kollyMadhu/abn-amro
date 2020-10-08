import React, { Component } from "react";
import "../../styles/styles.css";
import { withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      searchVal: e.target.value,
    });
  };
  handleClick = () => {
    if (this.state.searchVal) {
      this.props.history.push({
        pathname: "/SearchShow",
        search: `?${this.state.searchVal}`,
      });
    }
  };
  handleHomePage = () => {
    this.props.handleHomePage();
  };

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark ">
        <div className="container">
          <span className="navbar-text">TV MAZE</span>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="\">
                  Dashboard
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
                value={this.state.searchVal}
                onChange={(e) => this.handleChange(e)}
                autoComplete="off"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={this.handleClick}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
