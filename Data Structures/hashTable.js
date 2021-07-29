class HashTable{
    constructor(size = 53){
        this.keyMap = new Array(size);
    }
    _hash(key){ // probably a terrible hashing function // _ for a private function
        let total = 0;
        let prime = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total*prime + value) % this.keyMap.length;
        }
        return Math.abs(total);
    }

    // linear probing or separate chaining are two ways to deal with collisions in hash functions
    // separate chaining way - basically means you push collisions onto same index
    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
        return this;
    }

    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i in this.keyMap[index]){
                if(this.keyMap[index][i][0] == key){
                    return this.keyMap[index][i];
                }
            }
        }
        return undefined;
    }

    values(){
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let index in this.keyMap[i]){
                    if(!valuesArr.includes(this.keyMap[i][index][1])){ // to prevent duplicate entries
                        valuesArr.push(this.keyMap[i][index][1]);
                    }
                }
            }
        }
        return valuesArr;
    }

    keys(){
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let index in this.keyMap[i]){
                    if(!keysArr.includes(this.keyMap[i][index][0])){ // to prevent duplicate entries
                        keysArr.push(this.keyMap[i][index][0]);
                    }
                }
            }
        }
        return keysArr;
    }
}

let onePiece = new HashTable(10);
onePiece.set("Captain", "Monkey D. Luffy");
onePiece.set("Chef", "Vinsmoke Sanji");
onePiece.set("First Mate", "Roronoa Zoro");
onePiece.set("Navigator", "Nami");
onePiece.set("Sniper", "Usopp");
onePiece.set("Archaeologist", "Nico Robin");
onePiece.set("Musician", "Brook");
onePiece.set("Sailor", "Jinbe");
onePiece.set("Shipwright", "Franky");
onePiece.set("Chopper", "Doctor");
console.log(onePiece);
console.log(onePiece.get("Sailor"));
console.log(onePiece.get("Captain"));
console.log(onePiece.keys(), onePiece.values());







