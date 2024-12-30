import { useEffect } from "react";
import io from "socket.io-client";

const useRealTimeUpdates = () => {
  useEffect(() => {
    const socket = io("https://realtime.example.com");

    socket.on("locationUpdate", (data) => {
      console.log(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
};

export default useRealTimeUpdates;
