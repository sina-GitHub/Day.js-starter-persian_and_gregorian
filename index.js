const dayjs = require('dayjs');
const jalaliday = require('jalaliday');

dayjs.extend(jalaliday);

console.log('------ jalali ------');
console.log(dayjs().calendar('jalali').locale('fa').format('DD MMMM YYYY'));
console.log(dayjs().calendar('jalali').locale('en').format('DD MMMM YYYY'));

console.log('------ gregory ------');

console.log(dayjs().calendar('gregory').locale('fa').format('DD MMMM YYYY'));
console.log(dayjs().calendar('gregory').locale('en').format('DD MMMM YYYY'));
