export default function DataTable({ columns, data }) {
  const renderCell = (row, column) => {
    const value = row[column.key];

    if (column.type === "badge") {
      return (
        <span
          className={`px-2 py-1 text-xs rounded-md ${
            value === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {value}
        </span>
      );
    }

    return value || "-";
  };

  return (
    <div className="border rounded-xl overflow-hidden bg-white">

      <table className="w-full text-sm">

        <thead className="bg-gray-50">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 text-left">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3">
                  {renderCell(row, col)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}
