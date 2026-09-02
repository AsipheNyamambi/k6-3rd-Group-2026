import { postMyTestimonial } from '../requests/PostRequests.js';
import { PAYLOADS } from '../data/payloads.js';
import { TEST_CONFIG,TOKEN } from '../config/constants.js';
import { sleep } from 'k6';
import { check } from 'k6';

export const options = {
    vus: TEST_CONFIG.vus,
    duration: TEST_CONFIG.duration,
};

export default function () {
    const response = postMyTestimonial(PAYLOADS.postTestimonial,TOKEN);
    sleep(TEST_CONFIG.sleep);

    console.log('Response status: ' + response.status);
    console.log('Response body: ' + response.body);

    check(response, {
        'status is 201 or 200': (r) => r.status === 201 || r.status === 200,
        'Response is not empty': (r) => r.body.length > 0,
    });

}

// k6 run tests/GetAllTestimonialsTest.js