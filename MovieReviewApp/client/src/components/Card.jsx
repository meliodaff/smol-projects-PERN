function Card(props) {
  return (
    <>
      <div className="card my-3" style={{ width: "18rem" }}>
        <img src={props.movieImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.movieTitle}</h5>
          <p className="card-text">{props.year}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.type}</li>
        </ul>
      </div>
    </>
  );
}

export default Card;
