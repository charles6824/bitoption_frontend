import React, { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import "../assets/styles/TokenInput.css";

interface TokenInputProps {
	onComplete: (isComplete: boolean, tokens: string[]) => void;
	hideText?: boolean; 
	
}


const TokenInput: React.FC<TokenInputProps> = ({ onComplete, hideText }) => {
	const [tokens, setTokens] = useState<string[]>(Array(6).fill(""));

	useEffect(() => {
		const allFilled = tokens.every((token) => token !== "");
		onComplete(allFilled, tokens);  
	}, [tokens, onComplete]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
		const value = e.target.value;
		if (/^[0-9]?$/.test(value)) {
			// Allow only numbers
			const newTokens = [...tokens];
			newTokens[index] = value;
			setTokens(newTokens);
			if (value && index < 7) {
				const nextInput = document.getElementById(`token-input-${index + 1}`);
				if (nextInput) {
					nextInput.focus();
				}
			}
		}
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
		if (e.key === "Backspace" && tokens[index] === "" && index > 0) {
			const prevInput = document.getElementById(`token-input-${index - 1}`);
			if (prevInput) {
				prevInput.focus();
			}
		}
	};

	return (
		<div>

			{!hideText && (<>
			
            <p className="text-[14px] mb-4 ">Securely confirm your withdrawal by entering your unique token</p>
			
			</>)}
			<p className="text-[15px] font-medium text-[#fff] text-left mb-5">
				Enter the OTP sent to your email..
			</p>
			<div className="flex space-x-3 md:space-x-6 ">
				{tokens.map((token, index) => (
					<div key={index} className="token-input-wrapper">
						<input
							id={`token-input-${index}`}
							type="text"
							maxLength={1}
							value={token}
							onChange={(e) => handleChange(e, index)}
							onKeyDown={(e) => handleKeyDown(e, index)}
							className={`token-input ${token ? "filled" : ""}`}
							autoComplete="off"
						/>
						<div className="token-input-dot"></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TokenInput;