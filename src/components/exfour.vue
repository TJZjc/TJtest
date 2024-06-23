
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
                  default-active="1-4"
                  class="el-menu-vertical-demo"
                  style="display: flex;flex-wrap: wrap;border-right: 0"
                  @select="handleSelect"
              >
                <el-sub-menu index="1">
                  <template #title>
                    <span style="font-size: large">作业测试</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">判断三角形类型</el-menu-item>
                    <el-menu-item index="1-2">万年历问题</el-menu-item>
                    <el-menu-item index="1-3">电脑销售问题</el-menu-item>
                    <el-menu-item index="1-4">电信收费问题</el-menu-item>
                    <el-menu-item index="1-5">程序图构建</el-menu-item>
                    <el-menu-item index="1-6">佣金值计算</el-menu-item>
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
                          电信收费问题
                        </span>
                      </template>
                      <div class="card-left">
                        <p>A.每月的电话总费用=基本月租费+折扣后的实际的通话费，如果没有折扣则按实际通话费计算，基本月租费为25元，每分钟通话费为0.15元。</p>
                        <p>B.实际通话费是否有折扣与当月的通话时间（分钟）和本年度至本月的累计未按时缴费的次数有关。</p>
                        <p>C.当月的通话分钟数和折扣比例及本年度未按时缴费次数之间有直接的对应关系，如果本年度的未按时缴费的次数超过本月通话时间所对应的容许值则免于折扣，并按实际的通话费计算。</p>
                        <p>D.通话时间和折扣比例及未按时缴费次数的关系如下表。</p>
                      </div>
                      <el-descriptions
                          title="通话时间和折扣比例及未按时缴费次数关系表"
                          direction="vertical"
                          :column="4"
                          :size="size"
                          border
                      >
                        <el-descriptions-item label="通话时间">
                            <p>0＜ time ≤60</p>
                            <p>60＜ time ≤120</p>
                            <p>120＜ time ≤180</p>
                            <p>180＜ time ≤300</p>
                            <p>300＜ time</p>
                        </el-descriptions-item>
                        <el-descriptions-item label="最大容许不按时缴费次数">
                          <div class="dis-centre">
                          <p>1</p>
                          <p>2</p>
                          <p>3</p>
                          <p>3</p>
                          <p>6</p>
                          </div>
                        </el-descriptions-item>
                        <el-descriptions-item label="通话时间段的折扣率" :span="2">
                          <div class="dis-centre">
                          <p>1.0%</p>
                          <p>1.5%</p>
                          <p>2.0%</p>
                          <p>2.5%</p>
                          <p>3.0%</p>
                          </div>
                        </el-descriptions-item>
                      </el-descriptions>
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
                  <el-card style="width: 50vh;margin: 1vh;max-height: 460px">
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
                      <el-form-item label="通话时间">
                        <el-input v-model.number="form.side1"/>
                      </el-form-item>
                      <el-form-item label="不按时缴费次数">
                        <el-input v-model.number="form.side2"/>
                      </el-form-item>
                    </el-form>
                    <template #footer>
                      <el-form
                          label-width="auto"
                          style="max-width: 600px"
                          label-position="top"
                      >
                        <el-form-item label="实际通话费用">
                          <el-input v-model="money"/>
                        </el-form-item>
                        <el-button type="success"  @click="submitForm" plain style="margin-top: 15px">Submit</el-button>
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
import axios from "axios";
import { ElMessage } from 'element-plus';
export default {
  name: 'ExFour',
  props: {
    msg: String
  },
  data() {
    return {
      form: {
        side1: '',
        side2: '',
      },
      money: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const formData = new FormData();
        formData.append('time', this.form.side1);
        formData.append('badtimes', this.form.side2);
        const response = await axios.post('http://8.130.47.29:8000/Telecom/', formData,{
           headers: {
          'Content-Type': 'multipart/form-data'
        }
        });
        console.log('Response data:', response.data);
        this.money = response.data.result;
        const message = response.data.message;
        const result = parseFloat(response.data.result)
        if(result<0)
        {
          ElMessage.warning(message)
        }else {
          ElMessage.success(message);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
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

.card-left{
  text-align: left;
}

.card-left p{
  text-indent: -1em;
  margin-left: 1em;
}

.dis-centre{
  text-align: center;
}
</style>
