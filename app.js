function randomValue(min, max){
    return Math.floor(Math.random() *(max - min)) + min;
}
Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            demonHealth: 100
        };
    },
    computed:{
        demonBarStyles(){
            return { width: this.demonHealth + '%'};
        },
        playerBarStyles(){
            return { width: this.playerHealth + '%'};
        }
    },
    methods:{
        attackDemon(){
            const attackValue = randomValue(5, 10);
            this.demonHealth = this.demonHealth - attackValue;
            this.attackPlayer()    
        },
        attackPlayer(){
            const attackValue = randomValue(8, 20);
            this.playerHealth = this.playerHealth - attackValue;
        }
    }
}).mount('#game');