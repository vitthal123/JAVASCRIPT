class React{
    constructor(){
        this.user='Vitthal',
        this.url='manekarvithal@gmail.com'
        document.querySelector('button').addEventListener('click', this.handleClicked.bind(this))

    }
    


    handleClicked(){
        console.log('clicked ....');
        console.log(this.user);
    }
}

const app=new React()