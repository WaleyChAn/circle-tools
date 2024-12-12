<template>
  <div class="circle-tools">
    <canvas
      id="circle-tools"
      :width="width + 'px'"
      :height="height + 'px'"
    ></canvas>
  </div>
</template>

<script>
import "./index.css";

export default {
  name: "CircleTools",
  props: {
    width: {
      type: Number,
      default: 500,
    },
    height: {
      type: Number,
      default: 500,
    },
    circleList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let canvas = document.getElementById("circle-tools");
      let ctx = canvas.getContext("2d");

      this.circleList.forEach((item) => {
        this.drawCircle(ctx, item);
      });
    },
    drawCircle(ctx, item) {
      const { x, y, radius, strokeStyle = "black", lineWidth = 1, code } = item;
      if (x === null || y === null || radius === null) return;

      ctx.save();

      //  画圈
      ctx.beginPath();

      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = lineWidth;
      ctx.setLineDash([4, 4]);
      ctx.lineDashOffset = 0;
      ctx.arc(x, y, radius, 0, 2 * Math.PI);

      ctx.closePath();
      ctx.stroke();

      //  画线
      ctx.beginPath();

      ctx.moveTo(x, y);
      ctx.lineTo(x + radius, y);

      ctx.closePath();
      ctx.stroke();

      //  写编码
      if (code) {
        ctx.beginPath();

        ctx.font = "14px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(code, x, y - 10, radius-10);

        ctx.closePath();
        ctx.stroke();
      }

      ctx.restore();
    },
  },
};
</script>
