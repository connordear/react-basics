import { getActivities } from "../../api/activities";
import ActivityCard from "../ActivityCard";
import "./ActivityList.css";

/**
 *  This component is a bad example of how to use React, because it uses
 *  a plain variable to store the search text instead of using React state.
 *
 *  This means that the search text is not part of the component's state,
 *  so when the search text changes, the component does not re-render.
 */
function BadActivityList() {
  let searchText = ""; // Bad! This should be in React state

  return (
    <div className="list">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          searchText = e.currentTarget.value; // This will NOT trigger a re-render
        }}
      />

      {getActivities().map((activity) => (
        <div key={activity.title} className="row">
          <ActivityCard
            img={activity.image}
            title={activity.title}
            description={activity.description}
            price={activity.price}
            priceDetails={activity.priceDetails}
            link={activity.link}
          />
        </div>
      ))}
    </div>
  );
}

export default BadActivityList;
