
import { sleep } from 'k6';
import { TEST_CONFIG } from '../config/constants.js';
import{ getAllTestimonials } from '../requests/GetRequests.js';

export const options = {
    vus: TEST_CONFIG.vus,
    duration: TEST_CONFIG.duration
}

export default function () {
    getAllTestimonials();
    sleep(TEST_CONFIG.sleep);
}

//k6 run tests/GetAllTestimonialsTest.js
