const BaseTable = ({ columns, children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="px-4 py-2 text-left font-medium"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y">
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default BaseTable;
