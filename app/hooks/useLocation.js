import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    // try {
    let { granted } = await Location.requestPermissionsAsync();
    if (granted !== "granted") return;
    let coords = await Location.getCurrentPositionAsync({});
    setLocation(console.log("1"));
    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
