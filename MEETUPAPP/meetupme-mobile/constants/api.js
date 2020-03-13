export const fetchMeetups = () =>
    fetch('http://192.168.43.133:3000/api/meetups')
        .then(res => res.json());