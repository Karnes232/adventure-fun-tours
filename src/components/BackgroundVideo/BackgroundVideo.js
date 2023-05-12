import React from "react"

const BackgroundVideo = ({ video, className }) => {
  return (
    <div className={`bg-video-section bg-video-main ${className}`}>
      <div className="bg-video">
      <object data='https://www.youtube.com/embed/KvZT3etZIsw?autoplay=1' 
        width='100%' height='100%'>
    </object>
        {/* <video
          className="bg-video__content"
          autoPlay
          muted
          loop
          playsInline
          src={video}
        >
          <source src={video} type="video/mp4" />
          Your device does not support playing 'video/mp4' videos
        </video> */}
      </div>
    </div>
  )
}

export default BackgroundVideo
