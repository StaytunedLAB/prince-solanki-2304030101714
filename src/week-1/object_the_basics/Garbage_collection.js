// JavaScript automatically removes (deletes) the data from memory when it is no longer needed.

// Simple object removal
let user = {
    name: "John"
};
// user is reachable because variable "user" points to the object
user = null;
// Now the object { name: "John" } has no reference
// It becomes unreachable → garbage collected


// Two references to the same object
let user1 = {
    name: "John"
};
let admin = user1;
// user → object
// admin → same object
user1 = null;
// admin still points to the object
console.log(admin.name); // "John"
// object is still reachable


// Both references removed
let user2 = { name: "John" };
let admin1 = user2;

user2 = null;
admin1 = null;

// Now NO ONE references the object
// Object becomes unreachable → deleted by GC


// Interlinked objects
function marry(man, woman){
    woman.husband = man;
    man.wife = woman;

    return{
        father: man,
        mother: woman,
    }
}

let family = marry({
    name:"Jhon"
}, {
    name: "Ann"
});

delete family.father;

console.log(family);