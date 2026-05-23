import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Video,
  Link2,
  Calendar,
  Clock3,
  User
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <Video size={28} />
        <h2>Meeting Basum</h2>
      </div>

      <nav className="sidebar-links">
        <NavLink to="/" end>
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink to="/new-meeting">
          <Video size={20} />
          New Meeting
        </NavLink>

        <NavLink to="/join-meeting">
          <Link2 size={20} />
          Join Meeting
        </NavLink>

        <NavLink to="/calendar">
          <Calendar size={20} />
          Calendar
        </NavLink>

        <NavLink to="/schedule-meeting">
          <Clock3 size={20} />
          Schedule Meeting
        </NavLink>

        <NavLink to="/profile-settings">
          <User size={20} />
          Profile Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;