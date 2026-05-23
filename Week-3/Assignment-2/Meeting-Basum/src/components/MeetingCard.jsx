function MeetingCard({ title, icon, description }) {
    return (
        <div className="meeting-card">
            <div className="meeting-icon">{icon}</div>

            <h3>{title}</h3>

            <p>{description}</p>
        </div>
    );
}

export default MeetingCard;