<template>
  <div class="demo-page">
    <circle-tools
      :width="toolsStyle.width"
      :height="toolsStyle.height"
      :circle-list="circleList"
    ></circle-tools>
  </div>
</template>

<script>
import { CircleTools } from "@/components/circle-tools";

export default {
  name: "DemoCircle",
  components: {
    CircleTools,
  },
  data() {
    return {
      toolsStyle: {
        width: 800,
        height: 800,
      },
      circleList: [
        {
          id: 1,
          name: "Circle 1",
          code: "circle001",
          strokeStyle: "#ff0000",
          lineWidth: 1,
          radius: 100, // *
          x: 100, // *
          y: 100, // *
        },
        {
          id: 2,
          name: "Circle 2",
          code: "circle002",
          radius: 50, // *
          x: 250, // *
          y: 205, // *
        },
        {
          id: 3,
          name: "Circle 3",
          code: "circle003",
          radius: 200, // *
          x: 250, // *
          y: 485, // *
        },
        {
          id: 4,
          name: "Circle 4",
          code: "circle004",
          radius: 100, // *
          x: 450, // *
          y: 285, // *
        },
      ],
    };
  },
};
</script>

<style>
.demo-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
}
</style>
