let db = require("../models");
let Sequelize = require('sequelize');
const Op = Sequelize.Op;
let getData = {

    stats: function (filterData, cb) {
        let query = {};

        if (filterData.sex) {
            query.sex = parseInt(filterData.sex);
        }
        if (filterData.age) {
            switch (true) {
                case(parseInt(filterData.age) <= 29):
                    query.age = {[Op.between]: [17, 30]};
                    break;
                case (parseInt(filterData.age) <= 49):
                    query.age = {[Op.between]: [29, 50]};
                    break;
                case (parseInt(filterData.age) <= 64):
                    query.age = {[Op.between]: [49, 65]};
                case (parseInt(filterData.age) > 64):
                    query.age = {[Op.between]: [64, 100]};
            }
        }
        if (filterData.inc) {
            query.inc = parseInt(filterData.inc);
        }
        if (filterData.racem1) {
            query.racem1 = parseInt(filterData.racem1);
        }
        if (filterData.educ2) {
            query.educ2 = parseInt(filterData.educ2);
        }



        db.data.findAll({
            where: query
        }).then(function (data) {
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

        }).then(result =>{
            cb(result)
        })

        

    },
    

    newUser: function (user) {

        db.data.create({
            eminuse: user.eminuse,
            intmob: user.intmob,
            intfreq: user.intfreq,
            home4nw: user.home4nw,
            bbhome1: user.bbhome1,
            device1a: user.device1a,
            smart2: user.smart2,
            snsint2: user.snsint2,
            device1b: user.device1b,
            device1c: user.device1c,
            device1d: user.device1d,
            web1a: user.web1a,
            web1b: user.web1b,
            web1c: user.web1c,
            web1d: user.web1d,
            web1e: user.web1e,
            web1f: user.web1f,
            web1g: user.web1g,
            web1h: user.web1h,
            sns2a: user.sns2a,
            sns2b: user.sns2b,
            sns2c: user.sns2c,
            sns2d: user.sns2d,
            sns2e: user.sns2e,
            pial5a: user.pial5a,
            pial5b: user.pial5b,
            pial5c: user.pial5c,
            pial5d: user.pial5d,
            pial11: user.pial11,
            pial12: user.pial12,
            books1: user.books1,
            books2a: user.books2a,
            books2b: user.books2b,
            books2c: user.books2c,
        }).then(function (user) {
            console.log('new user added to database')
        }).catch(function (err) {
            console.log(err);
        })

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
        if (data[x][question] == 1) {
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

// let Obj = {
//     sex: 2,
//     age: 33,
//     inc: 6,
//     educ2: 5,
//     racem1: 1
// };
//
// getData.stats(Obj);