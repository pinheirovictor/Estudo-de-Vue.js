new Vue({
    el:'#desafio',
    data:{
        nome:'victor pinheiro',
        idade: 20,
        link: 'https://i.ytimg.com/vi/R3UdXDJtQro/maxresdefault.jpg'

    }, 
    methods: {
        idadex3: function() {
            return this.idade * 3
        },
        aleatorio: function(){
            return Math.random(0,1)
        }, 
        img: function(){
            return 'https://i.ytimg.com/vi/R3UdXDJtQro/maxresdefault.jpg'
        }
    },
})