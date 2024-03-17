import { ref } from 'vue'
export default {
    setup() {
        const count = ref(0)
        return { count }
    },
    methods: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    },

    template: `
    <p>Count is {{ count }}</p>
    <button @click="increment">Add one number</button>
    <button @click="decrement">Remove one number</button>
    `
}