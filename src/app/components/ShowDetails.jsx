import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { mapStateToProps } from "../reducers/index";
import * as middleware from "../action/middleware/showsDeshboardMiddleware";

class Showdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showID:
        props.history.location && props.history.location.search
          ? props.history.location.search
          : null,
      /*   const getUser = s => s.includes('?') && s.substr(s.lastIndexOf('?') + 1).split(' ')[0] */
      showDetails: {},
      genresVal: "",
      sheduleDate: "",
      searchArray: "",
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (
      nextProps &&
      nextProps.showDetailsReducer &&
      nextProps.showDetailsReducer.showDetailData
    ) {
      state.showDetails = nextProps.showDetailsReducer.showDetailData;
      let arrayVal = "";

      if (state.showDetails.genres) {
        state.showDetails.genres.map(function (val, id) {
          let arraylength = state.showDetails.genres.length;
          if (arraylength > id + 1) arrayVal = `${arrayVal}${val} | `;
          else arrayVal = `${arrayVal}${val} `;
        });
        state.genresVal = arrayVal;
      }
    }
    return {}
  }

  componentDidMount() {
    let showIDVal =
      this.state.showID && this.state.showID.includes("?")
        ? this.state.showID.split("?")
        : null;
    showIDVal = showIDVal ? showIDVal[1] : "";
    if (showIDVal) this.props.dispatch(middleware.getShowsDetails(showIDVal));
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <Header />

        {this.state.showDetails ? (
          <div className="jumbotron">
            <br />
            <button onClick={this.goBack} type="submit">
              Go Back
            </button>
            <br /> <br />
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <h5>{this.state.showDetails.name || "N/A"}</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <img
                    src={
                      this.state.showDetails.image &&
                      this.state.showDetails.image.medium
                        ? this.state.showDetails.image.medium
                        : ""
                    }
                    alt={this.state.showDetails.id}
                  />
                </div>
                <div
                  className="col-md-4"
                  dangerouslySetInnerHTML={{
                    __html: this.state.showDetails.summary,
                  }}
                ></div>
                <div className="col-md-5">
                  <div className="card">
                    <div className="card-header">
                      <h4>Show Info</h4>
                      <span>
                        <b>Language:</b>
                      </span>{" "}
                      {this.state.showDetails.language || "N/A"}
                      <br />
                      <span>
                        <b>Status:</b>
                      </span>{" "}
                      {this.state.showDetails.status || "N/A"}
                      <br />
                      <span>
                        <b>Show Type:</b>
                      </span>{" "}
                      {this.state.showDetails.type || "N/A"}
                      <br />
                      <span>
                        <b>Genres:</b>
                      </span>{" "}
                      {this.state.genresVal || "N/A"}
                      <br />
                      <span>
                        <b>episodes Official site:</b>
                      </span>{" "}
                      {this.state.showDetails.officialSite || "N/A"}
                      <br />
                      <span>
                        <b>Rating:</b>
                      </span>{" "}
                      {this.state.showDetails.rating &&
                      this.state.showDetails.rating.average
                        ? this.state.showDetails.rating.average
                        : "N/A"}
                    </div>
                    {/*  <div class="card-body">Content</div>
                    <div class="card-footer">Footer</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Showdetails);
