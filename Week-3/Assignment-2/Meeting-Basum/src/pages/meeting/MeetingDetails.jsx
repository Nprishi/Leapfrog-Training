import { useParams } from "react-router-dom";

function MeetingDetails() {
    const { meetingId } = useParams();

    return (
        <div className="meeting-box">
            <h2>Meeting Details</h2>

            <p>
                <strong>Meeting ID:</strong> {meetingId}
            </p>

            <p>
                <strong>Title:</strong> Frontend Team Meeting
            </p>

            <p>
                <strong>Date:</strong> May 25, 2026
            </p>

            <p>
                <strong>Time:</strong> 10:00 AM
            </p>

            <p>
                <strong>Description:</strong> Discussion about UI updates and routing
                structure.
            </p>
        </div>
    );
}

export default MeetingDetails;