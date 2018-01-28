//-----Level 3
var mongo = function(db) {
	//Write the command that will find all monsters with an attack lower than 10
	db.monsters.find({
		"Level": {
			"$lt": 5
		}
	})
	//result: { "_id" : ObjectId("5a6dc2156c4071d196bd913f"), "name" : "Bat", "Level" : 4, "health" : 25, "type" : "Flying", "attacks" : [ "scratch", "bite" ], "stats" : { "attack" : 5, "defense" : 2 }, "style" : "cool" }
	//Write the command that will find all monsters with a level above 5 but below 15 inclusive
	db.monsters.find({
		"Level": {
			"$gt": 5,
			"$lt": 15
		}
	})
	//result: { "_id" : ObjectId("5a6dc4ae6c4071d196bd9140"), "name" : "Claws", "Level" : 7, "health" : 18, "type" : "Running", "attacks" : [ "scratch", "kick" ], "stats" : { "attack" : 1, "defense" : 3 }, "style" : "cool" }
	//Write the command to find monsters that do not have the “bite” attack.
	db.monsters.find({
		"attack": {
			"$ne": "bite"
		}
	})
	/*{ "_id" : ObjectId("5a6cb58bd8826db5f5cc7d2b"), "name" : "monster1", "health" : "very good", "Last fought" : ISODate("2017-12-18T00:00:00Z"), "Attacks" : [ "kick", "punch", "bite" ], "stats" : { "attack" : 5, "defense" : 8 } }
	{ "_id" : ObjectId("5a6cb674d8826db5f5cc7d2c"), "name" : "monster2", "health" : "good", "Last fought" : ISODate("2018-01-14T00:00:00Z"), "Attacks" : [ "toss", "kick", "poke" ], "stats" : { "attack" : 9, "defense" : 3 } }
	{ "_id" : ObjectId("5a6dc2156c4071d196bd913f"), "name" : "Bat", "Level" : 4, "health" : 25, "type" : "Flying", "attacks" : [ "scratch", "bite" ], "stats" : { "attack" : 5, "defense" : 2 }, "style" : "cool" }
	{ "_id" : ObjectId("5a6dc4ae6c4071d196bd9140"), "name" : "Claws", "Level" : 7, "health" : 18, "type" : "Running", "attacks" : [ "scratch", "kick" ], "stats" : { "attack" : 1, "defense" : 3 }, "style" : "cool" }
	{ "_id" : ObjectId("5a6dc4ed6c4071d196bd9141"), "name" : "Crawler", "Level" : 18, "health" : 11, "type" : "Crawling", "attacks" : [ "pop", "kick" ], "stats" : { "attack" : 22, "defense" : 12 }, "style" : "calm" }*/
	//Write the command to find monsters with levels less than 6 but only return the name, level and health attributes
	db.monsters.find({
		"Level": {
			"$lt": 6
		}
	}, {
		"name": true,
		"Level": true,
		"health": true
	})
	//{ "_id" : ObjectId("5a6dc2156c4071d196bd913f"), "name" : "Bat", "Level" : 4, "health" : 25 }
	//Write the command to find all monsters who attack is between 10 and 20 but do not include the monsters health or style
	db.monsters.find({
		"Level": {
			"$gt": 10,
			"$lt": 20
		}
	}, {
		"health": false,
		"style": false
	})
	//{ "_id" : ObjectId("5a6dc4ed6c4071d196bd9141"), "name" : "Crawler", "Level" : 18, "type" : "Crawling", "attacks" : [ "pop", "kick" ], "stats" : { "attack" : 22, "defense" : 12 } }
	//Write the command to find out how many monsters are in the collection.
	db.monsters.find().count()
	//result: 5
	//Write the command to sort the collection by the monsters level with the highest level at the top and the lowest at the bottom
	db.monsters.find().sort({
		"Level": 1
	})
	/*{ "_id" : ObjectId("5a6cb58bd8826db5f5cc7d2b"), "name" : "monster1", "health" : "very good", "Last fought" : ISODate("2017-12-18T00:00:00Z"), "Attacks" : [ "kick", "punch", "bite" ], "stats" : { "attack" : 5, "defense" : 8 } }
	{ "_id" : ObjectId("5a6cb674d8826db5f5cc7d2c"), "name" : "monster2", "health" : "good", "Last fought" : ISODate("2018-01-14T00:00:00Z"), "Attacks" : [ "toss", "kick", "poke" ], "stats" : { "attack" : 9, "defense" : 3 } }
	{ "_id" : ObjectId("5a6dc2156c4071d196bd913f"), "name" : "Bat", "Level" : 4, "health" : 25, "type" : "Flying", "attacks" : [ "scratch", "bite" ], "stats" : { "attack" : 5, "defense" : 2 }, "style" : "cool" }
	{ "_id" : ObjectId("5a6dc4ae6c4071d196bd9140"), "name" : "Claws", "Level" : 7, "health" : 18, "type" : "Running", "attacks" : [ "scratch", "kick" ], "stats" : { "attack" : 1, "defense" : 3 }, "style" : "cool" }
	{ "_id" : ObjectId("5a6dc4ed6c4071d196bd9141"), "name" : "Crawler", "Level" : 18, "health" : 11, "type" : "Crawling", "attacks" : [ "pop", "kick" ], "stats" : { "attack" : 22, "defense" : 12 }, "style" : "calm" }*/
}
//-----Level 1
function monster(name, health, last_fought, attacks, stats, db) {
	db.monsters.insert({
		"name": "monster3",
		"health": "good",
		"Last fought": new Date(2017, 12, 19),
		"Attacks": ["kick", "throw", "bite"],
		"stats": {
			"attack": 5,
			"defense": 8
		}
	})
}
//find all documents
db.monsters.find();
db.monsters.find({
	"name": "monster1"
})
db.monsters.find({
	"Attacks": "kick"
})
db.monsters.find({
	"Defense": 8
})
// function monster (name, health, last_fought, attacks, stats, db) {
// "name": "monster3",
// "health": "good",
// "Last fought": new Date(2017,12,19),
// "Attacks": ["kick", "throw", "bite"],
// "stats": {"attack": 5, "defense": 8}
// }