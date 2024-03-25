'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Voters', [
            { name: 'John Cena', createdAt: new Date(), updatedAt: new Date(), idNumber: 336195524, voted: false, voting: false, vote: '' },
            { name: 'Emma Watson', createdAt: new Date(), updatedAt: new Date(), idNumber: 274829104, voted: true, voting: false, vote: '' },
            { name: 'Robert Downey', createdAt: new Date(), updatedAt: new Date(), idNumber: 394820394, voted: false, voting: false, vote: '' },
            { name: 'Scarlett Johansson', createdAt: new Date(), updatedAt: new Date(), idNumber: 502948394, voted: false, voting: true, vote: '' },
            { name: 'Chris Evans', createdAt: new Date(), updatedAt: new Date(), idNumber: 120394820, voted: true, voting: false, vote: '' },
            { name: 'Mark Ruffalo', createdAt: new Date(), updatedAt: new Date(), idNumber: 583920102, voted: false, voting: true, vote: '' },
            { name: 'Tom Holland', createdAt: new Date(), updatedAt: new Date(), idNumber: 482930211, voted: true, voting: false, vote: '' },
            { name: 'Benedict Cumberbatch', createdAt: new Date(), updatedAt: new Date(), idNumber: 129384756, voted: false, voting: false, vote: '' },
            { name: 'Chris Hemsworth', createdAt: new Date(), updatedAt: new Date(), idNumber: 938475620, voted: false, voting: true, vote: '' },
            { name: 'Elizabeth Olsen', createdAt: new Date(), updatedAt: new Date(), idNumber: 203948576, voted: true, voting: false, vote: '' },
            { name: 'Paul Rudd', createdAt: new Date(), updatedAt: new Date(), idNumber: 748392021, voted: false, voting: false, vote: '' },
            { name: 'Chadwick Boseman', createdAt: new Date(), updatedAt: new Date(), idNumber: 102938475, voted: true, voting: false, vote: '' },
            { name: 'Anthony Mackie', createdAt: new Date(), updatedAt: new Date(), idNumber: 564738291, voted: false, voting: true, vote: '' },
            { name: 'Sebastian Stan', createdAt: new Date(), updatedAt: new Date(), idNumber: 394857201, voted: true, voting: false, vote: '' },
            { name: 'Tom Hiddleston', createdAt: new Date(), updatedAt: new Date(), idNumber: 102847365, voted: false, voting: false, vote: '' },
            { name: 'Samuel L. Jackson', createdAt: new Date(), updatedAt: new Date(), idNumber: 928374650, voted: false, voting: true, vote: '' },
            { name: 'Jeremy Renner', createdAt: new Date(), updatedAt: new Date(), idNumber: 827364519, voted: true, voting: false, vote: '' },
            { name: 'Zoe Saldana', createdAt: new Date(), updatedAt: new Date(), idNumber: 647382910, voted: false, voting: false, vote: '' },
            { name: 'Bradley Cooper', createdAt: new Date(), updatedAt: new Date(), idNumber: 738291046, voted: false, voting: true, vote: '' },
            { name: 'Vin Diesel', createdAt: new Date(), updatedAt: new Date(), idNumber: 192837465, voted: true, voting: false, vote: '' },
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Voters', null, {});
    }
};
