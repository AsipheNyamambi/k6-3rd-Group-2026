import http from 'k6/http';
import { URLS } from '../config/urls.js';
import { TOKEN } from '../config/constants.js'; 



export function postMyTestimonial(payload) {
    return http.post(URLS.testimonials, JSON.stringify(payload), {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`,
        },

    });
}
