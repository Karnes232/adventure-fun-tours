import React from "react"

const BackgroundVideo = ({ video, phoneVideo, className }) => {
  const screenWidth = window.innerWidth
  return (
    <div className={`bg-video-section bg-video-main ${className}`}>
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop playsInline>
          {/* Allows Smaller video for mobile devices to save bandwidth */}
          {screenWidth < 600 ? (
            <source src={phoneVideo} type="video/mp4" />
          ) : (
            <source src={video} type="video/mp4" />
          )}
          Your device does not support playing 'video/mp4' videos
        </video>
      </div>
    </div>
  )
}

export default BackgroundVideo
