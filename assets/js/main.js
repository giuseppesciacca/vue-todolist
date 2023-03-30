/* Descrizione:
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
 */
const { createApp } = Vue

createApp({
    data() {
        return {
            list: [
                {
                    text: 'Imparare HTML',
                    done: true
                },
                {
                    text: 'Imparare CSS',
                    done: true
                },
                {
                    text: 'Imparare JS',
                    done: false
                },
                {
                    text: 'Imparare php',
                    done: false
                },
            ],
            addText: '',
            tasksDone: [],
        }
    },
    methods: {
        deleteItem(item, index) {
            this.list.splice(index, 1);
            this.tasksDone.push(item);
            console.log(this.tasksDone);
        },
        addToDo() {
            console.log(this.addText);
            if (this.addText.length > 3) {
                this.list.push(
                    {
                        text: this.addText,
                        done: false
                    },
                    this.addText = '',
                )
            } else {
                alert('Inserisci almeno 4 caratteri');
            }
        },
        deleteItemArchivied(index) {
            this.tasksDone.splice(index, 1)
        },
        emptyTrash() {
            this.tasksDone = [];
        }
    },
}).mount('#app')