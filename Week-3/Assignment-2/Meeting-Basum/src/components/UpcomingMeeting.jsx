import { useNavigate } from "react-router-dom";


function UpcomingMeeting({ meeting }) {
    const navigate = useNavigate();

    return (
        <div
            className="upcoming-meeting"
            onClick={() => navigate(`/meetings/${meeting.id}`)}
        >
            <div>
                <h3>{meeting.title}</h3>
                <p>{meeting.time}</p>
            </div>

            <button>View</button>
        </div>
    );
}

export default UpcomingMeeting;