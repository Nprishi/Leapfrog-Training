import { NavLink, Outlet, useParams } from "react-router-dom";

function MeetingLayout() {
  const { meetingId } = useParams();

  return (
    <div>
      <h1>Meeting ID: {meetingId}</h1>

      <nav>
        <NavLink to="">Details</NavLink>
        <NavLink to="participants">Participants</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default MeetingLayout;