function ProfileSettings() {
    return (
        <div className="page">
            <h1>Profile Settings</h1>

            <div className="profile-card">
                <img
                    src="/public/profileFirst.jpg"
                    alt="Profile"
                    className="profile-image"
                />

                <h2>Rishi Kesh Nepal</h2>

                <p>Frontend Developer</p>

                <button>Edit Profile</button>
            </div>
        </div>
    );
}

export default ProfileSettings;