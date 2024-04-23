import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 20 }, // below normal load
        { duration: '1m', target: 100 }, // spike to 100 users
        { duration: '3m', target: 100 }, // hold at 100 users
        { duration: '1m', target: 20 }, // scale down to normal load
    ]
};

export default function () {
    let response = http.get('http://ec2-3-135-5-127.us-east-2.compute.amazonaws.com');
    check(response, {
        'status is 200': r => r.status === 200
    });
    sleep(1);
}

