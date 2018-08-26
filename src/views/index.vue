<template>
  <div id="body" :style="{height: screenHeight}">
    <!-- header -->
    <div class="container-fluid header">
      <div class="logo col-lg-2">
        <img src="../assets/images/logo_01.jpg" alt="logo">
      </div>
      <div class="header-tab col-lg-4">
        <div class="header-tab-item"
             v-for="(item,index) in TabData"
             :key="index"
             v-text="item.label"
             @click="tab(index)"
             :class='{active: index == tabIndex}'></div>
      </div>
      <div class="col-lg-4"></div>
      <div class="col-lg-2 login">
        <img src="../assets/images/login_04.jpg" alt="">
        <img src="../assets/images/logout_06.jpg" alt="">
      </div>
    </div>

    <!-- main -->
    <div class="container-fluid main">
      <!-- left -->
      <div class="left-section col-lg-2">
        <div v-for="(item,index) in leftTab">
          <div class="left-section-item"
               :key="index"
               @click="leftTabEvent(index)"
               :class="{leftactive: index == leftTabIndex}">
            <div class=left-section-item-icon>
              <img :src='item.src' alt="" style="width: 32px;height: 32px;margin-top: 12px">
            </div>
            <div class="left-section-item-context">
              <p>{{ item.label }} <span> {{ item.view }}</span></p>
              <p><span>{{ item.Eng }}</span></p>
            </div>
          </div>
          <div v-if="index == leftTabIndex">
            <div class="leftChild" v-for="(ite,index) in item.child" :key="index" @click="tabChild(index)" :class="{childActive: index == tabchildInd}">
              <li>{{ ite.name }}</li>
            </div>
          </div>
        </div>

      </div>

      <!--center-->
      <transition name="left">
      <div class="center-section col-lg-8" :class="{'col-lg-10': !tabRightBool}">
        <img src="../assets/images/main_03.jpg" alt="">
        <img src="../assets/images/home_10.jpg" alt="" style="width: 153px;position: absolute; top: 18px;right: 60px">
        <img src="../assets/img/icon_full_screen.png" @click='quan' alt="" style="width: 35px;height: 35px;position:absolute;right: 10px; top:620px">
        <!--<div class="tabCenter">-->
          <!--<div style=""></div>-->
          <!--<div>焊接车间</div>-->
          <!--<div>喷漆车间</div>-->
          <!--<div>总装车间</div>-->
        <!--</div>-->


        <img src="../assets/img/iconc_shrink.png" alt="" @click="tabRight"
             style="width:30px;height:30px;display:block !important;position: absolute; right: 5px; top: 10px;background: rgba(111, 112, 117, 0.3);z-index:999">
      </div>
      </transition>
      <!-- right -->
      <transition name="left">
      <div class="right-section" v-if="tabRightBool">
        <!--日期-->
        <div class="right-deta">
          <div>
            <img src="../assets/img/icon_calendar.png" alt="">
          </div>
          <div>
            <span>2018-5-10</span>
            <span>12:35:02</span>
          </div>
          <div><img src="../assets/img/icon_drop_down.png" alt=""></div>
        </div>

        <!--进度-->
        <div class="right-progress">
          <p class="right-progress-name">名称：电池箱体</p>
          <p class="right-progress-code">编号：0X36T</p>
        </div>

        <!--进度-->
        <div class="circle">
          <div style="width: 50%;">
            <progress-bar value="66"
                          :options="option1"></progress-bar>
          </div>
          <div style="padding-left: 10px">
            <h2>300</h2>
            <p>日产实际产量</p>

            <h4>600</h4>
            <p>日计划产量</p>
          </div>
        </div>

        <!--不合格的-->
        <div class="nostandard">
          <p style="">不合格品数</p>
          <p class="grand-title" style="margin-bottom: -10px;margin-bottom: -10px;display: flex;justify-content: space-between;border-bottom: 1px solid #262A3D;">
            <span>20.25%</span>
            <span>20</span>
          </p>
          <progress-bar class="xian" value="20.25" type="rect"
                        :options="option4"></progress-bar>
        </div>

        <!--累计停机-->
        <div class="grand nostandard">
          <h6 style="color: #CCCFD5;margin-bottom: 10px">累计停机时间</h6>
          <p class="grand-title" style="margin-bottom: -10px;display: flex;justify-content: space-between;border-bottom: 1px solid #262A3D;border-bottom: 1px solid #262A3D;">
            <span>激光切割机</span>
            <span>90min</span>
          </p>
          <progress-bar class="xian" value="65" type="rect"
                        :options="{rectWidth:200,rectHeight:3,rectRadius:5,text: '',gradientColor: ['#C7660F','#F0F71C'],pathColors:['#0D1023']}"></progress-bar>

          <p class="grand-title" style="margin-bottom: -10px;display: flex;justify-content: space-between;border-bottom: 1px solid #262A3D;">
            <span>折弯机</span>
            <span>45min</span>
          </p>
          <progress-bar class="xian" value="100" type="rect"
                        :options="{rectWidth:200,rectHeight:3,rectRadius:5,text: '',gradientColor: ['#C7660F','#F0F71C'],pathColors:['#0D1023']}"></progress-bar>
        </div>

        <!--单产能耗-->
        <div class="grand nostandard">
          <h6 style="color: #CCCFD5;margin-bottom: 10px">单产能耗达标率</h6>
          <p class="grand-title" style="margin-bottom: -10px;display: flex;justify-content: space-between;border-bottom: 1px solid #262A3D;">
            <span>激光切割机</span>
            <span>80%</span>
          </p>
          <progress-bar class="xian" value="80" type="rect"
                        :options="{rectWidth:200,rectHeight:3,rectRadius:5,text: '',gradientColor: ['#C7660F','#F0F71C'],pathColors:['#0D1023']}"></progress-bar>
          <p class="grand-title" style="margin-bottom: -10px;display: flex;justify-content: space-between;border-bottom: 1px solid #262A3D;">
            <span>卷圆机</span>
            <span>130%</span>
          </p>
          <progress-bar class="xian" value="130" type="rect"
                        :options="{rectWidth:200,rectHeight:3,rectRadius:5,text: '',gradientColor: ['#C7660F','#F0F71C'],pathColors:['#0D1023']}"></progress-bar>
        </div>

        <!--不合格-->
        <div class="nostandardCause">
          <h6 style="color: #CCCFD5;margin-bottom: 10px">不合格因素</h6>
          <div class="nostandardCause-main">
            <div>
              <progress-bar
                style="margin-left: 20%"
                value="70"
                            :options="option3"></progress-bar>
              <p>物料不合格</p>
            </div>
            <div>
              <progress-bar style="margin-left: 20%" value="23"
                            :options="option2"></progress-bar>
              <p>工艺错误</p>
            </div>
            <div>
              <progress-bar style="margin-left: 20%" value="15"
                            :options="option2"></progress-bar>
              <p>操作失误</p>
            </div>
            <div>
              <progress-bar style="margin-left: 20%" value="15"
                            :options="option2"></progress-bar>
              <p>设备故障</p>
            </div>
            <div>
              <progress-bar style="margin-left: 20%" value="8"
                            :options="option2"></progress-bar>
              <p>运输损伤</p>
            </div>
          </div>
        </div>
      </div>
      </transition>
    </div>

  </div>
