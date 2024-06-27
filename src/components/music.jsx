import React, { useEffect, useState } from "react";

const Music = ({ videoUrl }) => {
  useEffect(() => {
    let player;
    const getVideoId = (url) => {
      if (!url) return null;
      const match = url.match(
        /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n?#]+)/
      );
      return (match && match[1]) || null;
    };
    const videoId = getVideoId(videoUrl);

    if (!videoId) {
      console.error("Invalid YouTube URL provided");
      return;
    }

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player("player", {
        height: "0",
        width: "0",
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          start: 0,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(20); // Ajustar volumen si es necesario
            event.target.playVideo();
          },
        },
      });
    };

    // Limpiar efectos
    return () => {
      if (player && player.destroy) {
        player.destroy();
      }
      delete window.onYouTubeIframeAPIReady;
    };
  }, [videoUrl]);

  return (
    <div>
      <div id="player" style={{ display: "none" }}></div>
    </div>
  );
};

export default Music;
