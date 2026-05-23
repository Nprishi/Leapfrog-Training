# ROUTES.md

| Route                             | Component           | Router Hook     |
| --------------------------------- | ------------------- | --------------- |
| /                                 | Dashboard           | useNavigate     |
| /new-meeting                      | NewMeeting          | None            |
| /join-meeting                     | JoinMeeting         | None            |
| /calendar                         | Calendar            | useSearchParams |
| /meetings/:meetingId              | MeetingLayout       | useParams       |
| /meetings/:meetingId/participants | MeetingParticipants | useParams       |
| *                                 | NotFound            | Link            |
