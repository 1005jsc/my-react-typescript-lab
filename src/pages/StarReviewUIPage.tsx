import React from "react";
import { GreyStarIcon, YellowStarIcon } from "../assets/icon";
import StarIcon from "../components/StarIcon/StarIcon";

type StarReviewUIPageProps = {};

const StarReviewUIPage = ({}: StarReviewUIPageProps) => {
  return (
    <>
      <div> StarReviewUIPage</div>

      <YellowStarIcon width={`160px`} height={`160px`} />
      {/* <GreyStarIcon width={160} height={160} /> */}

      <StarIcon width="800px" margin="2px" rating={2.756} />
    </>
  );
};
export default StarReviewUIPage;
