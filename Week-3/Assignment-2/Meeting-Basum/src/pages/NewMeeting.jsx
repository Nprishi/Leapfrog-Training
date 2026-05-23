function NewMeeting() {
    return (
        <div className="page">
            <h1>New Meeting</h1>

            <div className="form-card">
                <form>
                    <input type="text" placeholder="Meeting Title" />

                    <input type="date" />

                    <input type="time" />

                    <textarea placeholder="Meeting Description"></textarea>

                    <button>Create Meeting</button>
                </form>
            </div>
        </div>
    );
}

export default NewMeeting;