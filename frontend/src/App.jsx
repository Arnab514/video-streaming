import { useRef } from 'react'
import './App.css'
import VideoPlayer from './VideoPlayer'

function App() {
  const playerRef = useRef(null)
  const videoLink = "http://localhost:4000/uploads/courses/7f3c35e3-e514-4625-a4f7-6ba64aacb310/index.m3u8"

  const videoPlayerOptions = {
    controls : true,
    responsice : true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL"
      }
    ]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <div>
        <h1>Video Player</h1>
      </div>
      <VideoPlayer 
        options={videoPlayerOptions} 
        onReady={handlePlayerReady} 
      />
    </>
  )
}

export default App
