
interface TableProps {
    data: any[];
    tableHead?: string[];
    children: any
}

export function TestTable({ data, tableHead, children }: TableProps) {
    
    return (
        <div className="h-full w-full">
            <div className="flex flex-col h-full w-full overflow-x-auto">
                <table className="w-full ">
                    <thead>
                        <tr className="border-b  border-[#1d1d1d]  bg-[#fa9e1f] text-left text-sm leading-4 text-[#000] font-bold h-11  ">
                            {tableHead && tableHead.map((val: string, index: number) => (
                                <td key={index}>{val}</td>
                            ))}
                            
                        </tr>
                    </thead>

                    {data.length > 0 ? (
                        <tbody className="divide-y-[0.5px] divide-[#1d1d1d1] " >
                           {children}
                        </tbody>
                    ) : <p>No data available</p>}
                </table>
            </div>

            {!data.length ? (
                <div className="flex flex-1 flex-col w-full h-[60lvh] justify-center items-center gap-y-[3.125rem]">
                    <img
                        src={"/icons/empty-data.svg"}
                        alt="empty-data-icon"
                        aria-label="empty-data-icons"
                        width={225}
                        height={1884}
                    />

                    <div className="w-full text-center leading-4">
                        <h3 className="text-dark-natural font-semibold text-base ">
                            No Records found
                        </h3>
                        <h5 className="font-normal text-xs text-dark-natural/75">
                            No relevant details are available at this time
                        </h5>
                    </div>
                </div>
            ) : null}

            {data.length ? (
                <div className="flex items-center justify-center gap-x-4 px-6 py-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Records per page:</span>
                        <select className="rounded-md border-gray-200 text-sm">
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                    </div>
                    <div className="text-sm text-gray-500">1 - 10 of 10</div>
                </div>
            ) : null}
        </div>
    );
}