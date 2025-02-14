
import { Tab, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useState } from "react";
import { Table } from "../../components/Table";
import { FaRegArrowAltCircleRight, FaTimesCircle } from "react-icons/fa";
import Modal from "../../components/Modal";
import PromptsCard from "../../components/PromptsCard";
import { useFetchAllInvestmentsQuery } from "../../slices/investmentSlice";

const AdminInvestment = () => {
   const [activeTab, setActiveTab] = useState("investment1");
   const {data} = useFetchAllInvestmentsQuery({}) as any
   console.log('data', data)
   

   const [selectedItem, setSelectedItem] = useState<any|null>(null);
  const [showModal,setShowModal] = useState(false)

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

  
  
  const viewDetails = (item:any) => {
    setSelectedItem(item)
    setShowModal(true)
  }


  console.log('selected item',selectedItem);
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

    {showModal && (
						<Modal
							isShowCancelButton={false}
							cancelButtonFunction={() => setShowModal(false)}
						>
							<div className="p-10">
								<PromptsCard title={""}>
									<div className="p-6 flex flex-col justify-center items-center relative">
										{/* Close Button Positioned Properly */}
										<div className="absolute top-2 right-2">
											<FaTimesCircle
												size={40}
												onClick={() => setShowModal(!showModal)}
												className="cursor-pointer text-gray-600 hover:text-gray-800"
											/>
										</div>

										<h2 className="text-lg font-semibold text-[30px] mb-3">
											Transaction Details
										</h2>
                          {selectedItem?.expectedAmount || "N/A"}
										<div className="max-w-lg mx-auto p-5 bg-white shadow-lg rounded-lg border border-gray-200">
											<div className="space-y-6 text-gray-700">
											
												
												
												<p>
													<strong>Amount to Receive:</strong> $
													{selectedItem?.expectedAmount}
												</p>
												<p>
													<strong>Expected Amount:</strong>{" "}
													{selectedItem?.amountInvested}
												</p>
												<p>
													<strong>Start Date:</strong>{" "}
													{selectedItem?.startDate
														? new Date(
																selectedItem.startDate
														  ).toLocaleDateString()
														: "N/A"}
												</p>

												<p>
													<strong>Status:</strong>{" "}
													{selectedItem?.status ? "succesful" : "Failed"}
												</p>
												
											</div>
										</div>
									</div>
								</PromptsCard>
							</div>
						</Modal>
					)}



    
    </div>
  )
}

export default AdminInvestment
