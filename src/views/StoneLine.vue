<template>
  <div>
    <el-divider content-position="center">折线图</el-divider>
    <chart ref="chart" :options="options" :auto-resize="true" theme="light" ></chart>
  </div>
</template>

<script>
  export default {
    name: 'stone-line',
    data() {
      return {
        options: {},
      }
    },
    methods: {
      hover: function (event) {
        console.log(event);
      }
    },
    mounted() {
      // this.options = {
      //   title: {
      //     text: '折线图堆叠'
      //   },
      //   tooltip: {
      //     trigger: 'axis'
      //   },
      //   legend: {
      //     data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      //   },
      //   grid: {
      //     left: '3%',
      //     right: '4%',
      //     bottom: '3%',
      //     containLabel: true
      //   },
      //   toolbox: {
      //     feature: {
      //       saveAsImage: {}
      //     }
      //   },
      //   xAxis: {
      //     type: 'category',
      //     boundaryGap: false,
      //     data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      //   },
      //   yAxis: {
      //     type: 'value'
      //   },
      //   series: [
      //     {
      //       name: '邮件营销',
      //       type: 'line',
      //       stack: '总量',
      //       data: [120, 132, 101, 134, 90, 230, 210]
      //     },
      //     {
      //       name: '联盟广告',
      //       type: 'line',
      //       stack: '总量',
      //       data: [220, 182, 191, 234, 290, 330, 310]
      //     },
      //     {
      //       name: '视频广告',
      //       type: 'line',
      //       stack: '总量',
      //       data: [150, 232, 201, 154, 190, 330, 410]
      //     },
      //     {
      //       name: '直接访问',
      //       type: 'line',
      //       stack: '总量',
      //       data: [320, 332, 301, 334, 390, 330, 320]
      //     },
      //     {
      //       name: '搜索引擎',
      //       type: 'line',
      //       stack: '总量',
      //       data: [820, 932, 901, 934, 1290, 1330, 1320]
      //     }
      //   ]
      // }
      this.options = {
        legend: {},
        tooltip: {
          trigger: 'axis',
          showContent: true
        },
        dataset: {
          source: [
            ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
            ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
            ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
            ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
            ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
          ]
        },
        xAxis: {type: 'category'},
        yAxis: {},
        grid: {top: '45%'},
        series: [
          {
            type: 'pie',
            id: 'pie',
            radius: ['35%', '20%'],
            center: ['50%', '25%'],
            emphasis: {focus: 'data'},
            label: {
              formatter: '{b}: {@2012} ({d}%)'
            },
            encode: {
              itemName: 'product',
              value: '2012',
              tooltip: '2012'
            }
          },
          {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
          {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
          {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
          {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},

        ]
      };
    }
  }
</script>
