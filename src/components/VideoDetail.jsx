import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const { id } = useParams();
  return <div>VideoDetail</div>;
}
