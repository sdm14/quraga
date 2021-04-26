import React from "react";

import { Main } from "./Main";
import { getRequest } from "../shared/getRequest";
import { Loading } from "../shared/Loading";

const endPoint = "https://jsonplaceholder.typicode.com/photos?_limit=20";

export const MainContainer = () => {
  const [photos, setPhotos] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getRequest(endPoint).then((res) => {
      setLoading(false);
      setPhotos(res);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Main loading={loading} photos={photos} />;
};
