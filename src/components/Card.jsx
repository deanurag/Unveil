function Card ({ card }) {
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={card.image_url} alt={card.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{card.title}</h2>
          <div className="card-actions justify-center">
            <a href={card.url} target="_blank">
              <div className="btn btn-primary" >Visit Now</div>
            </a>
          </div>
        </div>
      </div>
  );
};
export default Card;