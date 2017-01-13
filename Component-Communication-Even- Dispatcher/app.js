window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
}


Vue.component('coupon', {

    template: `
        <input placeholder="enter your cupon code" @blur="onBlur">
    `,

    data() {
        return {};
    },

    methods: {
        onBlur() {
            // alert('local applied!!');
            // this.$emit('applied');
            Event.fire('applied');
        }
    }
});

new Vue({

    el: '#root',

    data() {
        return {
            applied: false
        }
    },

    methods: {
        onCouponApplied() {
            alert('global applied!!');
            this.applied = true;
        }
    },

    created() {
        Event.listen('applied', () => alert('handling it!!!'));
    }

});