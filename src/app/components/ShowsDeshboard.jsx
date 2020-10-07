import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { mapStateToProps } from "../reducers/index";
import * as middleware from "../action/middleware/showsDeshboardMiddleware";
import SearchShow from "./SearchShow";

class ShowsDeshboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allShowsDetails: [],
      showsAccordingToRatAndGenres: {},
      topShows: [],
      uniqueGenres: [],
      uniqueGenresArray: [],
      showDetails: "",
      searchArray: "",
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (
      nextProps &&
      nextProps.showsDeshboardReducer &&
      nextProps.showsDeshboardReducer.showsData
    ) {
      // top shows accoring to rating
      let topShowsByRating = nextProps.showsDeshboardReducer.showsData.sort(
        (c, d) => d.rating.average - c.rating.average
      );
      state.topShows = topShowsByRating.slice(0, 10);

      // find unique genres and sort
      let uniqueGenres = [];
      nextProps.showsDeshboardReducer.showsData.map(function (val, id) {
        val.genres.map((genresVal) => {
          if (uniqueGenres.indexOf(genresVal) === -1) {
            uniqueGenres.push(genresVal);
          }
        });
      });
      state.uniqueGenres = uniqueGenres.sort();
      state.allShowsDetails = nextProps.showsDeshboardReducer.showsData;
    }

    if (
      nextProps &&
      nextProps.searchShowReducer &&
      nextProps.searchShowReducer.searchShowDetail
    ) {
      state.searchArray = nextProps.searchShowReducer.searchShowDetail;
    }
  }

  componentDidMount() {
    this.props.dispatch(middleware.getAllShowsData());
  }
  handleShowDetails = (event, showId) => {
    if (showId) {
      this.props.history.push({
        pathname: "/ShowDetails",
        search: `?${showId}`,
      });
    }
  };
  handleButtonClick = (event) => {
    this.props.dispatch(middleware.getSearchShow(event));
  };
  handleHomePage = () => {
    this.setState({
      searchArray: "",
    });
  };
  render() {
    console.log("gfe", this.state.searchArray);
    return (
      <div>
        <Header
          handleClick={(e) => this.handleButtonClick(e)}
          handleHomePage={this.handleHomePage}
        />
        {this.state.searchArray ? (
          <SearchShow searchResult={this.state.searchArray} />
        ) : (
          <div class=" jumbotron">
            <h5>Top Shows</h5>
            <div className="live__scroll">
              <div class="row-sty">
                {this.state.topShows
                  ? this.state.topShows.map((val, id) => {
                      return (
                        <div className="img-style">
                          {" "}
                          <img
                            key={id}
                            src={val.image.medium || "N/A"}
                            alt={id}
                            onClick={(e) => this.handleShowDetails(e, val.id)}
                          />
                          <div>
                            Rating{" "}
                            {val.rating && val.rating.average
                              ? val.rating.average
                              : "N/A"}
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>

            {this.state.uniqueGenres && this.state.allShowsDetails
              ? this.state.uniqueGenres.map((uniqueGenresVal, id) => {
                  this.state.uniqueGenresArray = this.state.allShowsDetails.filter(
                    (d) => d.genres.includes(uniqueGenresVal)
                  );
                  this.state.uniqueGenresArray = this.state.uniqueGenresArray.sort(
                    (a, b) => b.rating.average - a.rating.average
                  );
                  return (
                    <div>
                      <br /> <br />
                      <h5>{uniqueGenresVal}</h5>
                      <div className="live__scroll">
                        <div class="row-sty">
                          {this.state.uniqueGenresArray
                            ? this.state.uniqueGenresArray.map(
                                (showObj, id) => {
                                  return (
                                    <div className="img-style">
                                      <img
                                        key={id}
                                        src={showObj.image.medium || "N/A"}
                                        alt={id}
                                        onClick={(e) =>
                                          this.handleShowDetails(e, showObj.id)
                                        }
                                      />
                                      <div>
                                        Rating{" "}
                                        {showObj.rating &&
                                        showObj.rating.average
                                          ? showObj.rating.average
                                          : "N/A"}
                                      </div>
                                    </div>
                                  );
                                }
                              )
                            : null}
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ShowsDeshboard);
