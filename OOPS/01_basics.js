function createUser(username,score)
    {
        this.username=username;
        this.score=score;
    }

createUser.prototype.increment=function()
    {
        score++;
    }

const u1=new createUser('Vitthal',25);
// const u2=createUser('Ram',250);

console.log(u1.score);