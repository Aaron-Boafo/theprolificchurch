import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const ThemeAlert = ({ targetDate, programName, handleClose }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const now = new Date();
  const navigate = useNavigate();

  // Fix hydration issues by only rendering after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRegister = () => {
    navigate("https://forms.gle/vLgqaxHyu7t9odYF6");
  };

  useEffect(() => {
    if (!mounted) return;

    const calculateTimeLeft = () => {
      const now = dayjs();
      const end = dayjs(targetDate);
      const diff = end.diff(now);

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    // Calculate immediately and then set up interval
    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate, mounted]);

  if (!visible || !mounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-6">
      <div className="relative bg-white  p-6 rounded-lg shadow-xl max-w-md w-full transform transition-all">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-slate-100  transition-colors"
          aria-label="Close alert"
        >
          <X size={18} className="text-slate-500" />
        </button>

        <div className="text-center">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-slate-700 ">
            {programName} Registration Alert
          </h2>

          <p className="mt-2 text-sm text-slate-600 ">
            {now > targetDate ? (
              "Registration is Open Now"
            ) : (
              <>
                Registration will be open until{" "}
                <span className="font-semibold text-primary">
                  {dayjs(targetDate).format("MMMM D, YYYY [at] h:mm A")}
                </span>
              </>
            )}
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <div className="flex flex-col items-center p-2 bg-slate-100  rounded min-w-[60px]">
              <span className="text-2xl font-bold text-slate-700">
                {timeLeft.days}
              </span>
              <span className="text-xs text-slate-500 ">Days</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-slate-100  rounded min-w-[60px]">
              <span className="text-2xl font-bold text-slate-700">
                {timeLeft.hours}
              </span>
              <span className="text-xs text-slate-500 ">Hours</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-slate-100  rounded min-w-[60px]">
              <span className="text-2xl font-bold text-slate-900">
                {timeLeft.minutes}
              </span>
              <span className="text-xs text-slate-500 ">Minutes</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-slate-100  rounded min-w-[60px]">
              <span className="text-2xl font-bold text-slate-900 ">
                {timeLeft.seconds}
              </span>
              <span className="text-xs text-slate-500 ">Seconds</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 justify-center">
            <button
              onClick={handleRegister}
              className="px-6 py-2 w-full bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeAlert;
