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
            this.$emit('applied');
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
    }

});