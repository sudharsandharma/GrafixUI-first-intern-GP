import { restaurants } from "../Data/restaurantsData";
import Restaurant from "./Restaurant";

function SearchResults() {
  return (
    <>
      {Object.keys(restaurants).map(id => (
        <Restaurant key={id} />
      ))}
    </>
  );
}

export default SearchResults;
