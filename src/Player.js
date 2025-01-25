class Player {
    constructor(id){
        const id = id;
        const domainList = [];
    }

    addDomain(domain) {
        domainList.push(domain);
    }

    getTotalVisitors() {
        let total = 0;
        domainList.forEach(domain => {
            total += domain.visitors;
        });
        return total;
    }

    playerStatus(){
        let domainStr = "";
        this.domainList.forEach(domain => {
            domainStr += domain.name;
            domainStr += " \n";
        });
        return `Player ${this.id} has the following domains: ${domainStr}`;
    }

}