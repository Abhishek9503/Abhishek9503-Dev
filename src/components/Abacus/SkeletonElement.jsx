import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="card-skeleton" key={i}>
        {/* <div className="left-col">
          <Skeleton circle width={40} height={40} />
        </div> */}
        <SkeletonTheme
          baseColor="#cfcece"
          highlightColor="#eeeee1"
          height={250}
        >
          <div className="right-col">
            <Skeleton count={1} style={{ marginBottom: ".6rem" }} />
          </div>
        </SkeletonTheme>
      </div>
    ));
};
export default CardSkeleton;
