<template>
  <div>
    <button @click="hide()">Начать!</button>
    <div class="backside" @click="hide()" v-if="hiden">
    </div>
      <form
      @submit.prevent="submit()"
      v-if="hiden"
        class="form"
        method="post"
      >
        <div class="form__wrapper fw-1">
          <input placeholder="Имя" v-model="name"  type="text" />
          <input placeholder="Фамилия" v-model="lastName" type="text" />
          <input placeholder="Возраст" v-model="years" type="text" />
        </div>
        <div class="form__wrapper fw-2">
          <input placeholder="папа" v-model="dad" type="text" />
          <input placeholder="мама" v-model="mother" type="text" />
        </div>
        <button type="submit">отправить</button>
      </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hiden: false,
      name:'',
      lastName:'',
      years:'',
      dad:'',
      mother:'',
    };
  },
  methods: {
    hide() {return this.hiden === false ? (this.hiden = true) : (this.hiden = false)},
     submit(){
      this.$emit('submitM', [this.name , this.lastName , this.years , this.dad , this.mother])
      this.$router.push({name:'about',query: [this.name , this.lastName , this.years , this.dad , this.mother]})
    }
  },
};
</script>

<style>
.backside {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.45);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>