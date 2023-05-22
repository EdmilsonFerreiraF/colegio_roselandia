import Image from "next/image";

const Movies = () => {
  return (
    <div className="movies">
      <div className="category">
        <div className="title">
          <span className="upper">Mostra</span> de
          <span className="upper">Filmes cr7</span> - 2022
        </div>
        <div className="movie">
          <div className="image">
            <Image
              width="100"
              height="100"
              src="tv-cr-video-1.jpg"
              alt="tv cr video"
            />
          </div>
          <div className="image">
            <Image
              width="100"
              height="100"
              src="tv-cr-video-1.jpg"
              alt="tv cr video"
            />
          </div>
        </div>
        <div className="movie">
          <div className="image">
            <Image
              width="100"
              height="100"
              src="tv-cr-video-2.png"
              alt="tv cr video"
            />
          </div>
          <div className="image">
            <Image
              width="100"
              height="100"
              src="tv-cr-video-2.png"
              alt="tv cr video"
            />
          </div>
        </div>
        <div className="movie">
          <div className="image">
            <Image
              width="100"
              height="100"
              src="tv-cr-video-3.png"
              alt="tv cr video"
            />
          </div>
          <div className="image">
            <Image
              width="100"
              height="100"
              src="tv-cr-video-3.png"
              alt="tv cr video"
            />
          </div>
        </div>
        <div className="movie">
          <div className="image">
            <Image
              width="100"
              height="100"
              src="tv-cr-video-4.png"
              alt="tv cr video"
            />
          </div>
          <div className="image">
            <Image
              width="100"
              height="100"
              src="tv-cr-video-4.png"
              alt="tv cr video"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
