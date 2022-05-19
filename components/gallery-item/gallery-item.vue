<script setup lang="ts">
defineProps<{
  link: string | null;
  image: string | null;
  title: string;
  subtitle: string;
  description: string | null;
}>();
</script>

<template>
  <gallery-item-wrapper :link="link">
    <img :src="`/images/preview-${image}.jpg`" :alt="title" v-if="image" />
    <div class="cover">
      <h3>{{ title }}</h3>
      <h4 v-if="subtitle">{{ subtitle }}</h4>
      <div v-if="description">{{ description }}</div>
    </div>
  </gallery-item-wrapper>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  max-height: calc(100vh - 80px);
}
.cover {
  padding: 10px;
  background: rgba(255, 255, 255, 0.01);
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 0.01) 50%,
    var(--darkBackground) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(50%, rgba(255, 255, 255, 0.01)),
    color-stop(100%, var(--darkBackground))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0.01) 50%,
    var(--darkBackground) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 255, 255, 0.01) 50%,
    var(--darkBackground) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(255, 255, 255, 0.01) 50%,
    var(--darkBackground) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.01) 50%,
    var(--darkBackground) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(
                startColorstr='#ffffff',
                endColorstr='#000000',
                GradientType=0
            );
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  * {
    color: white;
  }
  h3 {
    font-size: 1.15rem;
    line-height: 1.5;
    font-weight: 500;
    margin: 0;
    color: white;
    filter: drop-shadow(1px 1px 1px black);
  }
  h4 {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 300;
    margin: 0;
  }
  div {
    font-size: 0.85rem;
    line-height: 1;
    font-weight: 300;
    margin-top: 5px;
  }
}
</style>

<style lang="scss">
.gallery-carousel {
  width: 100%;
  padding-top: calc(60% + 6px);
  > * {
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>