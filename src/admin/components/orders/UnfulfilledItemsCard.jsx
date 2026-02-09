import Badge from "../common/Badge";
import ContentCard from "../common/ContentCard";


const UnfulfilledItemsCard = ({onAction}) => {
  return (
    <ContentCard>
      <div className="flex justify-between px-4 py-3 border-b">
        <h3 className="text-sm font-medium">Unfulfilled Items</h3>
        <div className="flex gap-2">
          <Badge variant="pending">Require Shipment</Badge>
          <Badge variant="pending">Awaiting fulfillment</Badge>
        </div>
      </div>

      <div className="px-4 py-4 flex justify-between text-sm">
        <p>Pirelli Tire</p>
        <button className="border rounded px-3 py-1 text-sm" onClick={()=> onAction("fullfill")}>
          Fullfill This Item
        </button>
        <button className="border rounded px-3 py-1 text-sm" onClick={()=> onAction("shipped")}>
          Mark as Shipped
        </button>
      </div>
    </ContentCard>
  );
};

export default UnfulfilledItemsCard;
