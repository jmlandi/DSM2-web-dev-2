import { ref } from 'vue';

export default {
    setup() {
        const display = ref("");
        const numberBefore = "";
        const numberAfter = "";
        const operator = "";
        const value = 0;
        return { display, numberAfter, numberBefore, operator, value }
    },
    methods: {

        valueFromInput(number) {
            if (number === ",") number = ".";
            if (this.display == this.value) this.display = "";
            if (this.operator.includes("+") || this.operator.includes("-") || this.operator.includes("/") || this.operator.includes("+")) {
                return this.numberAfter = this.numberAfter.concat("", number);
            }
            return this.numberBefore = this.numberBefore.concat("", number);
        },

        handlerNumber(number) {
            this.valueFromInput(number);
            this.display = this.display.concat("", number);
        },

        handlerButton(operator) {
            switch (operator) {
                case "/":
                    this.setOperator(operator);
                    break;
                case "+":
                    this.setOperator(operator);
                    break;
                case "-":
                    this.setOperator(operator);
                    break;
                case "*":
                    this.setOperator(operator);
                    break;
                case "=":
                    this.handlerEqual();
                    break;
                case "c":
                    this.handlerClear();
                    break;
            }
        },

        setOperator(operator) {
            this.operator = operator;
            this.display = this.display.concat(` ${this.operator} `);
        },
        
        handlerClear() {
            this.display = "";
            this.numberAfter = "";
            this.numberBefore = "";
            this.operator = "";
            this.value = 0;
        },

        handlerSum() {
            this.value = parseFloat(this.numberBefore) + parseFloat(this.numberAfter);
            this.display = this.value;
        },

        handlerEqual() {
            switch (this.operator) {
                case "+":
                    this.handlerSum();
                    break;
                default:
                    this.handlerClear();
            }
            this.operator = "";
            this.numberBefore = this.value;
        }

    }
}
