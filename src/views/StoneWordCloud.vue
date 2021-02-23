<template>
  <div>
    <div class="block">
      <span class="demonstration">请指定时间起点生成词云</span>
      <el-date-picker
        v-model="time_floor"
        type="datetime"
        placeholder="选择日期时间"
        align="right"
        :picker-options="pickerOptions"
      >
      </el-date-picker>
      <el-button type="warning" plain :loading="load" @click="getData">
        生成词云
      </el-button>
    </div>

    <wordcloud
      :data="defaultWords"
      nameKey="word"
      valueKey="count"
      :color="myColors"
      :showTooltip="true"
      :wordClick="wordClickHandler"
    >
    </wordcloud>
  </div>
</template>

<script>
import wordcloud from "vue-wordcloud";
import API from "../../static/api";
export default {
  name: "stone-word-cloud",
  props: ["choice"],
  beforeRouteEnter: (to, from, next) => {
    next((vm) => {
      vm.$message({
        showClose: true,
        message: "请指定时间起点生成词云",
        type: "success",
      });
    });
  },
  components: {
    wordcloud,
  },
  data() {
    return {
      myColors: [
        "#1f77b4",
        "#629fc9",
        "#94bedb",
        "#5e94f3",
        "#038999",
        "#03425e",
      ],
      defaultWords: [
        {
          word: "请选择时间",
          count: 12,
        },
        {
          word: "点击按钮",
          count: 10,
        },
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      time_floor: new Date(),
      load: false,
    };
  },
  methods: {
    wordClickHandler(name, value, vm) {
      // TODO
      // console.log('wordClickHandler', name, value, vm);
    },
    getData: function () {
      this.load = true;
      this.axios
        .get(API.URLS.WordCloud, {
          params: {
            time_floor: this.time_floor.getTime(),
            size: 30,
          },
          timeout: 3000,
        })
        .then((response) => {
          console.log(response);
          this.defaultWords = response.data.data;
          this.load = false;
        })
        .catch((error) => {
          this.$message({
            showClose: true,
            message: error,
            type: "error",
          });
          this.load = false;
        });
      // this.load = false;
    },
  },
};
</script>
<style scoped>
.block {
  padding: 8px 16px;
  background-color: #ecf8ff;
  border-radius: 4px;
  border-left: 5px solid #50bfff;
  margin: 20px 0;
}
</style>