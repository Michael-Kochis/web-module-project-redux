import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MovieHeader = (props) => {
    const appTitle = props.movie.appTitle;
    const displayFavorites = props.favorite.displayFavorites;
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {})(MovieHeader);