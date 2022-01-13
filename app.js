const App = {
    data() {
        return {
            placeholderString: 'Ваше завдання',
            title: 'ToDo List',
            inputValue: '',
            notes: ['Завдвння 1', ]
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value

        },
        addNewNote() {
           if (this.inputValue !== '') {
            this.notes.push(this.inputValue)
            this.inputValue = ''

           }
            
        },
        removeNote(idx) {
            this.notes.splice(idx, 1)

        }
    }
}

Vue.createApp(App).mount('#app')