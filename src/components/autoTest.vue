
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
          <el-container style="height: -webkit-fill-available;">
            <!--              主体头部-->
            <el-header class="my-el-header">
              <el-text style="font-size: 37px;margin-left: 10px">TJTest</el-text>
            </el-header>
            <!--              主体内容-->
            <el-main style="display: flex">
              <el-container style="display: flex;">
<!--                变量管理侧边栏-->
                <el-aside style="width: fit-content">
                  <el-menu
                      active-text-color="#ffd04b"
                      background-color="#F0F8FF"
                      class="el-menu-vertical-demo"
                      default-active="2"
                      text-color="#fff"
                      style="min-width: 240px;
                      overflow: hidden;height: -webkit-fill-available"
                  >
                    <el-header style="height: fit-content;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 0 10px;">
                      <el-text style="padding: 10px;font-family: math;font-size: larger;float: left;align-self: flex-start;
                                      color: #f83f4c">变量管理</el-text>
                      <div style="display: flex">
                        <el-input suffix-icon="Search" v-model="input" style="width: 200px;" placeholder="Please input" />
                        <el-button type="danger" style="margin-left: 4px" :icon="Plus" circle></el-button>
                      </div>
                    </el-header>
                    <el-menu-item class="item-size" index="2">
                      <span>Navigator Two</span>
                    </el-menu-item>
                    <el-menu-item class="item-size" index="2">
                      <span>Navigator Two</span>
                    </el-menu-item>
                  </el-menu>
                </el-aside>
<!--                变量管理主页面-->
                <el-main style="padding-top: 0">
                  <el-container>
                    <el-header style="height: fit-content;">
                      <el-form label-width="auto" style="max-width: 600px;">
                        <el-form-item>
                          <el-input class="shadow-off" placeholder="123" style="font-size: xx-large;"/>
                        </el-form-item>
                      </el-form>
                      <el-switch
                          v-model="value2"
                          class="mb-2"
                          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
                          active-text="普通测试用例"
                          inactive-text="等价类测试用例"
                      />
                      <br />
                    </el-header>
                    <el-main>
                      <el-container>
                        <el-header>Header</el-header>
                        <el-main>Main</el-main>
                      </el-container>
                    </el-main>
                  </el-container>
                </el-main>
              </el-container>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import {Plus} from "@element-plus/icons-vue";

export default {
  name: 'autoTest',
  computed: {
    Plus() {
      return Plus
    }
  },
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

.item-size {
  height: 30px;
  border-radius: 10px;
  margin-top: 3px;
}

.shadow-off /deep/ .el-input__wrapper{
  box-shadow: none;
}

</style>
