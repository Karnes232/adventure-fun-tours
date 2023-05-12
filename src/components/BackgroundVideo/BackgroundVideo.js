import React from "react"

const BackgroundVideo = ({ video, phoneVideo, className }) => {
  return (
    <div className={`bg-video-section bg-video-main ${className}`}>
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop playsInline>
          <source
            src={phoneVideo}
            type="video/mp4"
            media="all and (max-width: 480px)"
          />
          <source src={video} type="video/mp4" />
          Your device does not support playing 'video/mp4' videos
        </video>
      </div>
    </div>
  )
}

export default BackgroundVideo
