Vue.createApp({
    data(){
        return{
            enteredTask: '',
            tasks: [],
            show: true,
            textForShow: 'Hide List'
        };
    },
    methods:{
        addTask(){
            this.tasks.push(this.enteredTask);
            this.enteredTask = '';
        },
        setShow(){
            if (this.show === true) {
                this.show = false;
                this.textForShow = 'Show List';
            }
            else {
                this.show = true;
                this.textForShow = "Hide List";
            }
        }
    }
}).mount('#assignment');