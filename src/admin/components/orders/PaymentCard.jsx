import Badge from "../common/Badge";
import ContentCard from "../common/ContentCard";


const PaymentsCard = () => {
  return (
    <ContentCard>
      <div className="flex justify-between px-4 py-3 border-b">
        <h3 className="text-sm font-medium">Payments</h3>
        <Badge variant="success">Success</Badge>
      </div>

      <div className="px-4 py-4 text-sm space-y-2">
        <div className="flex justify-between">
          <div>
            <p className="font-medium">#ER75VY1</p>
            <p className="text-gray-500 text-xs">Dec 12, 2025</p>
          </div>
          <p>€20.00</p>
        </div>

        <hr />

        <Row label="Total paid by customer" value="€20.00 AUD" />
        <Row label="Total pending" value="€0.00 AUD" />
      </div>
    </ContentCard>
  );
};

const Row = ({ label, value }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-500">{label}</span>
    <span>{value}</span>
  </div>
);

export default PaymentsCard;
