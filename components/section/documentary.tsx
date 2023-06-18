import { useEffect, useState } from "react";

const Documentary = ({ data }: any) => {
  const [watchVideoQuery, setWatchVideoQuery] = useState<any>([]);

  useEffect(() => {
    if (data.video) setWatchVideoQuery(data?.video?.split("/watch?v="));
  }, [data]);

  return (
    <div className="documentary">
      <div className="title">Documentário</div>
      <div className="video">
        <iframe
          width="100%"
          height="500"
          src={watchVideoQuery[0] + "/embed/" + watchVideoQuery[1]}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>{" "}
      </div>
    </div>
  );
};

export default Documentary;
