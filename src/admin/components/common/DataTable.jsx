import ActionDropdown from "./ActionDropdown";

export default function DataTable({ columns, data,actions }) {
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
    <div className="border overflow-visible bg-white">
      <table className="w-full text-sm">
        <thead className="bg-[#FAFAFA]">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 text-left text-[#848588] font-medium">
                {col.label}
              </th>
            ))}
            <th className="px-4 py-3 w-10"></th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-[13px]">
                  {renderCell(row, col)}
                </td>
              ))}
              <td className="px-4 py-3 text-right">
                <ActionDropdown actions={actions} row={row} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
