import { useState } from "react";

interface TableProps {
  data: any[];
  tableHead?: string[];
  children: any
}

export function Table({ data, tableHead, children }: TableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const totalPages = Math.ceil(data?.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  // const currentData = data.slice(startIndex, endIndex);

  return (
    <div className=" h-auto md:h-full w-full">
      <div className="flex flex-col h-full w-full overflow-x-auto">
      {data.length === 0 ? (
        <>
         <p>No data available</p>
        </>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#1d1d1d] bg-[#fa9e1f] text-left text-sm leading-4 text-[#000] font-bold h-11">
              {tableHead &&
                tableHead.map((value: string, index: number) => (
                  <th key={index} className="px-2">{value}</th>
                ))}
            </tr>
          </thead>
          {data.length > 0 ? (
            <tbody className="divide-y-[0.5px] divide-[#1d1d1d1]">
              {/* {currentData.map((item, index) => children(item, index))} */}
              {children}
            </tbody>
          ) : (
            <p>No data available</p>
          )}
        </table>
      ) }
      </div>


      {data.length > 0 && (
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Records per page:</span>
            <select
              className="rounded-md border-gray-200 text-sm"
              value={recordsPerPage}
              onChange={(e) => {
                setRecordsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
          <div className="text-sm text-gray-500">
            {startIndex + 1} - {Math.min(endIndex, data.length)} of {data.length}
          </div>
          <div className="flex items-center gap-2">
            <button
              className="px-2 py-1 border rounded disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Prev
            </button>
            <span className="text-sm text-gray-500">Page {currentPage} of {totalPages}</span>
            <button
              className="px-2 py-1 border rounded disabled:opacity-50"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      ) }
    </div>
  );
}
