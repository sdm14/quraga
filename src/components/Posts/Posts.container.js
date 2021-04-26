import React from "react";

import { getRequest } from "../shared/getRequest";
import { Loading } from "../shared/Loading";
import { Posts } from "./Posts";

const endPoint = "https://jsonplaceholder.typicode.com/posts?_limit=20";

export const PostsContainer = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getRequest(endPoint).then((res) => {
      setPosts(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Posts posts={posts} />;
};
