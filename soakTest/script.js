import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    duration: '24h',
    vus: 50, // Number of virtual users
};

export default function () {
    let response = http.get('http://ec2-3-135-5-127.us-east-2.compute.amazonaws.com');
    check(response, {
        'status is 200': r => r.status === 200
    });
    sleep(1);
}

