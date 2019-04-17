<template>
  <!-- 日历记事 -->
  <div>
    <full-calendar @dayClick="dayClick" :events="fcEvents" locale="en"></full-calendar>
    <!-- <calendar-range :events="calendarEvents" :selection="calendarSelection"></calendar-range> -->
  </div>
</template>

<script>
var demoEvents = [
  {
    title: 'Sunny Out of Office',
    start: '2016-08-25',
    end: '2017-07-27'
  },
  {
    title: 'event1',
    start: '2019-04-01',
    end: '2019-04-03'
  },
  {
    title: 'event2',
    start: '2019-04-02',
    end: '2019-04-02'
  }
]
export default {
  components: {
    'full-calendar': require('vue-fullcalendar')
  },
  data () {
    return {
      fcEvents: demoEvents
    }
  },
  mounted () {
  },
  methods: {
    dayClick () {
      console.log('触发时间')
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/less" >

</style>
