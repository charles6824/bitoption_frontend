import { useEffect, useState } from "react";
import { Table } from "../../components/Table";
import {
	useAllUsersQuery,
	useUpdateUserMutation,
	useUpdateUserProfileMutation,
} from "../../slices/baseApiSlice";
import PromptsCard from "../../components/PromptsCard";
import Modal from "../../components/Modal";
import LoadingComponent from "../../components/LoadingComponent";
import LoadingBtn from "../../components/LoadingBtn";
import { toast } from "react-toastify";
const tableHead: any = ["S/N", "Name", "Email", "Status", "Action", ""];

// const data:any = [
//     {
//       id:"1",
//         name:'Daniel Charles',
//         email:'daniel@example.com',
//         status:'Active',
//         action: (
//             <div className="flex space-x-2">

//               <button className="bg-red-500 text-[14px] hover:bg-red-600 text-white font-medium py-1 px-4 rounded-full shadow-sm transition duration-200">
//                 Block
//               </button>
//             </div>
//           ),
//     },
//     {
//       id:"2",
//       name:'John Doe',
//        email:'john@example.com',
//        status:'Inactive',
//        action: (
//         <div className="flex space-x-2">

//           <button className="bg-red-500 text-[14px] hover:bg-red-600 text-white font-medium py-1 px-4 rounded-full shadow-sm transition duration-200">
//             Block
//           </button>
//         </div>
//       ),

//     },

//     {
//       id:"3",
//       name:'Jane Smith',
//        email:'jane@example.com',
//        status:'Active',
//        action: (
//         <div className="flex space-x-2">

//           <button className="bg-red-500 text-[14px] hover:bg-red-600 text-white font-medium py-1 px-4 rounded-full shadow-sm transition duration-200">
//             Block
//           </button>
//         </div>
//       ),

//     },

//   ]

