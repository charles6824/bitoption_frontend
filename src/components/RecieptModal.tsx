import React, { useRef, useState } from "react";
import Logo from "../assets/images/247.png"
import { FaCircle, FaTimes } from "react-icons/fa";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const RecieptModal: React.FC<any> = ({ show,selectedItem,formatDate }) => {
	const receiptRef = useRef<any>(null);

	const [downloadProgress, setDownloadProgress] = useState(0);
	const [isDownloading, setIsDownloading] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);

	const downloadReceiptAsPNG = async () => {
		if (receiptRef.current) {
			setIsDownloading(true);
			for (let i = 0; i <= 100; i++) {
				setDownloadProgress(i);
				await new Promise((resolve) => setTimeout(resolve, 10)); 
			}
			html2canvas(receiptRef.current).then((canvas: any) => {
				const link = document.createElement("a");
				link.href = canvas.toDataURL("image/png");
				link.download = "receipt.png";
				link.click();
				setIsDownloading(false);
				setDownloadProgress(0);
			});
		}
	};

	const downloadReceiptAsPDF = async () => {
		if (receiptRef.current) {
			setIsDownloading(true);
			for (let i = 0; i <= 100; i++) {
				setDownloadProgress(i);
				await new Promise((resolve) => setTimeout(resolve, 10));
			}
			html2canvas(receiptRef.current).then((canvas: any) => {
				const imgData = canvas.toDataURL("image/png");
				const pdf = new jsPDF({
					orientation: "portrait",
					unit: "px",
					format: [345, 649],
				});
				pdf.addImage(imgData, "PNG", 0, 0, 345, 649);
				pdf.save("receipt.pdf");
				setIsDownloading(false);
				setDownloadProgress(0);
			});
		}
	};

	const shareReceipt = async () => {
		if (receiptRef.current) {
			html2canvas(receiptRef.current).then((canvas):any => {
				canvas.toBlob(async (blob: any) => {
					if (blob) {
						const filesArray = [
							new File([blob], "receipt.png", {
								type: "image/png",
								lastModified: new Date().getTime(),
							}),
						];
						if (navigator.share) {
							try {
								await navigator.share({
									title: "Transaction Receipt",
									text: "Here is the receipt of your recent transaction.",
									files: filesArray,
								});
							} catch (error) {
								console.error("Sharing failed", error);
							}
						} else {
							console.warn("Web Share API is not supported in your browser.");
						}
					} else {
						console.error("Blob creation failed.");
					}
				});
			});
		}
	};

	const handleDownload = (type: any) => {
		setShowDropdown(false);
		if (type === "image") {
			downloadReceiptAsPNG();
		} else if (type === "pdf") {
			downloadReceiptAsPDF();
		}
	};

	

	return (
		<div className="fixed inset-0 flex flex-col items-center justify-center bg-[#3E4652] bg-opacity-90 z-50">
			<button
				className="absolute top-4 right-4 rounded-full border-2 p-2"
				onClick={() => show(false)}
			>
				<FaTimes className="text-[#fa9e1f]" />
			</button>
			<div className="flex justify-between mb-3 pt-2">
				<div className="relative">
					<button
						className={`relative z-10 text-[14px] px-4 py-2 rounded-[10px] mr-2 text-white font-normal ${
							isDownloading
								? "border-[#fa9e1f] border-x-2 border-y-[1.5px]"
								: "border-[#fa9e1f] bg-[#1d1d1d] border-x-2 border-y-[1.5px]"
						}`}
						onClick={() => setShowDropdown(!showDropdown)}
						disabled={isDownloading}
					>
						{isDownloading
							?   `Downloading ${downloadProgress}%`
							: "Download Receipt"}
					</button>
					{isDownloading && (
						<div
							className="absolute top-0 left-0 h-full bg-[#012E63] rounded-[10px] z-0"
							style={{
								width:`${downloadProgress}%`,
								transition: "width 0.1s linear",
							}}
						></div>
					)}
					{showDropdown && (
						<div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20">
							<button
								className="block w-full px-4 py-2 text-left text-black hover:bg-gray-100 rounded-t-lg"
								onClick={() => handleDownload("image")}
							>
								IMAGE
							</button>
							<button
								className="block w-full px-4 py-2 text-left text-black hover:bg-gray-100 rounded-b-lg"
								onClick={() => handleDownload("pdf")}
							>
								PDF
							</button>
						</div>
					)}
				</div>
				<button
					className="text-[14px] px-6 py-2 rounded-[10px] mr-2 text-white font-normal bg-[#1d1d1d] border-[#fa9e1f] border-x-2 border-y-[1.5px]"
					onClick={shareReceipt}
				>
					Share Receipt
				</button>
			</div>
			<div
				className="bg-white w-[345px] rounded-lg relative shadow-2xl"
				ref={receiptRef}
			>
				<div className="bg-[#1d1d1d] h-32 text-white flex flex-col justify-center items-center rounded-t-lg">
                 <img src={Logo} alt="logo" loading="lazy" className=" w-auto" />
               <h2 className="mt-1 text-sm">Transaction Receipt</h2>
               </div>

				<div className="text-center py-8 border-b-[0.1px] border-[#f6f7f9]">
					<h3 className="text-[13px] font-bold text-[#fa9e1f] uppercase">
						Transaction Success!
					</h3>
					<p className="text-[28px] font-semibold text-[#3E4652] mt-2">
                    ${Number(selectedItem?.amount).toLocaleString("en-US", {minimumFractionDigits: 2,
                    maximumFractionDigits: 2,})}
					</p>
				</div>
				<div className="p-7">
					<p className="text-[#000] text-[12px] font-medium pb-2">
                        Description
					</p>
					<p className="text-[13px] text-[#3E4652] leading-5 font-normal">
						{selectedItem.description}
                        
					</p>
					<div className="pt-5 flex flex-col justify-between ">
						<div className="pb-3">
							<p className="text-[12px] font-normal text-[#AFAFAF]">
                                Date
							</p>
							<p className="uppercase text-[12px] font-normal text-[#3E4652]">
								{formatDate(selectedItem.date)}
							</p>
						</div>
						<div className="mb-3">
							<p className="text-[12px] font-normal text-[#AFAFAF] ">TransactionID</p>
							<p className="uppercase text-[12px] font-normal text-[#3E4652]">
								{selectedItem.reference}
							</p>
						</div>
						<div>
							<p className="text-[12px] font-normal text-[#AFAFAF]">Status</p>
							<p className="uppercase text-[12px] font-normal text-[#3E4652]">
								{selectedItem.status === "completed" ? (
                                      <div className="flex items-center gap-2">
                                        <FaCircle size={8} color="green" />
                                         <p>Successful</p>
                                        </div>
                                    ) : selectedItem.status === "pending" ? (
                                   <div className="flex items-center gap-2">
                                    <FaCircle size={8} color="orange" />
                                                                               
                                     <p>Pending</p>
                                  </div>
                                     ) : (
                                <div className="flex items-center gap-2">
                                <FaCircle size={8} color="red" />
                                 <p>Failed</p>
                                 </div>
                             )}
							</p>
						</div>
						
					</div>
				</div>
				
                <div>
                    
                </div>
				
			</div>
			
		</div>
	);
};

export default RecieptModal;