import {
    Video,
    Users,
    CalendarDays
} from "lucide-react";

function Dashboard() {
    const meetings = [
        {
            id: 1,
            title: "Project Planning Meeting",
            host: "Risan Basukala",
            time: "Today, 10:00 AM - 11:00 AM",
            color: "purple"
        },
        {
            id: 2,
            title: "Marketing Strategy",
            host: "Alice",
            time: "Today, 02:00 PM - 03:00 PM",
            color: "green"
        },
        {
            id: 3,
            title: "Team Sync-Up",
            host: "John Doe",
            time: "Tomorrow, 11:00 AM - 12:00 PM",
            color: "orange"
        }
    ];

    return (
        <div className="dashboard">
            <div className="welcome">
                <h1>
                    Good Morning, Rishi ! 
                </h1>

                <p>
                    Here's what's happening with your meetings today.
                </p>
            </div>

            <div className="cards">
                <div className="quick-card purple">
                    <div className="card-icon">
                        <Video />
                    </div>

                    <h3>Start New Meeting</h3>

                    <p>Start an instant meeting</p>

                    <button>Start Now →</button>
                </div>

                <div className="quick-card green">
                    <div className="card-icon">
                        <Users />
                    </div>

                    <h3>Join with Code</h3>

                    <p>Join a meeting with code</p>

                    <button>Join Meeting →</button>
                </div>

                <div className="quick-card orange">
                    <div className="card-icon">
                        <CalendarDays />
                    </div>

                    <h3>Schedule Meeting</h3>

                    <p>Plan your meeting</p>

                    <button>Schedule Now →</button>
                </div>
            </div>

            <div className="meeting-header">
                <h2>Upcoming Meetings</h2>

                <span>View All</span>
            </div>

            <div className="meeting-list">
                {meetings.map((meeting) => (
                    <div
                        key={meeting.id}
                        className="meeting-item"
                    >
                        <div className="meeting-left">
                            <div className={`meeting-icon ${meeting.color}`}>
                                <Users size={18} />
                            </div>

                            <div>
                                <h3>{meeting.title}</h3>

                                <p>Host: {meeting.host}</p>
                            </div>
                        </div>

                        <div className="meeting-right">
                            <span>{meeting.time}</span>

                            <button>Join</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;