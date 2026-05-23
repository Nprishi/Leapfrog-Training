function ScheduleMeeting() {
    return (
        <div className="page">
            <h1>Schedule Meeting</h1>

            <div className="form-card">
                <form>
                    <input type="text" placeholder="Meeting Name" />

                    <input type="date" />

                    <input type="time" />

                    <select>
                        <option>Select Team</option>
                        <option>Frontend Team</option>
                        <option>Backend Team</option>
                        <option>Design Team</option>
                    </select>

                    <button>Schedule</button>
                </form>
            </div>
        </div>
    );
}

export default ScheduleMeeting;