import { useEffect, useState } from "react";

const Timer = () => {

    const [otpSecondsTimer, setOtpSecondsTimer] = useState<number>(0);
	const [otpMinutesTimer, setOtpMinutesTimer] = useState<number>(5);
	const [otpTimerIsRunning, setOtpTimerIsRunning] = useState<boolean>(false);


    useEffect(() => {
		let interval: NodeJS.Timeout;
		if (otpTimerIsRunning) {
			interval = setInterval(() => {
				if (otpSecondsTimer > 0) {
					setOtpSecondsTimer(otpSecondsTimer - 1);
				}

				if (otpSecondsTimer === 0) {
					if (otpMinutesTimer === 0) {
						clearInterval(interval);
						setOtpTimerIsRunning(false);
					} else {
						setOtpSecondsTimer(59);
						setOtpMinutesTimer(otpMinutesTimer - 1);
					}
				}
			}, 1000);
		}
		return () => {
			clearInterval(interval);
		};
	}, [otpSecondsTimer, otpTimerIsRunning]);
  return (
    <div>

<div className="flex  whaleBlue text-[0.7rem] justify-between">
          <p>
            {otpMinutesTimer < 10 ? `0${otpMinutesTimer}` : otpMinutesTimer} :
            {otpSecondsTimer < 10 ? `0${otpSecondsTimer}` : otpSecondsTimer}
          </p>

          {otpSecondsTimer > 0 || otpMinutesTimer > 0 ? (
            <p className="text-[#ccc]">Resend OTP</p>
          ) : resendOtpLoad ? (
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 border-4 border-[#556070] border-dotted rounded-full animate-spin mr-4"></div>
              <p className="text-[#ccc]">Resend OTP</p>
            </div>
          ) : (
            <button
            //   onClick={resendOtp}
              className={
                otpSecondsTimer > 0 || otpMinutesTimer > 0 ? "hidden" : "block"
              }
              disabled={otpSecondsTimer > 0 || otpMinutesTimer > 0}
            >
              Resend OTP
            </button>
          )}
        </div>
      
    </div>
  )
}

export default Timer
