function randomValue(min, max){
    return Math.floor(Math.random() *(max - min)) + min;
}
Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100
        };
    },
    methods:{
        attackMonster(){
            const attackValue = randomValue(5, 10);
            this.monsterHealth = this.monsterHealth - attackValue;
            this.attackPlayer()    
        },
        attackPlayer(){
            const attackValue = randomValue(8, 20);
            this.playerHealth = this.playerHealth - this.attackValue;
        }
    }
}).mount('#game');