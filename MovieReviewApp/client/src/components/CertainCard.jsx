function CertainCard(props) {
  return (
    <>
      <div className="card my-3" style={{ width: "18rem" }}>
        <img src={props.movieImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.movieTitle}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">{props.director}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.ratings}</li>
          <p className="list-group-item">{props.runtime}</p>
          <li className="list-group-item">{props.genre}</li>
        </ul>
      </div>
    </>
  );
}

export default CertainCard;
