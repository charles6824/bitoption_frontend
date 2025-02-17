import { useState } from "react";
import LoadingComponent from "../../components/LoadingComponent";
import { Table } from "../../components/Table";
import { useFetchUserInvestmentQuery } from "../../slices/investmentSlice";
import Modal from "../../components/Modal";
import PromptsCard from "../../components/PromptsCard";
import { FaRegArrowAltCircleRight, FaTimesCircle } from "react-icons/fa";
import { Data } from "../../interface/package";
import BackButton from "../../components/BackButton";

const Investment = () => {
	const tableHead = [
		"S/N",
		"Amount Invested",
		"Expected Amount",
		"Start Date",
		"Status",
		" ",
	];

	const [selectedItem, setSelectedItem] = useState<Data | null>(null);
	const [showModal, setShowModal] = useState(false);

	const { isLoading, data } = useFetchUserInvestmentQuery({}) as any;

	const viewDetails = (item: Data) => {
		setSelectedItem(item);
		setShowModal(true);
	};

	return (
		<div>
			<BackButton/>
			<h1 className="text-[28px] mb-6">Investments</h1>
			{isLoading ? (
				<LoadingComponent />
			) : (
				<>
					<Table data={data?.data} tableHead={tableHead}>
						{data?.data.map((table: any, index: number) => (
							<tr key={index}>
								<td className="px-2">{index + 1}</td>
								<td className="py-2 px-2">${table.amount}</td>
								<td className="px-2">${table.amountToReceive}</td>
								<td className="px-2">{table.createdAt}</td>

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

										<div className="max-w-lg mx-auto p-5 bg-white shadow-lg rounded-lg border border-gray-200">
											<div className="space-y-6 text-gray-700">
												<p>
													<strong>Transaction ID:</strong>{" "}
													{selectedItem?.transactionID}
												</p>
												<p>
													<strong>Package ID:</strong> {selectedItem?.package}
												</p>
												<p>
													<strong>Amount:</strong> ${selectedItem?.amount}
												</p>
												<p>
													<strong>Amount to Receive:</strong> $
													{selectedItem?.amountToReceive}
												</p>
												<p>
													<strong>Paid:</strong>{" "}
													{selectedItem?.paid ? "True" : "False"}
												</p>
												<p>
													<strong>Payment Date:</strong>{" "}
													{selectedItem?.paymentDate
														? new Date(
																selectedItem.paymentDate
														  ).toLocaleDateString()
														: "N/A"}
												</p>

												<p>
													<strong>Completed:</strong>{" "}
													{selectedItem?.completed ? "succesful" : "Failed"}
												</p>
												<p>
													<strong>Updated Price:</strong> $
													{selectedItem?.updatedPrice}
												</p>
											</div>
										</div>
									</div>
								</PromptsCard>
							</div>
						</Modal>
					)}{" "}
				</>
			)}
		</div>
	);
};

export default Investment;
