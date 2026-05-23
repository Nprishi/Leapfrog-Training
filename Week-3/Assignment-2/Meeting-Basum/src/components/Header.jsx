import { useEffect, useState } from "react";
import {
  Bell,
  ChevronDown,
  Clock3,
  CalendarDays
} from "lucide-react";

function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <header className="header">
      <div></div>

      <div className="header-right">
        <div className="header-date">
          <CalendarDays size={18} />
          {date}
        </div>

        <div className="header-date">
          <Clock3 size={18} />
          {time}
        </div>

        <Bell size={20} className="icon" />

        <div className="profile-box">
          <img src="/public/profileFirst.jpg" alt="profile" />

          <span>Rishi Kesh Nepal</span>

          <ChevronDown size={18} />
        </div>
      </div>
    </header>
  );
}

export default Header;