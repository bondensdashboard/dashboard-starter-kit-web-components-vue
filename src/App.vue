<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
  import LineChart from './components/LineChart'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai'],
          datasets: [
            {
              label: 'Salg 2020',
              borderColor: 'rgba(255, 205, 86, 1)',
              backgroundColor: 'rgba(255, 205, 86, 0.9)',
              data: [450, 550, 560, 550, 650]
            }, {
              label: 'Salg 2021',
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.9)',
              data: [550, 560, 600, 580, 700]
            }
          ]
        }
      }
    }
  }
</script>

<style>
  .small {
    max-width: 400px;
    margin:  150px auto;
  }
</style>