import Highcharts, { Chart, Options } from 'highcharts';
import { defineComponent, h, onMounted, onUnmounted, PropType, Ref, ref, toRefs, watch } from 'vue';
const vueHighcharts = defineComponent({
  name: 'VueHighchart',
  props: {
    type: {
      type: String as PropType<keyof typeof Highcharts>,
      default: 'chart'
    },
    options: {
      type: Object as PropType<Options>,
      required: true,
    },
    redrawOnUpdate: {
      type: Boolean,
      default: true
    },
    oneToOneUpdate: {
      type: Boolean,
      default: true
    },
    animateOnUpdate: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }) {
    const chartRef = ref(null);
    const chart: Ref<Chart | null> = ref(null);
    const { options } = toRefs(props);

    if (options.value) {
      watch(options, (newValue) => {
        if (chart.value !== null) {
          (chart as unknown as Ref<Chart>).value.update(
            newValue,
            props.redrawOnUpdate,
            props.oneToOneUpdate,
            props.animateOnUpdate
          )
          emit('updated')
        }
      }, {
        deep: true
      })
    }
    onMounted(() => {
      chart.value = (Highcharts as any)[props.type](
        chartRef.value,
        options.value,() => {
          emit('rendered')
        }
      );
    });
    onUnmounted(() => {
      if (chart?.value) {
        (<Ref<Chart>>(chart as unknown)).value.destroy();
      }
      emit('destroy')
    })
    return {
      chartRef, chart
    }
  },
  render() {
    return h('div', {
      class: 'cuihao-chart',
      ref: 'chartRef',
    });
  }
})

export default vueHighcharts;