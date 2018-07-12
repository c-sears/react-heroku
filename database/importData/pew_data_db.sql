DROP DATABASE IF EXISTS pew_data_db;
CREATE DATABASE pew_data_db;
USE pew_data_db;


CREATE TABLE data (
 respid Int(10),
    sample Int(10),
    comp Int(10),
    int_date Int(10),
    lang Int(10),
    cregion Int(10),
    state Int(10),
    density Int(10),
    usr VARCHAR( 255),
    qs1 Int(10),
    sex Int(10),
    eminuse Int(10),
    intmob Int(10),
    intfreq Int(10),
    home4nw Int(10),
    bbhome1 Int(10),
    bbhome2 Int(10),
    device1a Int(10),
    smart2 Int(10),
    snsint2 Int(10),
    device1b Int(10),
    device1c Int(10),
    device1d Int(10),
    web1a Int(10),
    web1b Int(10),
    web1c Int(10),
    web1d Int(10),
    web1e Int(10),
    web1f Int(10),
    web1g Int(10),
    web1h Int(10),
    sns2a Int(10),
    sns2b Int(10),
    sns2c Int(10),
    sns2d Int(10),
    sns2e Int(10),
    pial5a Int(10),
    pial5b Int(10),
    pial5c Int(10),
    pial5d Int(10),
    pial11 Int(10),
    pial11a Int(10),
    `pial11ao@` VARCHAR( 255),
    pial11_igbm Int(10),
    pial12 Int(10),
    books1 Int(10),
    books2a Int(10),
    books2b Int(10),
    books2c Int(10),
    age Int(10),
    marital Int(10),
    educ2 Int(10),
    emplnw Int(10),
    hisp Int(10),
    racem1 Int(10),
    racem2 Int(10),
    racem3 Int(10),
    racem4 Int(10),
    racecmb Int(10),
    birth_hisp Int(10),
    inc Int(10),
    party Int(10),
    partyln Int(10),
    hh1 Int(10),
    hh3 Int(10),
    ql1 Int(10),
    ql1a Int(10),
    qc1 Int(10),
    weight FLOAT(10),
    cellweight FlOAT(10)
);



SET GLOBAL local_infile=1;
LOAD DATA LOCAL INFILE './survey.csv'
INTO TABLE data
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 Lines;