</template>

<script>
  import {fullscreenToggel} from '../assets/css/util'
  import panoramic from '../assets/img/icon_panoramic_view.png'
  import Effcie from '../assets/img/icon_efficiency_view.png'
  import Ener from '../assets/img/icon_energy_consumption_view.png'
  import Monit from '../assets/img/icon_monitor_setting.png'
  import progressBar from '../components/progress-bar'
  import index from "../router";

  export default {
    name: "index",
    components:{
      progressBar
    },
    data() {
      return {
        TabData: [
          {label: '3D监控中心'},
          {label: '监测中心'},
          {label: '设备管理器'},
          {label: '控制中心'},
        ],
        tabIndex: 0,
        leftTab: [
          {
            label: "全景",
            view: '视图',
            src: panoramic,
            Eng: 'Panoramic View',
            child: [
              {name: '设备驾驶舱'},
              {name: '巡检管理'},
              {name: '报警中心'},
            ]
          },
          {
            label: "效率",
            view: '视图',
            src: Effcie,
            Eng: 'Efficiency View',
            child: [
              {name: '设备驾驶舱'},
              {name: '巡检管理'},
              {name: '报警中心'},
            ]
          },
          {
            label: "能耗",
            view: '视图',
            src: Ener,
            Eng: 'Energy Consumption View',
            child: [
              {name: '设备驾驶舱'},
              {name: '巡检管理'},
              {name: '报警中心'},
            ]
          },
          {
            label: "监控",
            view: '设置',
            src: Monit,
            Eng: 'Monitor Consumption View',
            child: [
              {name: '设备驾驶舱'},
              {name: '巡检管理'},
              {name: '报警中心'},
            ]
          },
        ],
        leftTabIndex: 0,
        time: { //累计统计表
          rectWidth:200,
          rectHeight:3,
          rectRadius:5,
          text: '',
          gradientColor: ['#C7660F','#F0F71C'],
          pathColors:['#0D1023']
        },
        tabRightBool: true,
        rightmaxwidth: '240px',
        rightminwidth: '0px',
        tabchildInd: 0,
        option1:{radius:50,circleLineCap: 'round',varyStrokeArray: [5,6],gradientColor: ['#C7660F','#F0F71C','#fff'],pathColors: ['#414B5E','#11B5DE'],progress: [1, 0.5],textColor: 'white',
          text: function (value) {
            return '<p style="font-size: 0.9em;margin-top: -0.4em">'+ this.htmlifyNumber(value) +'%</p><p style="font-size: 0.4em;margin-top: -7em">完成率</p>';
          }},
        option2:{radius:30,circleLineCap: 'round',varyStrokeArray: [1,2],gradientColor: ['#C7660F','#CE113D'],pathColors: ['#414B5E','#555967'],progress: [1, 0.5],textColor: 'white',
          text: function (value) {
            return this.htmlifyNumber(value) + '<span style="font-size: 0.9em;">%</span>';
          }},
        option3:{radius:30,circleLineCap: 'round',varyStrokeArray: [1,2],gradientColor: ['#C7660F','#CE113D'],pathColors: ['#414B5E','#E5266E'],progress: [1, 0.5],textColor: 'white',
          text: function (value) {
            return this.htmlifyNumber(value) + '<span style="font-size: 0.9em;">%</span>';
          }},
        option4:{rectWidth:200,rectHeight:3,rectRadius:5,text: '',gradientColor: ['#C7660F','#BD2364'],pathColors:['#0D1023']},
        screenHeight:''
      }
    },
    methods: {
      tab(index) {
        this.tabIndex = index
      },
      leftTabEvent(index) {
        this.leftTabIndex = index
        this.tabchildInd = 0

      },
      tabRight(){
        console.log(1)
        this.tabRightBool = !this.tabRightBool
        console.log(this.tabRightBool)
      },
      tabChild(index){
        console.log(index)
        this.tabchildInd = index
      },
      quan(){

        fullscreenToggel()
        this.screenHeight = document.documentElement.clientHeight + 'px'
      }
    },
    created(){
      this.screenHeight = document.documentElement.clientHeight + 'px'
      console.log(this.screenHeight)
    }
  }
</script>


<style scoped>
  @import "../assets/css/home.css";

  .left-enter {
    transform: translateX(100px);
  }
  .left-enter-active {
    transition: 1s;
  }
  .left-enter-to {
    transform: translateX(0);
  }

  .left-leave {
  transform: translateX(100px);
  }
  .left-leave-active {
  transition:2s;
  }
  .left-leave-to {
  transform: translateX(0);
  }

  .fade-enter {
  opacity: 0;
  }
  .fade-enter-active {
  transition: 1s;
  }
  .fade-enter-to {
  opacity: 1;
  }
  .fade-leave {
  opacity: 1;
  }
  .fade-leave-active {
  transition: 1s;
  }
  .fade-leave-to {
  opacity: 0;
  }
</style>
