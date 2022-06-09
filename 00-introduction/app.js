const app = new Vue({
    el: "#app",
    data() {
        return {
            msg: "Nous débuts avec VueJS"
        }


    },
    methods: {
        alertMsg() {
            alert(`Voici le message: ${this.msg}`)
        }

    }
})