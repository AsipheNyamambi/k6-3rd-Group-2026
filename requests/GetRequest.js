import http from 'k6/http';
import { URLS } from '../config/urls.js';

export function getAllTestimonials() {
    return http.get(URLS.testimonials);
}
