const directory = [
    { "name": "Maggie", "age": 14, "id": 0, "phone": "+123456" },
    { "name": "Joseph", "age": 24, "id": 1, "phone": "+145454" },
    { "name": "Margaret", "age": 11, "id": 2, "phone": "+125556" },
    { "name": "Elizabeth", "age": 61, "id": 3, "phone": "+765756" },
    { "name": "Julio", "age": 24, "id": 4, "phone": "165756" },
    { "name": "Kevin", "age": 64, "id": 5, "phone": "+888856" },
    { "name": "Martin", "age": 71, "id": 6, "phone": "12323456" },
    { "name": "Aaron", "age": 30, "id": 7, "phone": "+12434343" },
];

const registrations = [
    { "name": "Maggie", "age": 14, "id": 0, "email": "maggie@notreal.com", "confirmed": true },
    { "name": "Elizabeth", "age": 61, "id": 1, "email": "elizabeth@notreal.com", "confirmed": false },
    { "name": "Martin", "age": 71, "id": 2, "email": "artingnotreal.com", "confirmed": false },
    { "name": "Aaron", "age": 30, "id": 3, "email": "aaronnotreal.com", "confirmed": true },
];


const innerJoin = (directory, registrations, key) => {

    let results = [];
    
    directory.forEach(elementA => {
        registrations.forEach(elementB => {
           
            if (elementA[key] === elementB[key]) {                
                results.push({...elementA, ...elementB});
            }
        });        
    });

    console.log(`${key}`, results);

    return results;
}

innerJoin(directory, registrations, "name");
innerJoin(directory, registrations, "email");
innerJoin(directory, registrations, "age"); 