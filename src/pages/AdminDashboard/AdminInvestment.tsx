import { Tab, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Table } from "../../components/Table";
import { FaRegArrowAltCircleRight, FaRegTimesCircle, FaTimesCircle } from "react-icons/fa";
import Modal from "../../components/Modal";
import PromptsCard from "../../components/PromptsCard";
import { useFetchAllInvestmentsQuery } from "../../slices/investmentSlice";
import LoadingComponent from "../../components/LoadingComponent";

const AdminInvestment = () => {
	const [activeTab, setActiveTab] = useState("investment1");
	const { data, isLoading } = useFetchAllInvestmentsQuery({}) as any;
	console.log("data", data);

	const [selectedItem, setSelectedItem] = useState<any | null>(null);
	const [showModal, setShowModal] = useState(false);
  const [pending, setPending] = useState<any>([]);
	const [completed, setCompleted] = useState<any>([]);

	const headers = [
		{
			label: "Ongoing Investment",
			value: "investment1",
		},

		{
			label: "Completed Investment",
			value: "investment2",
		},
	];
	const tableHead = [
		"S/N",
		"Amount Invested",
		"Expected Amount",
		"Start Date",
		"Status",
		"Action",
	];

	const viewDetails = (item: any) => {
		setSelectedItem(item);
		setShowModal(true);
	};

	console.log("selected item", selectedItem);

    useEffect(() => {
      if (data && data.data.length > 0) {
        setPending(data.data.filter((data: any) => data.completed !== true));
        setCompleted(
          data.data.filter((data: any) => data.status === true)
        );
      } else {
        setPending([]);
        setCompleted([]);
      }
    }, [data]);

	return (
		<div>
			<h1 className="text-[28px]">Investments</h1>
			<p className="text-[12px]">View users Investments</p>
			<div className="py-6">
				{isLoading ? (
					<LoadingComponent />
				) : (
					<>
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
								{headers.map(({ label, value }) => (
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
										<Table data={pending} tableHead={tableHead}>
											{pending && pending.map((table: any, index: number) => (
												<tr key={index}>
													<td className="px-2">{index + 1}</td>
													<td className="py-2 px-2">${Number(table.amount).toLocaleString()}</td>
													<td className="px-2">${Number(table.amountToReceive).toLocaleString()}</td>
													<td className="px-2">{String(table.createdAt).substring(0,10)}</td>

													<td
														className={` text-[15px]  ${
															table.completed
																? "text-green-700"
																: "text-[#fa9e1f] "
														}`}
													>
														{table.completed ? "Completed" : "Pending"}
													</td>
													<td
														className=" py-2 rounded-md text-[#fa9e1f] text-center cursor-pointer flex gap-1 items-center"
														onClick={() => viewDetails(table)}
													>
														<FaRegArrowAltCircleRight />
														<p className="text-black">View Details</p>
													</td>
												</tr>
											))}
										</Table>
									</div>
								)}

								{/* activetab  */}
								{activeTab === "investment2" && (
									<>
										<div className="mt-10">
											<Table data={completed} tableHead={tableHead}>
												{completed && completed.map((table: any, index: number) => (
													<tr key={index}>
														<td className="px-2">{index + 1}</td>
													<td className="py-2 px-2">${Number(table.amount).toLocaleString()}</td>
													<td className="px-2">${Number(table.amountToReceive).toLocaleString()}</td>
													<td className="px-2">{String(table.createdAt).substring(0,10)}</td>

														<td
															className={` text-[15px]  ${
																table.completed
																	? "text-green-700"
																	: "text-[#fa9e1f] "
															}`}
														>
															{table.completed ? "Completed" : "Pending"}
														</td>
														<td
															className=" py-2 rounded-md text-[#fa9e1f] text-center cursor-pointer flex gap-1 items-center"
															onClick={() => viewDetails(table)}
														>
															<FaRegArrowAltCircleRight />
															<p className="text-black">View Details</p>
														</td>
													</tr>
												))}
											</Table>
										</div>
									</>
								)}
							</TabsBody>
						</Tabs>
						{showModal && (
							<Modal>
              <div className="p-2 w-[45%]">
                <div className="bg-white relative px-6 py-[40px] w-full">
                  <div className="flex justify-start items-center">
                    <div className="w-full">
                      <div className="flex justify-between items-center">
                        <div>
                          <h1 className="text-[28px]">Investment Details</h1>
                        </div>
                        <FaRegTimesCircle
                          size={25}
                          className="text-red-500 cursor-pointer"
                          onClick={() => setShowModal(false)}
                        />
                      </div>
    
                      <div className="space-y-4 py-3">
                        <div className="">
                          <label htmlFor="">Investment ID</label>
                          <input
                            type="text"
                            className="w-full bg-[#f4f4f4] px-4 rounded py-2"
                            value={selectedItem?._id}
                            readOnly
                          />
                        </div>
                        <div className="">
                          <label htmlFor="">Amount Invested</label>
                          <input
                            type="text"
                            className="w-full bg-[#f4f4f4] px-4 rounded py-2"
                            value={`$${selectedItem?.amount}`}
                            readOnly
                          />
                        </div>
                        <div className="">
                          <label htmlFor="">Expected Amount</label>
                          <input
                            type="text"
                            className="w-full bg-[#f4f4f4] px-4 rounded py-2"
                            value={`$${selectedItem?.amountToReceive}`}
                            readOnly
                          />
                        </div>
                        <div className="">
                          <label htmlFor="">Progress realized</label>
                          <input
                            type="text"
                            className="w-full bg-[#f4f4f4] px-4 rounded py-2"
                            value={`$${selectedItem?.updatedPrice}`}
                            readOnly
                          />
                        </div>
                        <div className="">
                          <label htmlFor="">Reference</label>
                          <input
                            type="text"
                            className="w-full bg-[#f4f4f4] px-4 rounded py-2"
                            value={String(selectedItem?.createdAt).substring(0, 10)}
                            readOnly
                          />
                        </div>
                        <div className="">
                          <label htmlFor="">Status</label>
                          <input
                            type="text"
                            className="w-full bg-[#f4f4f4] px-4 rounded py-2"
                            value={selectedItem?.completed ? "Completed" : "Pending"}
                            readOnly
                          />
                        </div>
    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default AdminInvestment;
