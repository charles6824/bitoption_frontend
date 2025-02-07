// import { Table } from "../../components/Table"

import { FaCircle, FaPrint } from "react-icons/fa"
import { Table } from "../../components/Table"
import CashFlowChart from "../../components/CashFlowChart"
import { useState } from "react"
import { MdOutlineLocalPrintshop } from "react-icons/md"
const tableHead:any = ["Narration", "Date", "Amount", "Status", ""]

const data:any = [
  {
    id:"1",
     narration:"Credit from Daniel/paystack",
     date:"16th March ",
     amount :50000,
     iscredit:true
  },
  {
    id:"2",
     narration:"Transfer from fave/zenith",
     date:"12th January ",
     amount :200000,
     iscredit:true
  },

  {
    id:"3",
     narration:"Transfer to Donald/firstBank",
     date:"10th December ",
     amount :100000,
     iscredit:false
  },
  {
    id:"4",
     narration:"Deposit to Daniel",
     date:"25th October ",
     amount :1000,
     iscredit:true
  },
  {
    id:"5",
     narration:"Transfer to Brainz",
     date:"7th November ",
     amount :5000,
     iscredit:false
  },
  {
    id:"6",
     narration:"NMC MAINTENANCE CHARGE",
     date:"25th October ",
     amount :4,
     iscredit:true
  },

  {
    id:"7",
     narration:"Credit from Johnson/firstBank",
     date:"4th August ",
     amount :100,
     iscredit:true
  }
 
]

const Dashboard = () => {

  const [period, setPeriod] = useState('1W');

  // const periods = ['1D', '1W', '1M', '3M', '6M', '1Y'];

  const getDataForPeriod = (period: string) => {
    switch (period) {
      case '1D':
        return {
          labels: ['Today'],
          inflowData: [500],
          outflowData: [300],
        };
      case '1W':
        return {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          inflowData: [300, 500, 400, 600, 700, 500, 800],
          outflowData: [200, 300, 250, 400, 500, 350, 450],
        };
      case '1M':
        return {
          labels: Array.from({ length: 30 }, (_, i) => (i + 1).toString()),
          inflowData: Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000)),
          outflowData: Array.from({ length: 30 }, () => Math.floor(Math.random() * 700)),
        };
      case '3M':
        return {
          labels: ['Jan', 'Feb', 'Mar'],
          inflowData: [3000, 4000, 3500],
          outflowData: [2000, 3000, 2500],
        };
      case '6M':
        return {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          inflowData: [3000, 4000, 3500, 3200, 3600, 4000],
          outflowData: [2000, 3000, 2500, 2100, 2400, 2800],
        };
      case '1Y':
        return {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          inflowData: [3000, 4000, 3500, 3200, 3600, 4000, 4200, 4500, 4300, 4700, 4800, 5000],
          outflowData: [2000, 3000, 2500, 2100, 2400, 2800, 2900, 3100, 2700, 3300, 3500, 3600],
        };
      default:
        return {
          labels: [],
          inflowData: [],
          outflowData: [],
        };
    }
  };

  const { labels, inflowData, outflowData } = getDataForPeriod(period);
  return (

    <>
    <div className="bg-[#fa9e1f] p-2 ">
      <div className="rounded-md text-[#fff] px-7 bg-[#1d1d1d] p-9">
        <div className="flex justify-between items-center">
          <div>
            <p>Account Name</p>
            <h1 className="text-[25px] ">JOHNSON EZRA CHUKWEMEKA</h1>
          </div>
          <div className="flex items-center gap-2">
            <FaCircle size={10} className="text-green-700" />
            <p className="">Active</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
            <div className="mt-5">
          <p className="text-[#fa9e1f] ">Account Number</p>
          <h1>31046473373</h1>
            </div>
          <div>
           <p className="text-[20px] ">$11,000000000000</p> 
            <p>book balance</p>
          </div>
        </div>
      </div>
    </div>
    {/* Table section */}
    <div className="py-5">
      <h1 className="text-[25px] mb-2">Transaction History</h1>
      <Table data={data} tableHead={tableHead} >
        {data && data.map((table:any,index:number) =>
           <tr  key={index}>

            <td className="py-3 ">{table.narration}</td>
            <td>{table.date}</td>
            <td >${table.amount}</td>
            <td>{table.iscredit ? (<div className="flex items-center gap-2">
              <FaCircle size={8} color="green"/>
              <p>succesfull</p>
              </div>)
               :(<div  className="flex items-center gap-2"><FaCircle size={8} color="red"/>
               <p>failed</p>
               
               
               </div>)}</td>
               <td><MdOutlineLocalPrintshop size={23} /></td>
           </tr>
        )}
      </Table>
         
    </div>

{/* chart */}
    <div className="w-full ">
            <CashFlowChart
              inflowData={inflowData}
              outflowData={outflowData}
              labels={labels}
            />
          </div>

    </>
  )
}

export default Dashboard
