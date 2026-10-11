import { useLayoutEffect, useRef } from "react";

const VidoComponent = () => {
  const ref = useRef<HTMLVideoElement | null>(null);

  useLayoutEffect(() => {
    return () => {
      ref.current?.pause();
    };
  }, []);

  return (
    <div className="video-wrapper">
      <video
        className="video-player"
        ref={ref}
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        controls
        playsInline
        preload="metadata"
      />
    </div>
  );
};

export default VidoComponent;