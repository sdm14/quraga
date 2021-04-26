import React from "react";
import { useHistory } from "react-router-dom";

import { Profile } from "./Profile";
import { getRequest } from "../shared/getRequest";
import { Loading } from "../shared/Loading";

const endPoint = "https://jsonplaceholder.typicode.com/users/1";

export const ProfileContainer = () => {
  const history = useHistory();

  const [loading, setLoading] = React.useState(false);
  const [userData, setUserData] = React.useState({});

  React.useEffect(() => {
    const isAuth = window.localStorage.getItem("isAuth");
    if (isAuth) {
      setLoading(true);
      getRequest(endPoint).then((res) => {
        setLoading(false);
        setUserData(res);
      });
    } else {
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Profile userData={userData} loading={loading} />;
};
