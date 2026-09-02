
import { sleep } from 'k6';
import { TEST_CONFIG } from '../config/constants.js';
import{ getAllTestimonials } from '../requests/GetRequests.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    vus: TEST_CONFIG.vus,
    duration: TEST_CONFIG.duration
}

export default function () {
    getAllTestimonials();
    sleep(TEST_CONFIG.sleep);
}
export function handleSummary(data) {
    return{
        "reports/testSummary.html": htmlReport(data),
    };
}
 //k6 run tests/GetAllTestimonialsTest.js
 


