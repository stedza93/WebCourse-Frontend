import React from "react";
import { useParams } from "react-router-dom";
export const SingleBlog = () => {
  const { id } = useParams();
  return <div>Single blog {id}</div>;
};
