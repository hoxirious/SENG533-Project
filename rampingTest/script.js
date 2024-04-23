import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    stages: [
        { duration: '5m', target: 100 }, // ramp up to 100 users
        { duration: '10m', target: 100 }, // stay at 100 users
        { duration: '5m', target: 0 } // ramp down to 0 users
    ]
};

export default function () {
    let response = http.get('http://ec2-3-135-5-127.us-east-2.compute.amazonaws.com');
    check(response, {
        'status is 200': r => r.status === 200
    });
    sleep(1);
}

