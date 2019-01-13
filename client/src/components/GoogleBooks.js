import React from "react";
import Popup from "reactjs-popup";

const GoogleBooks = props => {
  const book = {
    title: props.title,
    authors: props.authors,
    description: props.description,
    image: props.image,
    link: props.link
  };
  return (
    <div className="row">
      <div className="col border border-secondary m-1 p-2">
        <div className="row">
          <div className="col mx-auto">
            <h3>{props.title}</h3>
            <h4>{props.authors.join(", ")}</h4>
          </div>
          <div className="col text-right">
            <button className="btn btn-primary">View</button>

            <Popup
              trigger={<button className="btn btn-primary">Save</button>}
              onOpen={() => props.saveGoogleBook(book)}
              position="left bottom"
            >
              <div>Book saved!</div>
            </Popup>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="col">{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default GoogleBooks;