const AdminUsers = () => {
	const [data, setData] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState<any>({});
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { isLoading, data: userData, refetch } = useAllUsersQuery({}) as any;

	const [updateUser, { isLoading: userLoading }] = useUpdateUserMutation();
	const [updateUserProfile, { isLoading: userProfileLoading }] =
		useUpdateUserProfileMutation();

	useEffect(() => {
		if (userData && userData.status) {
			setData(userData.data);
		} else {
			setData([]);
		}
	}, [userData]);

	const handleAction = (item: any) => {
		setShowModal(true);
		setSelectedItem(item);
	};

	const handleEdit = (item: any) => {
		setShowModal(false);
		setShowEditModal(true);
		setSelectedItem(item);
		setFullName(item.fullName);
		setEmail(item.email);
		setPassword("");
	};

	const handleStatusUpdate = async () => {
		try {
			const response: any = await updateUser(selectedItem._id).unwrap();
			if (response.status) {
				toast.success(response.message);
				setShowModal(false);
				refetch();
			} else {
				toast.error(response.message);
			}
		} catch (error: any) {
			toast.error(error.data.message);
		}
	};

	const handleUpdateProfile = async () => {
		try {
			const model = {
				fullName: fullName,
				email: email,
				password: password,
			};
			const response: any = await updateUserProfile({
				id: selectedItem._id,
				data: { payload: model },
			}).unwrap();
			if (response.status) {
				toast.success(response.message);
				setShowModal(false);
				setShowEditModal(false);
				refetch();
			} else {
				toast.error(response.message);
			}
		} catch (error: any) {
			toast.error(error.data.message);
		}
	};

	return (
		<div>
			<h1 className="text-[28px]">Users</h1>
			<p className="text-[12px] pb-10">Manage users on the platform</p>
			{isLoading ? (
				<LoadingComponent />
			) : (
				<>
					<Table data={data} tableHead={tableHead}>
						{data &&
							data.map((table: any, index: number) => (
								<tr key={index}>
									<td className="py-3 px-3 text-start">{index + 1}</td>
									<td>{table.fullName}</td>
									<td>{table.email}</td>
									<td>{table.status}</td>
									<td className="pl-4">
										{table.status === "Active" ? (
											<button
												className="px-4 rounded bg-red-700 text-white py-1 text-sm"
												onClick={() => handleAction(table)}
											>
												Deactivate
											</button>
										) : (
											<button
												className="px-4 rounded bg-green-700 text-white py-1 text-sm"
												onClick={() => handleAction(table)}
											>
												Activate
											</button>
										)}
									</td>
									<td>
										<button
											className="px-4 rounded bg-blue-700 text-white py-1 text-sm"
											onClick={() => handleEdit(table)}
										>
											Edit
										</button>
									</td>
								</tr>
							))}
					</Table>

					{showEditModal && (
						<Modal
							isShowCancelButton={true}
							cancelButtonFunction={() => setShowEditModal(false)}
						>
							<div className="w-[45%]">
								<PromptsCard title={""}>
									<div className="p-4  ">
										<h2 className="text-[20px] font-bold text-[#">
											Edit User Profile
										</h2>

										{/* fullName, email and password */}
										<div className="">
											<div className="space-y-5 py-3 w-full">
												<div className="">
													<label htmlFor="">fullName</label>
													<input
														onChange={(e) => setFullName(e.target.value)}
														type="text"
														className="w-full bg-[#f4f4f4] px-4 rounded py-2"
														value={fullName}
													/>
												</div>
												<div className="">
													<label htmlFor="">Email</label>
													<input
														onChange={(e) => setEmail(e.target.value)}
														type="text"
														className="w-full bg-[#f4f4f4] px-4 rounded py-2"
														value={email}
													/>
												</div>
												<div className="">
													<label htmlFor="">Password</label>
													<input
														onChange={(e) => setPassword(e.target.value)}
														type="text"
														className="w-full bg-[#f4f4f4] px-4 rounded py-2"
														value={password}
													/>
												</div>
											</div>

											{userProfileLoading ? (
												<LoadingBtn bg="bg-gray-500" />
											) : (
												<div className="flex gap-2 mt-3 items-center ">
													<button
														className="bg-[#1d1d1d] py-2 px-5 text-white"
														onClick={handleUpdateProfile}
													>
														Update Profile
													</button>
													<button
														className="bg-[red] py-2 px-5 text-white"
														onClick={() => setShowEditModal(false)}
													>
														Close
													</button>
												</div>
											)}
										</div>
									</div>
								</PromptsCard>
							</div>
						</Modal>
					)}

					{showModal && (
						<Modal
							isShowCancelButton={true}
							cancelButtonFunction={() => setShowModal(false)}
						>
							<div className="w-[40%]">
								<PromptsCard title={""}>
									<div className="p-6 text-center ">
										<h2 className="text-[20px] font-bold text-red-600">
											{selectedItem && selectedItem?.status === "Active"
												? "Deactivate"
												: "Activate"}{" "}
											User
										</h2>
										<p className="mt-4">
											Are you sure you want to{" "}
											{selectedItem && selectedItem?.status === "Active"
												? "Deactivate"
												: "Activate"}
											<b>{selectedItem?.fullName}</b>?
										</p>
										{userLoading ? (
											<div>
												<LoadingBtn bg="bg-gray-500" />
											</div>
										) : (
											<div className="flex justify-center gap-4 mt-6">
												<button
													className="bg-gray-500 px-6 py-2 rounded text-white"
													onClick={() => setShowModal(false)}
												>
													Cancel
												</button>
												<button
													className="bg-red-600 px-6 py-2 rounded text-white"
													onClick={handleStatusUpdate}
												>
													{selectedItem && selectedItem?.status === "Active"
														? "Deactivate"
														: "Activate"}{" "}
													User
												</button>
											</div>
										)}
									</div>
								</PromptsCard>
							</div>
						</Modal>
					)}
				</>
			)}
		</div>
	);
};

export default AdminUsers;
