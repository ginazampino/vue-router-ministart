<template>
    <div>
        User {{ testData }}
        <button v-on:click="test">Get</button>
    </div>
</template>

<script>
    const axios = require('axios');

    export default {
        data: () => {
            return {
                testData: 'empty'
            }
        },

        methods: {
            test: function runRest() {
                 axios.get('/test').then((res) => {
                    this.testData = res.data;
                })
            }
        }
    };
</script>