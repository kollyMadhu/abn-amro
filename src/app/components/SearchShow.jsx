import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { mapStateToProps } from "../reducers/index";
import * as middleware from "../action/middleware/showsDeshboardMiddleware";

class SearchShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genresVal: "",
      searchArray: {},
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (
      nextProps &&
      nextProps.searchShowReducer &&
      nextProps.searchShowReducer.searchShowDetail
    ) {
      state.searchArray = nextProps.searchShowReducer.searchShowDetail;
    }
    return {}
  }

  componentDidMount() {
    let searchVal =
      this.props.history.location &&
      this.props.history.location.search &&
      this.props.history.location.search.includes("?")
        ? this.props.history.location.search.split("?")
        : null;

    searchVal = searchVal ? searchVal[1] : "";
    if (searchVal) this.props.dispatch(middleware.getSearchShow(searchVal));
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <Header />
        <div className="jumbotron">
          <button onClick={this.goBack} type="submit">
            Go Back
          </button>
          <br /> <br />
          {this.state.searchArray.length > 0
            ? this.state.searchArray.map(function (searchArrayData) {
                return (
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <h5>{searchArrayData.show.name || "N/A"}</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          src={
                            searchArrayData.show.image &&
                            searchArrayData.show.image.medium
                              ? searchArrayData.show.image.medium
                              : "N/A"
                          }
                          alt="N/A"
                        />
                      </div>
                      <div
                        className="col-md-4"
                        dangerouslySetInnerHTML={{
                          __html: searchArrayData.show.summary || "N/A",
                        }}
                      ></div>
                      <div className="col-md-5">
                        <div className="card">
                          <div className="card-header">
                            <h4>Show Info</h4>
                            <span>
                              <b>Language:</b>
                            </span>{" "}
                            {searchArrayData.show.language || "N/A"}
                            <br />
                            <span>
                              <b>Status:</b>
                            </span>{" "}
                            {searchArrayData.show.status || "N/A"}
                            <br />
                            <span>
                              <b>Show Type:</b>
                            </span>{" "}
                            {searchArrayData.show.type || "N/A"}
                            <br />
                            <span>
                              <b>episodes Official site:</b>
                            </span>{" "}
                            {searchArrayData.show.officialSite || "N/A"}
                            <br />
                            <span>
                              <b>Rating:</b>
                            </span>{" "}
                            {searchArrayData.show.rating &&
                            searchArrayData.show.rating.average
                              ? searchArrayData.show.rating.average
                              : "N/A"}
                          </div>
                        </div>
                      </div>
                    </div>
                    <br /> <br />
                  </div>
                );
              })
            : "No Search Result Found"}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SearchShow);
