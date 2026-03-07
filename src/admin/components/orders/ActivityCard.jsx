import ContentCard from "../common/ContentCard";


const ActivityCard = () => {
  return (
    <ContentCard>
      <div className="px-4 py-3 border-b">
        <h3 className="text-sm font-medium">Activity</h3>
      </div>

      <div className="px-4 py-4 text-sm space-y-3">
        <ActivityItem
          title="Awaiting payment"
          time="13 minutes ago"
        />
        <ActivityItem
          title="Order placed"
          time="13 minutes ago"
        />
      </div>
    </ContentCard>
  );
};

const ActivityItem = ({ title, time }) => (
  <div className="flex justify-between">
    <span>{title}</span>
    <span className="text-gray-400 text-xs">{time}</span>
  </div>
);

export default ActivityCard;
