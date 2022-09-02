function randomValue(min, max){
    return Math.floor(Math.random() *(max - min)) + min;
}
Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            demonHealth: 100,
            roundCounter: 0
        };
    },
    computed:{
        demonBarStyles(){
            return { width: this.demonHealth + '%'};
        },
        playerBarStyles(){
            return { width: this.playerHealth + '%'};
        },
        specialAttackWatcher(){
            return roundCounter % 4 !== 0;
        }
    },
    methods:{
        attackDemon(){
            this.roundCounter++;
            const attackValue = randomValue(5, 10);
            this.demonHealth = this.demonHealth - attackValue;
            this.attackPlayer();    
        },
        attackPlayer(){
            const attackValue = randomValue(8, 20);
            this.playerHealth = this.playerHealth - attackValue;
        },
        specialAttackDemon(){
            this.roundCounter++;
            const attackValue = randomValue(10, 25);
            this.demonHealth = this.demonHealth - attackValue;
            this.attackPlayer();
        }
    }
}).mount('#game');