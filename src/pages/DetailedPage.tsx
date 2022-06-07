import { useContext, useEffect, useState } from "react";
import { ITvShow, TvShowContextType } from "../@types/tvShow.d";
import { TvShowContext } from "../context/TvShowContext";
import "./DetailedPage.css";
import { useParams } from "react-router-dom";

const DetailedPage = () => {
  const { shows, getTvShowById } = useContext(
    TvShowContext
  ) as TvShowContextType;

  const [show, setShow] = useState<ITvShow>();
  const { id } = useParams();

  useEffect(() => {
    setShow(shows.find((show: any) => show.id == id));
    if (show == undefined) {
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

  return (
    <div className="detailsContainer">
      <div className="details">
        <div className="detailsHeader">
          <h2 className="detailsTitle">{show?.name}</h2>
          <span className="yearsActive">
            {premiere} - {ended}
          </span>
        </div>
        <div className="detailsMid">
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
        <div className="detailsDescription">
          <h3>Summary</h3>
          <p>{show.summary.replace("<p>", "").replace("</p>", "")}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
