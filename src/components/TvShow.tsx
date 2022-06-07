import "./TvShow.css";

const TvShow = (props: any) => {
  const { show } = props;
  const thumbnailSrc = show.image?.medium;
  const rating = show.rating?.average;

  return (
    <div className="tvShowContainer">
      <div className="tvShowInfo">
        <div
          className="tvShowItem"
          
        >
          <div className="thumbnail">
            <img src={thumbnailSrc} alt="thumbnail" />
          </div>
          <div className="tvShowDetails">
            <span className="tvShowName">{show.name}</span>
            <span className="tvShowRating">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvShow;
