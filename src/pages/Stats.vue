<template>
  <div class="wrapper-stats-page">
    <div class="wrapper-logo">
      <img alt="Dailyck logo" src="../assets/logo-dailup.png" class="logo" />
      <h3>Estadísticas del mes de Marzo</h3>
    </div>
    <div id="stats"></div>
    <Button type="button" color="blue" @click="goTo('Home')">
      Volver a la home
    </Button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Button from '../components/ui/Button.vue'
import { useGoTo } from '../hooks/useGoTo.ts'
import * as echarts from 'echarts'

const router = useRouter()
const { goTo } = useGoTo(router)

onMounted(() => {
  const statsDiv = document.querySelector('#stats')
  const myChart = echarts.init(statsDiv)

  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Fran', 'Mario', 'Alberto'],
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '5%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Fran',
        type: 'line',
        smooth: true,
        stack: 'Total',
        color: 'violet',
        data: [
          120, 132, 101, 134, 234, 290, 330, 310, 132, 101, 120, 132, 101, 134,
          90, 230, 210, 120, 132, 101, 120, 132, 234, 290, 330, 310, 210, 120,
          132, 101,
        ],
      },
      {
        name: 'Mario',
        type: 'line',
        smooth: true,
        stack: 'Total',
        color: 'blue',
        data: [
          230, 158, 126, 251, 211, 155, 330, 310, 132, 101, 120, 132, 101, 134,
          90, 230, 210, 120, 132, 101, 120, 132, 234, 290, 330, 310, 210, 120,
          132, 101,
        ],
      },
      {
        name: 'Alberto',
        type: 'line',
        smooth: true,
        stack: 'Total',
        color: 'green',
        data: [
          220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 220, 182, 191, 234,
          210, 120, 132, 101, 120, 191, 220, 182, 191, 234, 290, 330, 310, 220,
          182, 191,
        ],
      },
    ],
  }

  myChart.setOption(option)
})
</script>

<style lang="scss">
.wrapper-stats-page {
  width: 100%;
  padding: 20px 0 60px 0;
  text-align: center;

  .wrapper-logo {
    width: 100%;
    padding: 0 0 20px 0;

    .logo {
      width: 150px;
    }

    h3 {
      margin-top: 20px;
    }
  }

  #stats {
    width: 100%;
    height: 70vh;
    max-height: 70vh;
    padding: 0 20px;
  }
}
</style>
