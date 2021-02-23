<template>
  <div>
    <el-divider content-position="center">饼图</el-divider>
    <chart
      ref="chart"
      :options="options"
      auto-resize="true"
      theme="dark"
    ></chart>
  </div>
</template>

<script>
import API from "../../static/api";

export default {
  name: "stone-pie",
  beforeRouteEnter: (to, from, next) => {
    next((vm) => {
      vm.getData();
    });
  },
  data() {
    return {
      options: {},
    };
  },
  methods: {
    getData: function () {
      this.axios.get(API.MOCKURLS.Pie).then((response) => {
        this.options.series[0].data = response.data;
      });
    },
  },
  mounted() {
    this.options = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        bottom: "0%",
        left: "center",
      },
      series: [
        {
          type: "pie",
          radius: ["40%", "60%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: true,
            position: "outside",
            formatter: "{b} -> {d}%\n\n数量 -> {@xxx}",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "15",
              fontWeight: "bold",
              fontFamily: "Microsoft YaHeis",
            },
          },
          labelLine: {
            smooth: true,
            show: true,
          },
          data: [
            // {value: 1048, name: '搜索引擎'},
            // {value: 735, name: '直接访问'},
            // {value: 580, name: '邮件营销'},
            // {value: 484, name: '联盟广告'},
            // {value: 300, name: '视频广告'}
          ],
        },
      ],
    };
  },
};
</script>
