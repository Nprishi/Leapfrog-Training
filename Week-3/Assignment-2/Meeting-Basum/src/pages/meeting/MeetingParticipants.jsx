function MeetingParticipants() {
    const participants = [
        "Rishi Kesh Nepal",
        "John Doe",
        "Sarah Smith",
        "Michael Lee"
    ];

    return (
        <div className="meeting-box">
            <h2>Participants</h2>

            <ul className="participants-list">
                {participants.map((person, index) => (
                    <li key={index}>{person}</li>
                ))}
            </ul>
        </div>
    );
}

export default MeetingParticipants;