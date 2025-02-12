import { Table } from '../../components/Table'
const tableHead:any = ["S/N", "Name", "Email", "Status", "Action",""]

const data:any = [
    {
      id:"1",
        name:'Daniel Charles',
        email:'daniel@example.com',
        status:'Active',
        action: (
            <div className="flex space-x-2">
              
              <button className="bg-red-500 text-[14px] hover:bg-red-600 text-white font-medium py-1 px-4 rounded-full shadow-sm transition duration-200">
                Block
              </button>
            </div>
          ),
    },
    {
      id:"2",
      name:'John Doe',
       email:'john@example.com',
       status:'Inactive',
       action: (
        <div className="flex space-x-2">
          
          <button className="bg-red-500 text-[14px] hover:bg-red-600 text-white font-medium py-1 px-4 rounded-full shadow-sm transition duration-200">
            Block
          </button>
        </div>
      ),
      
      
    },
  
    {
      id:"3",
      name:'Jane Smith',
       email:'jane@example.com',
       status:'Active',
       action: (
        <div className="flex space-x-2">
          
          <button className="bg-red-500 text-[14px] hover:bg-red-600 text-white font-medium py-1 px-4 rounded-full shadow-sm transition duration-200">
            Block
          </button>
        </div>
      ),
       

    },
    
   
  ]

const AdminUsers = () => {
  return (
    <div>
      <h1 className="text-[28px]">Users</h1>
      <p className="text-[12px] pb-10">Manage users on the platform</p>
        <Table data={data} tableHead={tableHead}>
            {data && data.map((table:any)=>(
                <tr key={table.id}>
                    <td className='py-3 px-3 text-start'>{table.id}</td>
                    <td>{table.name}</td>
                    <td>{table.email}</td>
                    <td>{table.status}</td>
                    <td className=''>{table.action}</td>

                </tr>

            ))}


        </Table>
      
    </div>
  )
}

export default AdminUsers
