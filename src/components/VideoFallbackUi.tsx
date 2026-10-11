const VideoFallbackUi = () => {
  return (
    <div className="video-fallback" role="status">
      <div className="error-icon" aria-hidden="true">
        ...
      </div>

      <h3 className="video-fallback-title">
        Loading video experience
      </h3>

      <p>Please wait while the content becomes available.</p>
    </div>
  );
};

export default VideoFallbackUi;