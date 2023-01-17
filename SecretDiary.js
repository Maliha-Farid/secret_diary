class SecretDiary {
    #entry;
    #page;
    #entries;
    #lock; //change state of object

    constructor(entry, page, entries = []) {
        this.entry = entry;
        this.page = page;
        this.entries = entries;
        this.lock = true;
    }

    //methods
    lock() { this.lock = true; }
    unlock() { this.lock = false; }

    // add to array
    addEntry(entry) {
        // if (this.lock) { console.log("im locked"); }
        // else {
        //     console.log("im unlocked");
        //     this.entries.push(entry);
        // }
        // throw errors
        try {
            if (!this.lock) {
                console.log("im unlocked");
                this.entries.push(entry);
            }
        }
        catch (error) { console.log(error.message); }
    }

    // return array
    getEntries() {
        return this.entries;
    }
}

const secretDiary1 = new SecretDiary();
secretDiary1.addEntry("my entry 1");
// console.log(secretDiary1.getEntries());
// console.log("////////////////////////////////////////");
////////////////////////////////////////
secretDiary1.unlock();
secretDiary1.addEntry("my entry 2");
console.log(secretDiary1.getEntries());
console.log("////////////////////////////////////////");
////////////////////////////////////////
secretDiary1.lock();
secretDiary1.addEntry("my entry 3");
console.log(secretDiary1.getEntries());