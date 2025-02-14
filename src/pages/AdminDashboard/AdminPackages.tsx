import { FaEdit, FaPlus, FaRegTimesCircle, FaTimesCircle, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Table } from "../../components/Table";
import Modal from "../../components/Modal";
import PromptsCard from "../../components/PromptsCard";
import { toast } from "react-toastify";
import {
	useCreatePackageMutation,
	useDeletePackageMutation,
	useGetAllPackagesQuery,
	useUpdatePackageMutation,
} from "../../slices/packageSlice";
import LoadingComponent from "../../components/LoadingComponent";
import LoadingBtn from "../../components/LoadingBtn";

const AdminPackages = () => {
	const [showModal, setShowModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [data, setData] = useState<any>(null);
	const [selectedPackage, setSelectedPackage] = useState<any>(null);
	const [packageToDelete, setPackageToDelete] = useState<any>(null);
	const [name, setName] = useState("");
	const [amount, setAmount] = useState(0);
	const [interest, setInterest] = useState(0);
	const [duration, setDuration] = useState(0);

	const {
		isLoading: packageLoading,
		data: packageData,
		refetch,
	} = useGetAllPackagesQuery({}) as any;

	const [deletePackage, { isLoading: deleteLoading }] =
		useDeletePackageMutation();
	const [updatePackage, { isLoading: updateLoading }] =
		useUpdatePackageMutation();
	const [createPackage, { isLoading: createLoading }] =
		useCreatePackageMutation();

	const tableHead = [
		"S/N",
		" Name",
		"Amount",
		"Interest",
		"Duration",
		"Action",
		"",
	];

	const openAddModal = () => {
		setIsEditing(false);
		setSelectedPackage(null);
		setShowModal(true);
		setName("");
		setAmount(0);
		setInterest(0);
		setDuration(0);
	};

	const openEditModal = (pkg: any) => {
		setIsEditing(true);
		setSelectedPackage(pkg);
		setShowModal(true);
		setName(pkg.name);
		setAmount(pkg.price);
		setInterest(pkg.interest);
		setDuration(pkg.period);
	};

	const openDeleteModal = (pkg: any) => {
		setPackageToDelete(pkg);
		setShowDeleteModal(true);
	};

	const handleDelete = async () => {
		console.log("Deleting package:", packageToDelete);

		try {
			const response: any = await deletePackage({id: packageToDelete?._id}).unwrap();
			if (response.status) {
				toast.success(response.message);
				setShowModal(false);
				setShowDeleteModal(false);
				setName("");
				setAmount(0);
				setInterest(0);
				setDuration(0);
				refetch();
			} else {
				toast.error(response.message);
			}
		} catch (error: any) {
			toast.error(error.data.message);
		}
	};

	const submitCreate = async () => {
		try {
			const model = {
				name: name,
				price: amount,
				interest: interest,
				period: duration,
			};

			const response: any = await createPackage({
				data: { payload: model },
			}).unwrap();
			if (response.status) {
				toast.success(response.message);
				setShowModal(false);
				setName("");
				setAmount(0);
				setInterest(0);
				setDuration(0);
				refetch();
			} else {
				toast.error(response.message);
			}
		} catch (error: any) {
			toast.error(error.data.message);
		}
	};

	const submitUpdate = async () => {
		try {
			const model = {
				name: name,
				price: amount,
				interest: interest,
				period: duration,
			};

			const response: any = await updatePackage({
				id: selectedPackage._id,
				data: { payload: model },
			}).unwrap();
			if (response.status) {
				toast.success("Package updated successfully");
				setShowModal(false);
				setName("");
				setAmount(0);
				setInterest(0);
				setDuration(0);
				refetch();
			} else {
				toast.error(response.message);
			}
		} catch (error: any) {
			toast.error(error.data.message);
		}
	};

	useEffect(() => {
		if (packageData && packageData.status) {
			setData(packageData);
		} else {
			setData([]);
		}
	}, [packageData]);

	console.log("data: ", data)

	return (
		<>
			<div>
				<h1 className="text-[30px]">Packages</h1>
				<p className="text-[15px]">Create and manage your package</p>

				<div className="float-right mb-10">
					<button
						onClick={openAddModal}
						className="bg-[#fa9e1f] text-white p-3 rounded-md flex items-center"
					>
						<FaPlus /> Add Package
					</button>
				</div>
				{packageLoading ? (
					<>
						{" "}
						<LoadingComponent />{" "}
					</>
				) : (
					<Table data={packageData?.data} tableHead={tableHead}>
						{packageData &&
							packageData?.data.map((table: any, index: number) => (
								<tr key={index}>
									<td className="px-2">{index + 1}</td>
									<td className="py-2 px-2">{table.name}</td>
									<td className="px-2">${table.price}</td>
									<td className="px-2">{table.interest}%</td>
									<td className="px-2">{table.period} days</td>
									<td className="px-2 py-3">
										<div className="flex justify-center items-center gap-3">
											<FaEdit
												className="cursor-pointer"
												onClick={() => openEditModal(table)}
											/>
											<FaTrash
												className="text-red-500 cursor-pointer"
												onClick={() => openDeleteModal(table)}
											/>
										</div>
									</td>
								</tr>
							))}
					</Table>
				)}

				{/* Add/Edit Modal */}
				{showModal && (
					<Modal
						isShowCancelButton={false}
						cancelButtonFunction={() => setShowModal(false)}
					>
						<div className="p-4  w-[45%] ">
							<PromptsCard title="">
								<div className="w-full">
									<div className="absolute top-2 right-2">
										<FaRegTimesCircle
												size={25}
												className="text-red-500 cursor-pointer"
													onClick={() => setShowModal(false)}/>
									</div>
									<h1 className="mb-5 text-center font-bold text-[25px]">
										{isEditing ? "Edit" : "Add"}{" "}
										<span className="text-[#fa9e1f]">Package</span>
									</h1>
									<>
										<div className="py-2">
											<label>Name</label>
											<input
												type="text"
												className="border-2 border-gray-400 p-2 rounded-md w-full"
												value={name}
												onChange={(e) => setName(e.target.value)}
											/>
										</div>
										<div className="py-2">
											<label>Amount</label>
											<input
												type="text"
												className="border-2 border-gray-400 p-2 rounded-md w-full"
												value={amount}
												onChange={(e) => setAmount(Number(e.target.value))}
											/>
										</div>
										<div className="py-2">
											<label>Interest</label>
											<input
												type="text"
												className="border-2 border-gray-400 p-2 rounded-md w-full"
												value={interest}
												onChange={(e) => setInterest(Number(e.target.value))}
											/>
										</div>
										<div className="py-2">
											<label>Duration</label>
											<input
												type="text"
												className="border-2 border-gray-400 p-2 rounded-md w-full bg-gray-500]"
												value={duration}
												onChange={(e) => setDuration(Number(e.target.value))}
											/>
										</div>
										{createLoading || updateLoading ? (
											<div>

												<LoadingBtn bg="bg-gray-500" />
											</div>
										) : (
											<button
												className="bg-[#1d1d1d] w-full py-2 px-7 rounded-sm text-white mt-6"
												onClick={isEditing ? submitUpdate : submitCreate}
											>
												{isEditing ? "Update" : "Add"}
											</button>
										)}
									</>
								</div>
							</PromptsCard>
						</div>
					</Modal>
				)}
							<div>

							</div>

				{/* Delete Confirmation Modal */}
				{showDeleteModal && (
					<Modal
						isShowCancelButton={true}
						cancelButtonFunction={() => setShowDeleteModal(false)}
					>
						<div className="w-[40%]">
							<PromptsCard title={""}>
								<div className="p-6 text-center ">
									<h2 className="text-[20px] font-bold text-red-600">
										Delete Package
									</h2>
									<p className="mt-4">
										Are you sure you want to delete{" "}
										<b>{packageToDelete?.name}</b>?
									</p>
									{deleteLoading ? (
										<LoadingBtn />
									) : (
										<div className="flex justify-center gap-4 mt-6">
											<button
												className="bg-gray-500 px-6 py-2 rounded text-white"
												onClick={() => setShowDeleteModal(false)}
											>
												Cancel
											</button>
											<button
												className="bg-red-600 px-6 py-2 rounded text-white"
												onClick={handleDelete}
											>
												Delete
											</button>
										</div>
									)}
								</div>
							</PromptsCard>
						</div>
					</Modal>
				)}
			</div>
		</>
	);
};

export default AdminPackages;
