
<template>
  <div class="common-layout" style="display: flex;height: 98vh;">
    <el-container>
      <!--        头部-->
      <el-header style="display: flex;align-items: center;height: 40px;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">promotion management</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <!--        底部-->
      <el-container style="margin: 10px;height: 97vh;background-color: white;border-radius:10px;">
        <!--          侧边栏-->
        <el-aside width="300px" style="border-radius:inherit;border-right: 1px solid var(--el-menu-border-color)">
          <el-container>
            <el-header style="height: 102px;display: flex;align-items: center;justify-content: center">
              <img style="width: 38px; height: 38px" src="@/assets/mylogo.png">
              <el-text style="padding-left: 10px;font-family: math;font-size: larger">TJTest</el-text>
            </el-header>
            <el-main>
              <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  style="display: flex;flex-wrap: wrap;border-right: 0"
              >
                <el-sub-menu index="1">
                  <template #title>
                    <span style="font-size: large">Navigator One</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                    <el-menu-item index="1-3">item two</el-menu-item>
                    <el-menu-item index="1-4">item two</el-menu-item>
                    <el-menu-item index="1-5">item two</el-menu-item>
                    <el-menu-item index="1-6">item two</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
                <el-menu-item index="2">
                  <template #title>
                    <span style="font-size: large">Navigator One</span>
                  </template>
                </el-menu-item>
              </el-menu>
            </el-main>
          </el-container>
        </el-aside>
        <!--          主体-->
        <el-main>
          <el-container>
            <!--              主体头部-->
            <el-header class="my-el-header">
              <el-text style="font-size: 37px;margin-left: 10px">TJTest</el-text>
            </el-header>
            <!--              主体内容-->
            <el-main>
              <el-row>
                <!--                  左侧-->
                <el-col :span="10">
                  <el-space direction="vertical" size="large">
                    <el-card>
                      <template #header>
                        <span style="font-size: larger;">
                          电脑销售问题
                        </span>
                      </template>
                      电脑销售系统，主机（25￥单位价格，每月最多销售的数量为70），显示器（30￥单位价格，每月最多销售数量为80），
                      外设（45￥单位价格，每月最多销售的数量为90）； 每个销售员每月至少销售一台完整的机器，当系统的主机这个变量接受到-1值的时候，
                      系统自动统计该销售员本月的销售总额。
                      当销售额小于等于1000（包括1000）按照10%提佣金，当销售额在1000-1800之间（包括1800）的时候按照15%提佣金，
                      当销售额大于1800时按照20%提佣金。（用边界值方法分析和设计测试用例）
                    </el-card>
                    <el-card class="card-width">
                      <template #header>
                        <span style="font-size: larger;">
                          测试用例
                        </span>
                      </template>
                      介绍内容
                    </el-card>
                  </el-space>
                </el-col>
                <!--                  右侧-->
                <el-col :span="14" style="display: flex;justify-content: center">
                  <el-card style="width: 50vh;margin: 1vh">
                    <template #header>
                      <div class="card-header" style="font-size: larger;">
                        <span>练习内容</span>
                      </div>
                    </template>
                    <el-form
                        label-width="auto"
                        style="max-width: 600px"
                        label-position="top"
                    >
                      <el-form-item label="销售的主机数目">
                        <el-input/>
                      </el-form-item>
                      <el-form-item label="销售的显示器数目">
                        <el-input/>
                      </el-form-item>
                      <el-form-item label="销售的外设数目">
                        <el-input  />
                      </el-form-item>
                    </el-form>
                    <template #footer>
                      <el-form
                          label-width="auto"
                          style="max-width: 600px"
                          label-position="top"
                      >
                        <el-form-item label="返回的佣金是">
                          <el-input/>
                        </el-form-item>
                        <el-button type="warning" plain>Warning</el-button>
                      </el-form>
                    </template>
                  </el-card>
                </el-col>
              </el-row>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
export default {
  name: 'ExThree',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-sub-menu {
  width: -webkit-fill-available;
}
.el-menu-item{
  width: -webkit-fill-available;
  display: flex;
}
.el-aside .el-main{
  padding: 0;
}
.el-menu-item-group {
  width: -webkit-fill-available;
}
.el-menu-item-group .el-menu-item{
  font-size:larger;
}
.my-el-header {
  box-shadow: 4px 1px 6px rgba(0,21,41,.35);
  display: flex;
  height: 100px !important;
  align-items: center;
}
.el-space{
  width: -webkit-fill-available ;
}

/deep/ .el-space__item{
  width: -webkit-fill-available;
  margin: 1vh;
}



</style>
