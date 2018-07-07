
module.exports = function(sequelize, DataTypes) {
	let data = sequelize.define('data', {
		respid: {
			type: DataTypes.INTEGER(10),
			allowNull: true,
            primaryKey: true
		},
		sample: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		comp: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		int_date: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		lang: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		cregion: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		state: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		density: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		usr: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		qs1: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		sex: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		eminuse: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		intmob: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		intfreq: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		home4nw: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		bbhome1: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		bbhome2: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		device1a: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		smart2: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		snsint2: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		device1b: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		device1c: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		device1d: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		web1a: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		web1b: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		web1c: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		web1d: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		web1e: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		web1f: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		web1g: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		web1h: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		sns2a: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		sns2b: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		sns2c: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		sns2d: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		sns2e: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		pial5a: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		pial5b: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		pial5c: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		pial5d: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		pial11: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		pial11a: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		'pial11ao@': {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		pial11_igbm: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		pial12: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		books1: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		books2a: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		books2b: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		books2c: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		age: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		marital: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		educ2: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		emplnw: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		hisp: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		racem1: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		racem2: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		racem3: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		racem4: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		racecmb: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		birth_hisp: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		inc: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		party: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		partyln: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		hh1: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		hh3: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		ql1: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		ql1a: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		qc1: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		weight: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		cellweight: {
			type: DataTypes.FLOAT,
			allowNull: true
		}
	}, {
            timestamps: false,
		tableName: 'data'
	});
	return data;
};
