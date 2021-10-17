<template>
    <div id="main" style="width: 100%; height: 80%;"></div>
</template>
<script>
    import * as echarts from 'echarts'
    import {onMounted, reactive} from 'vue'
    import axios from "axios";
    import {useStore} from "vuex";

    export default {
        name: "Analysis",
        setup() {
            let store = useStore()
            let oneChartData = reactive({
                riqi_list: [],
                user_count_list: [],
                count: []
            })

            let getData = () => {
                store.commit('changeLoadingShow', true)
                axios.get('http://ocserv.chuanyun101.com/listday').then(
                    res => {
                        oneChartData.riqi_list = res.data['riqi_list']
                        oneChartData.user_count_list = res.data['user_count_list']
                        oneChartData.count = res.data['count']
                        echartInit()
                        store.commit('changeLoadingShow', false)
                    }
                )
            }

            const echartInit = () => {
                let myChart = echarts.init(document.getElementById('main'));
                let option = {
                    // 指定图表的配置项和数据
                    title: {
                        text: '每日使用情况',
                        // subtext: '副标题',  //副标题
                        left: 'center',
                        top: 'top',
                        textStyle: {
                            fontSize: 18,
                            color: '#617be3'
                        }
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        // 距离容器10%
                        right: "10%",
                        // 修饰图例文字的颜色
                        textStyle: {
                            color: "#4c9bfd",
                            fontSize: "12"
                        },
                        data: ['用户总数', '使用总数']
                    },
                    calculable: true,
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        axisTick: {
                            show: false
                        },
                        data: oneChartData.riqi_list
                    },
                    yAxis: {
                        type: 'value',
                        axisTick: {
                            show: false
                        },
                        name: '（个）'
                    },
                    series: [
                        {
                            name: '用户总数',
                            type: 'line',
                            data: oneChartData.user_count_list
                        },
                        {
                            name: '使用总数',
                            type: 'line',
                            data: oneChartData.count
                        },
                    ]
                }
                myChart.setOption(option)  // 使用刚指定的配置项和数据显示图表。
            }
            onMounted(() => {
                getData()
                // echartInit()
            })
            return {
                // echartInit
            }
        }
    }
</script>

<style lang="scss">
    .analysis {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 80%;
    }
</style>