import ContentCard from "../common/ContentCard";


const CustomerCard = () => {
  return (
    <ContentCard>
      <div className="px-4 py-3 border-b">
        <h3 className="text-sm font-medium">Customer</h3>
      </div>

      <div className="px-4 py-4 text-sm space-y-3">
        <Field label="ID" value="abc xyz" />
        <Field label="Contact" value="abc@gmail.com" />
        <Field
          label="Shipping address"
          value={`abc xyz\nasas\nmeerut 250001\nItaly`}
        />
        <Field label="Billing address" value="Same as shipping address" />
      </div>
    </ContentCard>
  );
};

const Field = ({ label, value }) => (
  <div>
    <p className="text-gray-500 text-xs">{label}</p>
    <p className="whitespace-pre-line">{value}</p>
  </div>
);

export default CustomerCard;
