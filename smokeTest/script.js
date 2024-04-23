import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    vus: 1,
    duration: '1m'
};

export default function () {
    http.get('http://ec2-3-135-5-127.us-east-2.compute.amazonaws.com');
    sleep(1);
}

