// function monster (name, health, last_fought, attacks, stats, db) {
// "name": "monster3",
// "health": "good",
// "Last fought": new Date(2017,12,19),
// "Attacks": ["kick", "throw", "bite"],
// "stats": {"attack": 5, "defense": 8}
// }

function monster(name, health, last_fought, attacks, stats, db) {
db.monsters.insert ({
"name": "monster3",
"health": "good",
"Last fought": new Date(2017,12,19),
"Attacks": ["kick", "throw", "bite"],
"stats": {"attack": 5, "defense": 8}
})
}

//find all documents
db.monsters.find();

db.monsters.find(
    {"name": "monster1" })
    
    db.monsters.find (
        {"Attacks": "kick"})
        
    db.monsters.find (
        {"Defense": 8})    
