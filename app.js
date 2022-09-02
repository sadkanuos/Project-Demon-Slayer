function randomValue(min, max){
    return Math.floor(Math.random() *(max - min)) + min;
};
Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            demonHealth: 100,
            roundCounter: 0,
            winner: null,
            logMessages: []
        };
    },
    computed:{
        demonBarStyles(){
            if (this.demonHealth < 0){
                return { width: '0%' };
            } else {
                return { width: this.demonHealth + '%'};
            }
        },
        playerBarStyles(){
            if (this.playerHealth < 0){
                return { width: '0%' };
            } else {
                return { width: this.playerHealth + '%'};
            }
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
            this.addLogMessages('player', 'attack', attackValue);
            this.attackPlayer();    
        },
        attackPlayer(){
            const attackValue = randomValue(8, 20);
            this.playerHealth = this.playerHealth - attackValue;
            this.addLogMessages('Demon', 'attack', attackValue);
        },
        specialAttackDemon(){
            this.roundCounter++;
            const attackValue = randomValue(10, 30);
            this.demonHealth = this.demonHealth - attackValue;
            this.addLogMessages('player', 'Special attack', attackValue);
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
            this.addLogMessages('player', 'heal', healValue);
            this.attackPlayer();
        },
        startNewGame(){
            this.playerHealth = 100;
            this.demonHealth = 100;
            this.roundCounter = 0;
            this.winner = null;
            this.logMessages = [];
        }, 
        surrenderGame(){
            this.winner = 'demon';
        },
        addLogMessages(party, action, value){
            this.logMessages.unshift({
                actionBy: party,
                actionType: action,
                actionValue: value
            });     // push the message at the end of the array
        }
    }
}).mount('#game');