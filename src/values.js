'use strict'

const CntMod = require('./const');
const CON = (new CntMod()).CONST;

const _ = require('lodash');

var SIZE = CON.CELL;
var OFFSET_X = CON.OFFSET_LEFT;
var OFFSET_Y = CON.OFFSET_TOP;
function Tile(i, j, type) {
	this.i = i;
	this.j = j;
	this.id = i + '_' + j;
	this.type = 'type_' + type;
	this.top = j*SIZE + OFFSET_X;
	this.left = i*SIZE + OFFSET_Y;
};


function initicialization() {
	var tiles = []
	for(let i=0; i<5;i++) {
		tiles[i] = [];
		for(let j=0; j<5; j++) {
			tiles[i][j] = 0;
		}
	}
	//assign empty spaces
	tiles[1][2] = -1;
	tiles[2][1] = -1;
	tiles[2][3] = -1;
	tiles[3][2] = -1;
	//mark bloqued space
	tiles[0][2] = -2;
	tiles[2][0] = -2;
	tiles[2][2] = -2;
	tiles[2][4] = -2;
	tiles[4][2] = -2;

	return tiles;
};

function createRandomNumbers() {
	var numbers = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4];
	//sort numbers
	return  numbers;
};

function mixNumbers(numbers) {
	return _.shuffle(numbers);
}

function getTypes() {
	var nums = createRandomNumbers();
	return mixNumbers(nums);
}

function createTiles(values) {
	let tiles = [];
	const types = getTypes();
	let k = 0;
	for(let i=0; i<5; i++) {
		for(let j=0; j<5; j++) {
			if(values[i][j] === 0) {
				var type = types[k];
				values[i][j] = k;
				tiles.push(new Tile(i, j, type));
				k++;
			}			
		}	
	}
	return tiles;
}
	 
var Matrix = function() {
	this.values = initicialization();
	console.log('-----------VALUES:---------');
	console.log(this.values);
	this.tiles = createTiles(this.values);
}

Matrix.prototype.createTiles = function(){
	this.tiles = createTiles();
};

Matrix.prototype.getTiles = function() {
	return this.tiles;
};

Matrix.prototype.changePosition = function(id, dir) {
	const tiles = this.tiles;
	let tile;
	
	tile = _.find(this.tiles, function(n) {
			return n.id === id
		});

	//console.log('---------------- tile: ----------------------');
	//console.log(tile);
	//console.log(this.values);
	var newI = tile.i + dir.x;
	var newJ = tile.j + dir.y;
	if (newI >= 0 && newI <=4 && newJ >= 0 && newJ >= 0) {
		console.log(this.values);
		var valueTo = this.values[newI][newJ];
		console.log(valueTo);
		if (valueTo === -1) {
			const i = tile.i;
			const j = tile.j;
			var nowValue = this.values[tile.i][tile.j];
			this.values[i][j] = -1;
			this.values[newI][newJ] = nowValue;
			tile.i = newI;
			tile.j = newJ;
			tile.id = newI + '_' + newJ;
			return true;
		}
	} 
	return false
};

Matrix.prototype.checkWin = function() {
	const val = this.values;
	let status = false;
	if ((val[0][0] === val[0][1]) && (val[0][0] === val[1][0]) && (val[0][0] === val[1][1])) {
		if ((val[0][3] === val[0][4]) && (val[0][3] === val[1][3]) && (val[0][3] === val[1][4])) {
			if ((val[3][0] === val[3][1]) && (val[3][0] === val[4][0]) && (val[3][0] === val[4][1])) {
				if ((val[3][3] === val[3][4]) && (val[3][3] === val[4][3]) && (val[3][3] === val[4][4])) {
					status = true;
				}
			}
		}
	}
	return status;
};


module.exports = Matrix;