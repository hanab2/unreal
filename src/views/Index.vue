<template>
  <!--  <div>-->
  <!--    <SideBar></SideBar>-->
  <!--  </div>-->
  <div>
    <el-container>
      <el-aside width="25%">
        <el-menu :default-openeds="['1','2','3']">
          <el-menu-item index="1"><i class="el-icon-position"></i>斯通舆情综合管理平台</el-menu-item>
          <el-submenu index="2">
            <template slot="title">舆情词云</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <router-link to="/word_cloud/1">最近半小时词云</router-link>
              </el-menu-item>
              <el-menu-item index="2-2">
                <router-link to="/pie">饼图</router-link>
              </el-menu-item>
              <el-menu-item index="2-3">最近一天词云</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">舆情折线图</template>
            <el-menu-item-group>
              <el-menu-item index="3-1">
                <router-link to="/line">最近半小时折线图</router-link>
              </el-menu-item>
              <el-menu-item index="3-2">最近一小时词云</el-menu-item>
              <el-menu-item index="3-3">最近一天词云</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

  export default {
    name: "Main",
    components: {}
  }
</script>

<style scoped>

</style>
