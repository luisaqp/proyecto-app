import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Luis',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'usuario',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],
    products: [
        {

            name: 'Computadora Gamer 1',
            category: 'Computadoras',
            image: '/images/p1.jpg',
            price: 1200,
            countInStock: 10,
            brand: 'Intel',
            rating: 2.5,
            numReviews: 10,
            description: 'Computadora ideal para tu hijo'

        },
        {

            name: 'Computadora Gamer 2',
            category: 'Computadoras',
            image: '/images/p2.jpg',
            price: 3500,
            countInStock: 20,
            brand: 'Intel',
            rating: 4.5,
            numReviews: 10,
            description: 'Computadora ideal para tu hijo'

        },
        {

            name: 'Computadora Gamer 3',
            category: 'Computadoras',
            image: '/images/p3.jpg',
            price: 2800,
            countInStock: 0,
            brand: 'Intel',
            rating: 4.5,
            numReviews: 10,
            description: 'Computadora ideal para tu hijo'

        },
        {

            name: 'Computadora Gamer 4',
            category: 'Computadoras',
            image: '/images/p4.jpg',
            price: 4800,
            countInStock: 19,
            brand: 'Intel',
            rating: 4.5,
            numReviews: 10,
            description: 'Computadora ideal para tu hijo'

        },
        {

            name: 'Computadora Gamer 5',
            category: 'Computadoras',
            image: '/images/p5.jpg',
            price: 4700,
            countInStock: 30,
            brand: 'Intel',
            rating: 4.5,
            numReviews: 10,
            description: 'Computadora ideal para tu hijo'

        },
        {

            name: 'Computadora Gamer 6',
            category: 'Computadoras',
            image: '/images/p6.jpg',
            price: 6900,
            countInStock: 50,
            brand: 'Intel',
            rating: 4.5,
            numReviews: 15,
            description: 'Computadora ideal para tu hijo'

        },
    ],
    categories:[
        {
            name: 'Computadoras',
            image: '/images/p1.jpg',
        },
        {
            name: 'Ram',
            image: '/images/p1.jpg',
        },
        {
            name: 'Monitores',
            image: '/images/p1.jpg',
        },
        {
            name: 'GPU',
            image: '/images/p1.jpg',
        },
        {
            name: 'Case',
            image: '/images/p1.jpg',
        },
        {
            name: 'Procesadores',
            image: '/images/p1.jpg',
        },
        {
            name: 'Motherboards',
            image: '/images/p1.jpg',
        },
    ]
};

export default data;