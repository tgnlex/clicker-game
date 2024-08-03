import inv from './inventory.js';
// Income
export const base_income = 0

export const worker_base = 1;
export const worker_level = 1;
export const worker_income = (worker_base * worker_level) * inv.workers; 

export const rental_base = 5;
export const rental_level = 1;;
export const rental_income = (rental_base * rental_level) * inv.rentals;

export const store_base = 10;
export const store_level = 1;  
export const store_income = (store_base * store_level) * inv.stores;

export const farm_base = 25;
export const farm_level = 1;

const income = base_income + 
                      worker_income + 
                      rental income + 
                      shop_income;
export default income;
