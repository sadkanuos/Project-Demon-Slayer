function randomValue(min, max){
    return Math.floor(Math.random() *(max - min)) + min;
};
Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            demonHealth: 100,
            roundCounter: 0,
            winner: null
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
            return this.roundCounter % 3 !== 0;
        }
    },
    watch: {
        playerHealth(value) {
            if(value <= 0 && this.demonHealth <= 0){
                this.winner = 'draw';
            } else if (value <= 0){
                this.winner = 'demon';
            }
        },
        demonHealth(value) {
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = 'draw';
            } else if (value <= 0){
                this.winner = 'player';
            }
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
            const attackValue = randomValue(10, 30);
            this.demonHealth = this.demonHealth - attackValue;
            this.attackPlayer();
        },
        healPlayer(){
            this.roundCounter++;
            const healValue = randomValue(12, 20);
            if (this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            } else { 
                this.playerHealth = this.playerHealth + healValue;
            }
            this.attackPlayer();
        }
    }
}).mount('#game');