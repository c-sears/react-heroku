let db = require("../models");
let Sequelize = require('sequelize');
const Op = Sequelize.Op;
let getData = {

    stats: function (gender, age, income, race, education) {
        //switch function for defining the age range of each user
        switch (true) {
            case(age <= 29):
                age = {[Op.between]: [17, 30]};
                break;
            case (age <= 49):
                age = {[Op.between]: [29, 50]};
                break;
            case (age <= 64):
                age = {[Op.between]: [49, 65]};
            case (age > 64):
                age = {[Op.between]: [64, 100]};

        }

        db.data.findAll({
            where: {sex: gender, age: age, inc: income, racem1: race, educ2: education}
        }).then(function (data) {
            // console.log(data);
            let user = [];
            let stats = {
                'eminuse': results1(data, 'eminuse'),
                'intmob': results1(data, 'intmob'),
                'intfreq': scale(data, 'intfreq'),
                'home4nw': results1(data, 'home4nw'),
                'bbhome1': results1(data, 'bbhome1'),
                'device1a': results1(data, 'device1a'),
                'smart2': results1(data, 'smart2'),
                'snsint2': results1(data, 'snsint2'),
                'device1b': results1(data, 'device1b'),
                'device1c': results1(data, 'device1c'),
                'device1d': results1(data, 'device1d'),
                'web1a': results1(data, 'web1a'),
                'web1b': results1(data, 'web1b'),
                'web1c': results1(data, 'web1c'),
                'web1d': results1(data, 'web1d'),
                'web1e': results1(data, 'web1e'),
                'web1f': results1(data, 'web1f'),
                'web1g': results1(data, 'web1g'),
                'web1h': results1(data, 'web1h'),
                'sns2a': scale(data, 'sns2a'),
                'sns2b': scale(data, 'sns2b'),
                'sns2c': scale(data, 'sns2c'),
                'sns2d': scale(data, 'sns2d'),
                'sns2e': scale(data, 'sns2e'),
                'pial5a': scale(data, 'pial5a'),
                'pial5b': scale(data, 'pial5b'),
                'pial5c': scale(data, 'pial5c'),
                'pial5d': scale(data, 'pial5d'),
                'pial11': results1(data, 'pial11'),
                'pial12': results2(data, 'pial12'),
                'books1': results3(data, 'books1'),
                'books2a': results1(data, 'books2a'),
                'books2b': results1(data, 'books2b'),
                'books2c': results1(data, 'books2c'),


            };
            user.push(stats);
            return user;
        });

    }

};

let results1 = function (data, question) {
    let usrYes = 0;
    let usrNo = 0;
    for (let x in data) {
        if (data[x][question] == 1) {
            usrYes++;
        } else {
            usrNo++;
        }
    }
    let total = usrNo + usrYes;
    return ({'1': parseInt((usrYes / total) * 100), '2': parseInt((usrNo / total) * 100)});
};


let results2 = function (data, question) {
    let usrYes = 0;
    let usrNo = 0;
    let other = 0;
    for (let x in data) {
        if (data[x][question] == 1 ) {
            usrYes++;
        } else if (data[x][question] == 2) {
            usrNo++;
        } else {
            other++;
        }
    }
    let total = usrNo + usrYes + other;
    return ({
        '1': parseInt((usrYes / total) * 100),
        '2': parseInt((usrNo / total) * 100),
        '3': parseInt((other / total) * 100)
    });
};


let results3 = function (data, question) {
    let usrYes = 0;
    let usrNo = 0;
    let other = 0;
    for (let x in data) {
        if (data[x][question] <= 4) {
            usrYes++;
        } else if (data[x][question] <= 9) {
            usrNo++;
        } else {
            other++;
        }
    }
    let total = usrNo + usrYes + other;
    return ({
        '1': parseInt((usrYes / total) * 100),
        '2': parseInt((usrNo / total) * 100),
        '3': parseInt((other / total) * 100)
    });
};






let scale = function (data, question) {
    let scale1 = 0;
    scale2 = 0;
    scale3 = 0;
    scale4 = 0;
    scale5 = 0;
    for (let x in data) {
        if (data[x][question] == 1) {
            scale1++;
        } else if (data[x][question] == 2) {
            scale2++;
        } else if (data[x][question] == 3) {
            scale3++;
        } else if (data[x][question] == 4) {
            scale4++;
        } else if (data[x][question] == 5) {
            scale5++;
        }
    }
    let total = scale1 + scale2 + scale3 + scale4 + scale5;
    // console.log(total);
    return ({
        '1': parseInt((scale1 / total) * 100),
        '2': parseInt((scale2 / total) * 100),
        '3': parseInt((scale3 / total) * 100),
        '4': parseInt((scale4 / total) * 100),
        '5': parseInt((scale5 / total) * 100)
    });
};


module.exports = getData;