import { useEffect, useState } from "react";
import { Activity, getActivitiesAsync } from "../api/activities";
import ActivityCard from "./ActivityCard";
import "./ActivityList.css";
import LoadingSpinner from "./extras/LoadingSpinner";

function ActivityList() {
  const [searchText, setSearchText] = useState("");
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>();

  const [activities, setActivities] = useState<Activity[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  function fetchActivities() {
    setIsLoading(true);
    getActivitiesAsync()
      .then((activities) => {
        setIsLoading(false);
        setActivities(activities);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }

  useEffect(() => {
    fetchActivities();
  }, []);

  useEffect(() => {
    if (!activities) return;
    if (!searchText) return setFilteredActivities(activities);
    setFilteredActivities(
      activities.filter((activity) =>
        activity.title.toLowerCase().includes(searchText)
      )
    );
  }, [activities, searchText]);

  return (
    <div className="list">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.currentTarget.value);
        }}
      />

      {isLoading && <LoadingSpinner />}
      {filteredActivities?.map((activity) => (
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
      {error && <p className="error">{error.message}</p>}
    </div>
  );
}

export default ActivityList;
