const student = {
    name: 'ditu',
    id: 1605021,
    dept: 'CSE',
    courses: ['CSE-101', 'Math-102', 'Phy-110'],
    address: 'Room:5001, Suhrawardy Hall, BUET',
    isAngry: false,
    Laptop: {
        model: 'Hp Pavilon 5502',
        brand: 'HP',
        ram: '8GB',
        rom: '1TB',
        price: 48500
    }
    
}
const studentString = JSON.stringify(student);
console.log(studentString);
const objectStudent = JSON.parse(studentString);
console.log(objectStudent)