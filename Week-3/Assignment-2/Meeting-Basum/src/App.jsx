import { Routes, Route } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";

import Dashboard from "./pages/Dashboard";
import NewMeeting from "./pages/NewMeeting";
import JoinMeeting from "./pages/JoinMeeting";
import Calendar from "./pages/Calendar";
import ScheduleMeeting from "./pages/ScheduleMeeting";
import ProfileSettings from "./pages/ProfileSettings";
import NotFound from "./pages/NotFound";

import MeetingLayout from "./pages/meeting/MeetingLayout";
import MeetingDetails from "./pages/meeting/MeetingDetails";
import MeetingParticipants from "./pages/meeting/MeetingParticipants";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />

        <Route
          path="new-meeting"
          element={<NewMeeting />}
        />

        <Route
          path="join-meeting"
          element={<JoinMeeting />}
        />

        <Route
          path="calendar"
          element={<Calendar />}
        />

        <Route
          path="schedule-meeting"
          element={<ScheduleMeeting />}
        />

        <Route
          path="profile-settings"
          element={<ProfileSettings />}
        />

        <Route
          path="meetings/:meetingId"
          element={<MeetingLayout />}
        >
          <Route
            index
            element={<MeetingDetails />}
          />

          <Route
            path="participants"
            element={<MeetingParticipants />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;