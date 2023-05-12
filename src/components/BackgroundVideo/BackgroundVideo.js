import React from "react"

const BackgroundVideo = ({ video, phoneVideo, className }) => {
  return (
    <div className={`bg-video-section bg-video-main ${className}`}>
      <div className="bg-video">
        <video
          className="bg-video__content md:hidden"
          autoPlay
          muted
          loop
          playsInline
          src={phoneVideo}
        ><source src={phoneVideo} type="video/mp4" />
          Your device does not support playing 'video/mp4' videos
        </video>
        <video
          className="bg-video__content hidden"
          autoPlay
          muted
          loop
          playsInline
          src={video}
        >
          <source src={video} type="video/mp4" />
          Your device does not support playing 'video/mp4' videos
        </video>
      </div>
    </div>
  )
}

export default BackgroundVideo
