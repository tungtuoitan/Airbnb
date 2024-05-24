import React from "react";
import AvtA from "./avtA";
import { useGetCurrentHome } from "../hooks/useGetCurrentHome";
import TextAboutBeds from "./textAboutBeds";

export default function TextAboutOwner() {
  const currentHome = useGetCurrentHome();
  return (
    <div className="7:pt-6">
      <div className="pb-6 border-b-1 border-solid border-gray-300">
        <div className="flex pt-6 justify-between gap-4  ">
          <div>
            <p className="text-left font-size22 leading-7 font-semibold color222">
              A {currentHome.placeType} hosted by {currentHome.owner.name}
            </p>
            <TextAboutBeds />
          </div>
          <AvtA />
        </div>
      </div>
    </div>
  );
}
