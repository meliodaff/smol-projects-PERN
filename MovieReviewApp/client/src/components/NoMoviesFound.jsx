function NoMoviesFound() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <img
          class="d-block mx-auto mb-4"
          src="/assets/images/images.jpg"
          alt=""
          width="72"
          height="57"
        />

        <h1 className="display-5 fw-bold text-body-emphasis">
          No Movies Found
        </h1>
      </div>
    </>
  );
}

export default NoMoviesFound;
