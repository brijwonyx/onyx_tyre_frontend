import BaseTable from "../common/BaseTable";

const CustomersList = () => {
  const customers = [
    {
      emai: "shagunuxd@proton.me",
      name: "Shagun",
      account: "Proton",
      created: "01/01/2023",
    },
    {
      emai: "shagunuxd@proton.me",
      name: "Shagun",
      account: "Proton",
      created: "01/01/2023",
    },
    {
      emai: "shagunuxd@proton.me",
      name: "Shagun",
      account: "Proton",
      created: "01/01/2023",
    },
  ];
  return (
    <>
      <BaseTable columns={["Email", "Name", "Account", "Created"]}>
        {customers.map((customer) => (
          <tr key={customer.email}>
            <td>{customer.email}</td>
            <td>{customer.name}</td>
            <td>{customer.account}</td>
            <td>{customer.created}</td>
          </tr>
        ))}
      </BaseTable>
    </>
  );
};

export default CustomersList;
