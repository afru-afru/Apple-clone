import { useEffect, useState } from "react";
import "./AppleYoutube.css";

function AppleYoutube() {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [error, setError] = useState(null);
//   useEffect(() => {
//     const fetchVideos = async () => {
//         try {
//             const response = await fetch(
//                 "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDhrjdfl7LOB_RmnHjSP0MQ80wbUMWXDf8&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
//             );


//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }

//             const data = await response.json();
//             setYoutubeVideos(data.items);
//         } catch (error) {

//             setError(error.message);
//             console.error("Error fetching YouTube videos:", error);
//         }
//     };

//     fetchVideos();
// }, []);

// Render error message if error exists
if (error) {
    return <div>Error: {error}</div>;
}

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wrapper">
              Latest Videos
              <br />
              <br />
            </div>
          </div>
          {youtubeVideos.map((singleVideo) => {
            let vidId = singleVideo.id.vidId;
            let vidLink = `https://www.youtube.com/embed/${vidId}`;
            let videoWrapper = (
              <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AppleYoutube;
