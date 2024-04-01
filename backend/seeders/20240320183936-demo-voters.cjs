'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Voters', [
            { name: 'John Cena', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195524, voted: false, email: 'pashnikitenko@gmail.com', voting: false, vote: '', role: "verifier" },
            { name: 'Jane Doe', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195525, voted: false, email: 'voter2@example.com', voting: false, vote: '' },
            { name: 'Jim Beam', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195526, voted: false, email: 'voter3@example.com', voting: false, vote: '' },
            { name: 'Jill Valentine', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195527, voted: false, email: 'voter4@example.com', voting: false, vote: '' },
            { name: 'Jack Sparrow', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195528, voted: false, email: 'voter5@example.com', voting: false, vote: '' },
            { name: 'Jessica Jones', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195529, voted: false, email: 'voter6@example.com', voting: false, vote: '' },
            { name: 'Jake Peralta', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195530, voted: false, email: 'voter7@example.com', voting: false, vote: '' },
            { name: 'Amy Santiago', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195531, voted: false, email: 'voter8@example.com', voting: false, vote: '' },
            { name: 'Rosa Diaz', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195532, voted: false, email: 'voter9@example.com', voting: false, vote: '' },
            { name: 'Terry Jeffords', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195533, voted: false, email: 'voter10@example.com', voting: false, vote: '' },
            { name: 'Raymond Holt', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195534, voted: false, email: 'voter11@example.com', voting: false, vote: '' },
            { name: 'Charles Boyle', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195535, voted: false, email: 'voter12@example.com', voting: false, vote: '' },
            { name: 'Gina Linetti', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195536, voted: false, email: 'voter13@example.com', voting: false, vote: '' },
            { name: 'Michael Scott', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195537, voted: false, email: 'voter14@example.com', voting: false, vote: '' },
            { name: 'Dwight Schrute', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195538, voted: false, email: 'voter15@example.com', voting: false, vote: '' },
            { name: 'Jim Halpert', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195539, voted: false, email: 'voter16@example.com', voting: false, vote: '' },
            { name: 'Pam Beesly', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195540, voted: false, email: 'voter17@example.com', voting: false, vote: '' },
            { name: 'Andy Bernard', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195541, voted: false, email: 'voter18@example.com', voting: false, vote: '' },
            { name: 'Angela Martin', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195542, voted: false, email: 'voter19@example.com', voting: false, vote: '' },
            { name: 'Kevin Malone', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195543, voted: false, email: 'voter20@example.com', voting: false, vote: '' },
            { name: 'Oscar Martinez', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195544, voted: false, email: 'voter21@example.com', voting: false, vote: '' },
            { name: 'Stanley Hudson', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195545, voted: false, email: 'voter22@example.com', voting: false, vote: '' },
            { name: 'Phyllis Vance', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195546, voted: false, email: 'voter23@example.com', voting: false, vote: '' },
            { name: 'Meredith Palmer', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195547, voted: false, email: 'voter24@example.com', voting: false, vote: '' },
            { name: 'Creed Bratton', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195548, voted: false, email: 'voter25@example.com', voting: false, vote: '' },
            { name: 'Kelly Kapoor', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195549, voted: false, email: 'voter26@example.com', voting: false, vote: '' },
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Voters', null, {});
    }
};
