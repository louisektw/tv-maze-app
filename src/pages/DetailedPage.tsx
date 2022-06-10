import "../styles/DetailedPage.css";

import { useContext, useEffect, useState } from "react";
import { ITvShow } from "../interfaces/tvShow.d";
import { TvShowContext } from "../context/TvShowContext";
import { useParams } from "react-router-dom";
import ReturnButton from "../components/ReturnButton";
import { ITvShowContext } from "../interfaces/tvShowContext";

const DetailedPage = () => {
  const { shows, getTvShowById } = useContext(
    TvShowContext
  ) as ITvShowContext;

  const [show, setShow] = useState<ITvShow>();
  const { id } = useParams();

  useEffect(() => {
    setShow(shows.find((show: any) => show.id === id));
    if (show === undefined) {
      getTvShowById(id!).then((data: any) => {
        setShow(data);
      });
    }
  }, []);

  if (!show) {
    return <div>No show found</div>;
  }

  const thumbnailSrc = show.image?.medium;
  const premiere = show.premiered.slice(0, 4);
  const ended = show.ended === null ? "" : show.ended.slice(0, 4);
  const rating =
    show.rating?.average === null ? "Rating: N/A" : show.rating?.average;

  return (
    <div className="detailsContainer">
      <div className="details">
        <div className="detailsHeader">
          <h2 className="detailsTitle">{show?.name}</h2>
          <span className="yearsActive">
            {premiere} - {ended}
          </span>
          <hr />
        </div>
        <div className="detailsMid">
          <div className="detailsImgGenre">
            <img
              className="detailsThumbnail"
              src={thumbnailSrc}
              alt="thumbnail"
            />
            <div className="genres">
              {show.genres.map((genre: string) => (
                <span className="genre">{genre}</span>
              ))}
            </div>
          </div>
          <div className="detailsRating">{rating}</div>
        </div>
        <div className="detailsDescription">
          <h3>Summary</h3>
          <div dangerouslySetInnerHTML={{ __html: show.summary ?? "" }}></div>
        </div>
        <hr />
        <ReturnButton />
      </div>
    </div>
  );
};

export default DetailedPage;
