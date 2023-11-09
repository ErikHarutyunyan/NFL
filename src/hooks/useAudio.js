import { useCallback, useEffect, useState } from "react";
import nflSound from "../assets/sound/nfl.mp3";

const useAudio = () => {
  const [audio] = useState(new Audio(nflSound));
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback(() => {
    audio.play();
    audio.volume = 1;
    
    setIsPlaying(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const rePlay = useCallback(() => {
    setIsPlaying(false);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    setIsPlaying(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const pause = useCallback(() => {
    audio.pause();
    setIsPlaying(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stop = useCallback(() => {
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    audio.addEventListener("ended", () => {
      setIsPlaying(false);
    });
    return () => {
      audio.removeEventListener("ended", () => {
        setIsPlaying(false);
      });
    };
  }, [audio]);

  return {
    play,
    pause,
    stop,
    rePlay,
    isPlaying,
    setIsPlaying,
  };
};

export default useAudio;
