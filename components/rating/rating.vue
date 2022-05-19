<script setup lang="ts">
const props = defineProps<{
  rating: number;
}>();

const theme = useState("theme");

const getStars = () => {
  const max = 5;
  let full = Math.floor(props.rating);
  let half = full === props.rating ? 0 : 1;
  let empty = max - full - half;
  // console.log(props.rating, full, half, empty);
  if (props.rating - full !== 0) {
    if (props.rating - full >= 3 / 4) {
      half = 0;
      full += 1;
    } else if (props.rating - full < 1 / 4) {
      half = 0;
      empty += 1;
    }
  }

  return [
    ...Array(full).fill("mdi-star"),
    ...Array(half).fill("mdi-star-half-full"),
    ...Array(empty).fill("mdi-star-outline"),
  ];
};
</script>

<template>
  <div
    :class="[
      'rating rating-zoom text-right',
      theme == 'dark' ? 'theme--dark' : 'theme--light',
    ]"
  >
    <i :class="['mdi', star]" v-for="(star, s) in getStars()" :key="s"></i>
  </div>
</template>

<style lang="scss" scoped>
.rating {
  .mdi {
    font-size: medium;
    color: var(--altText);
    &.mdi-star {
      color: rgb(200, 125, 0) !important;
    }
    &.mdi-star-half-full {
      color: rgb(200, 125, 0) !important;
    }
  }
  &.theme--dark {
    .mdi {
      &.mdi-star {
        color: gold !important;
      }
      &.mdi-star-half-full {
        color: rgb(255, 240, 158) !important;
      }
    }
  }
}
</style>
