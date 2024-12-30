// src/hooks/useTransportUpdates.ts
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBuses, setTrains } from "../store/slice/transportSlice";
import { listenForTransportUpdates } from "../socket/index";

const useTransportUpdates = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    listenForTransportUpdates((data) => {
      dispatch(setBuses(data.buses));
      dispatch(setTrains(data.trains));
    });
  }, []);
};

export default useTransportUpdates;
