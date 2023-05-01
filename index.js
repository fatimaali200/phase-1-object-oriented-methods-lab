function BoardMember(name, homeState, training){
    this.name=name;
    this.training=training;
    this.homeState=homeState;

    this.veto=()=>{
        return  "No, I must disagree";
    }
    this.approve =()=>{
        return "You can do that!";
    } 
    this.doCharity =()=>{
        return "I like to help people.";
    } 
    this.releasePressStatement=()=>{
        return "You will see great things from Scuber."
    } 
    this.sayHi=()=>{
        return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
    }
}
let polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law")