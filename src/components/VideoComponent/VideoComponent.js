import YouTube from 'react-youtube';

const VideoComponent = ({ videoId }) => {
  
  const videoOptions = {
    height: '180',
    width: '320',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={videoOptions} />
    </div>
  );
};

export default VideoComponent;
