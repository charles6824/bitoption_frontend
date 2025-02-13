
import { Tab, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useState } from "react";
import { Table } from "../../components/Table";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
// import { FaRegArrowAltCircleRight } from "react-icons/fa";

const AdminInvestment = () => {
   const [activeTab, setActiveTab] = useState("investment1");
   const [selectedItem,setSelectedItem] = useState({})

   const headers=[
    {
      label:"Investment 1",
      value: "investment1",

    },

    {
      label:"Investment 2",
      value: "investment2",
    }
   ]
   const tableHead = [
		"S/N",
		"Amount Invested",
		"Expected Amount",
		"Start Date",
		"Status",
		" ",
	];

  const data = [
    {
      id: 1,
      amountInvested: "$1,000",
      expectedAmount: "$1,500",
      startDate: "2024-01-15",
      status: "Active",
    },
    {
      id: 2,
      amountInvested: "$500",
      expectedAmount: "$750",
      startDate: "2024-02-01",
      status: "Completed",
    },
    {
      id: 3,
      amountInvested: "$2,000",
      expectedAmount: "$3,000",
      startDate: "2024-02-10",
      status: "Pending",
    },
    {
      id: 4,
      amountInvested: "$750",
      expectedAmount: "$1,125",
      startDate: "2024-03-05",
      status: "Active",
    },
    {
      id: 5,
      amountInvested: "$1,500",
      expectedAmount: "$2,250",
      startDate: "2024-04-01",
      status: "Completed",
    },
  ];
  
  const viewDetails = (item:any) => {
    setSelectedItem(item)
  }

  return (
    <div>
      <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-[#fa9e1f] shadow-none rounded-none",
        }}
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {headers.map(({ label,value}) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody 
        animate={{ mount: { opacity: 1 }, unmount: { opacity: 0 } }}
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >

{activeTab === "investment1" && (
  <div className="mt-10">

  <Table data={data} tableHead={tableHead}>
              {data.map((table: any, index: number) => (
                <tr key={index}>
                  <td className="px-2">{index + 1}</td>
                  <td className="py-2 px-2">{table.amountInvested}</td>
                  <td className="px-2">{table.expectedAmount}</td>
                  <td className="px-2">{table.startDate}</td>
  
                  <td
                    className={` text-[15px]  ${
                      table.completed ? "text-green-700" : "text-[#fa9e1f] "
                    }`}
                  >
                    {table.completed ? "Completed" : "Pending"}
                  </td>
                  <td
                    className=" py-2 rounded-md text-[#fa9e1f] text-center cursor-pointer flex gap-1 items-center"
                    onClick={() => viewDetails(table)}>
                    <FaRegArrowAltCircleRight />
                    <p className="text-black">View Details</p>
                  </td>
                </tr>
              ))}
            </Table>
            </div>
)}

    {/* activetab  */}
        {activeTab === "investment2" && (<>
        

       <div className="mt-10">

        <Table data={data} tableHead={tableHead}>
            {data.map((table: any, index: number) => (
              <tr key={index}>
                <td className="px-2">{index + 1}</td>
                <td className="py-2 px-2">{table.amountInvested}</td>
                <td className="px-2">{table.expectedAmount}</td>
                <td className="px-2">{table.startDate}</td>

                <td
                  className={` text-[15px]  ${
                    table.completed ? "text-green-700" : "text-[#fa9e1f] "
                  }`}
                >
                  {table.completed ? "Completed" : "Pending"}
                </td>
                <td
                  className=" py-2 rounded-md text-[#fa9e1f] text-center cursor-pointer flex gap-1 items-center"
                  onClick={() => viewDetails(table)}>
                  <FaRegArrowAltCircleRight />
                  <p className="text-black">View Details</p>
                </td>
              </tr>
            ))}
          </Table>
          </div>
        </>)}

      </TabsBody>
    </Tabs>
    </div>
  )
}

export default AdminInvestment
