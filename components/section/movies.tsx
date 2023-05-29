const Movies = ({ data }: any) => {
  return (
    <div className="movies">
      {data.map((item: any) => (
        <>
          <div className="projectTitle">{item.titulo}</div>
          <div className="videos">
            {item?.videos?.map((video: any) => (
              <>
                <div className="movie">
                  <div className="video">
                    <iframe
                      width="460"
                      height="315"
                      src={video.item.video}
                      title="YouTube video player"
                      // frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>{" "}
                    <span className="videoTitle">{video.item.titulo}</span>
                    <span className="description">{video.item.descricao}</span>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Movies;
