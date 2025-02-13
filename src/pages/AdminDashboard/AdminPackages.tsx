import { FaEdit, FaPlus, FaTimesCircle, FaTrash } from "react-icons/fa"
import { useState } from "react"
import { Table } from "../../components/Table"
import Modal from "../../components/Modal"
import PromptsCard from "../../components/PromptsCard"

const AdminPackages = () => {
  const [showModal, setShowModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<any>(null)
  const [packageToDelete, setPackageToDelete] = useState<any>(null)

  const tableHead = ["S/N", " Name", "Amount", "Interest", "Duration", "Action", ""]

  const data = [
    {
      id: 1,
      name: "Basic Package",
      amount: 5000,
      interest: 5,
      duration: 3,
    },
    {
      id: 2,
      name: "Premium Package",
      amount: 10000,
      interest: 10,
      duration: 6,
    },
  ]

  const openAddModal = () => {
    setIsEditing(false)
    setSelectedPackage(null)
    setShowModal(true)
  }

  const openEditModal = (pkg: any) => {
    setIsEditing(true)
    setSelectedPackage(pkg)
    setShowModal(true)
  }

  const openDeleteModal = (pkg: any) => {
    setPackageToDelete(pkg)
    setShowDeleteModal(true)
  }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   const formData = {
  //     name: (e.target as any).name.value,
  //     amount: (e.target as any).amount.value,
  //     interest: (e.target as any).interest.value,
  //     duration: (e.target as any).duration.value,
  //   };
  
  //   try {
  //     if (isEditing) {
  //       // Edit an existing package
  //       await editPackage({ id: selectedPackage.id, ...formData });
  //     } else {
  //       // ✅ This is the function to add a new package
  //       await addPackage(formData);
  //     }
  //     setShowModal(false);
  //   } catch (error) {
  //     console.error("Error saving package:", error);
  //   }
  // };
  

  const handleDelete = () => {
    console.log("Deleting package:", packageToDelete)
    setShowDeleteModal(false)
  }

  return (
    <>
    <div>
      <h1 className="text-[30px]">Packages</h1>
      <p className="text-[15px]">Create and manage your package</p>

      <div className="float-right mb-10">
        <button onClick={openAddModal} className="bg-[#fa9e1f] text-white p-3 rounded-md flex items-center">
          <FaPlus /> Add Package
        </button>
      </div>

      <Table data={data} tableHead={tableHead}>
        {data.map((table: any, index: number) => (
          <tr key={index}>
            <td className="px-2">{index + 1}</td>
            <td className="py-2 px-2">{table.name}</td>
            <td className="px-2">${table.amount}</td>
            <td className="px-2">{table.interest}%</td>
            <td className="px-2">{table.duration}</td>
            <td className="px-2 py-3">
              <div className="flex justify-center items-center gap-3">
                <FaEdit className="cursor-pointer" onClick={() => openEditModal(table)} />
                <FaTrash className="text-red-500 cursor-pointer" onClick={() => openDeleteModal(table)} />
              </div>
            </td>
          </tr>
        ))}
      </Table>

      {/* Add/Edit Modal */}
      {showModal && (
        <Modal isShowCancelButton={false} cancelButtonFunction={() => setShowModal(false)}>
          <div className="p-10">
            <PromptsCard title="">
              <div>
                <div className="absolute top-2 right-2">
                  <FaTimesCircle size={40} onClick={() => setShowModal(false)} className="cursor-pointer text-[#1d1d1d]" />
                </div>
                <h1 className="mb-5 text-center font-bold text-[25px]">
                  {isEditing ? "Edit" : "Add"} <span className="text-[#fa9e1f]">Package</span>
                </h1>
                <form>
                  <div className="py-2">
                    <label>Name</label>
                    <input
                      type="text"
                      className="border-2 border-gray-400 p-2 rounded-md w-full"
                      defaultValue={isEditing ? selectedPackage?.name : ""}
                    />
                  </div>
                  <div className="py-2">
                    <label>Amount</label>
                    <input
                      type="text"
                      className="border-2 border-gray-400 p-2 rounded-md w-full"
                      defaultValue={isEditing ? selectedPackage?.amount : ""}
                    />  
                  </div>
                  <div className="py-2">
                    <label>Interest</label>
                    <input
                      type="text"
                      className="border-2 border-gray-400 p-2 rounded-md w-full"
                      defaultValue={isEditing ? selectedPackage?.interest : ""}
                    />
                  </div>
                  <div className="py-2">
                    <label>Duration</label>
                    <input
                      type="text"
                      className="border-2 border-gray-400 p-2 rounded-md w-full"
                      defaultValue={isEditing ? selectedPackage?.duration : ""}
                    />
                  </div>

                  <button className="bg-[#1d1d1d] py-2 px-7 rounded-sm text-white mt-6">
                    {isEditing ? "Update" : "Add"}
                  </button>
                </form>
              </div>
            </PromptsCard>
          </div>
        </Modal>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        
        
        <Modal isShowCancelButton={true} cancelButtonFunction={() => setShowDeleteModal(false)}>
          <div className="w-[40%]">
            <PromptsCard  title ={""} >
          <div className="p-6 text-center ">
            <h2 className="text-[20px] font-bold text-red-600">Delete Package</h2>
            <p className="mt-4">Are you sure you want to delete <b>{packageToDelete?.name}</b>?</p>
            <div className="flex justify-center gap-4 mt-6">
              <button className="bg-gray-500 px-6 py-2 rounded text-white" onClick={() => setShowDeleteModal(false)}>
                Cancel
              </button>
              <button className="bg-red-600 px-6 py-2 rounded text-white" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
            </PromptsCard>
        </div>
        </Modal>
      )}
    </div>
    </>
  )
}

export default AdminPackages
