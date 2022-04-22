import { writable } from 'svelte/store';

export const mobileMenu = writable(false);
export const formMeasurement = writable(false);
export const formPhone = writable(false)
export const formEmail = writable(true)
export const formConsultation = writable(false)
export const formCalculation = writable(false);
