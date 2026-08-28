import http from 'k6/http';
import { URLS } from '../config/urls.js';
import{ getAllTestimonials } from '../requests/GetRequests.js';
import { sleep } from 'k6';

export const options = {
    vus: TEST_CONFIG.vus,
    duration: TEST_CONFIG.duration
}

export default function () {
    getAllTestimonials();
    sleep(TEST_CONFIG.sleep);
}
