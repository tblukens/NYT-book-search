import React from 'react';

const SavedBook = props => {
  return (
    <div className="row">
      <div className="col border border-secondary m-1 p-2">
        <div className="row">
          <div className="col mx-auto">
            <h3>{props.title}</h3>
            <h4>{props.authors}</h4>
          </div>
          <div className="col text-right">
            <a href={props.link} className="btn btn-secondary" target="_blank">View</a>
            <button
            className="btn btn-danger"
            onClick={() => props.deleteSavedBook(props._id)}
          >Delete</button>
          </div>
        </div>
        <div className="row">
        <div className="col-2"><img src={props.image} alt={props.title}/></div>
        <div className="col">{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default SavedBook;
