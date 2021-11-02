<template>
  <div v-if="persons.length === 0" class="without-persons">
    <div>☹</div>
    Agrega las personas que participarán en la daily
  </div>
  <ul v-else class="persons-list">
    <li
      v-for="person in persons"
      :key="person.id"
      :class="{ active: person.id === activePerson.id }"
    >
      <span class="person-name"> {{ person.name }} </span>
      <span class="person-options">
        <span
          class="apply-person"
          @click="startPerson(person)"
          :style="`${person.id === activePerson.id && 'display: none'}`"
        />
        <span class="remove-button" @click="removePerson(person.id)" />
      </span>
    </li>
  </ul>
</template>

<script setup>
import { inject } from 'vue'

defineProps({
  persons: {
    type: Array,
    require: true,
  },
})

const start = inject('start')
const removePerson = inject('removePerson')
const activePerson = inject('activePerson')
const setActivePerson = inject('setActivePerson')

const initCounterTime = () => {
  start.value = true
}

const startPerson = (person) => {
  initCounterTime()
  setActivePerson(person)
}
</script>

<style lang="scss" scoped>
@import '../sass/_variables.scss';

.without-persons {
  margin-bottom: 20px;

  > div {
    font-size: 50px;
    margin-bottom: 5px;
    text-align: center;
  }
}

.persons-list {
  max-width: 200px;
  list-style-type: none;
  list-style-position: inside;
  margin: 0 0 20px 0;
  padding: 0;

  > li {
    height: 40px;
    background-color: $white-color;
    border-bottom: 1px solid $border-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;

    &.active {
      background-color: #d0f1e2;
      border-left: 10px solid #60d1c2;
      padding: 0 8px 0 14px;
      position: relative;

      &:after {
        width: 14px;
        height: 14px;
        background-color: #60d1c2;
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: -8px;
        transform: translateY(-50%) rotate(-45deg);
      }
    }

    &:nth-of-type(1) {
      border-top-left-radius: $border-radius-default;
      border-top-right-radius: $border-radius-default;
    }

    &:last-of-type {
      border-bottom: 0;
      border-bottom-left-radius: $border-radius-default;
      border-bottom-right-radius: $border-radius-default;
    }
  }

  .person-name {
    font-size: 16px;
    overflow: hidden;
  }

  .person-options {
    width: 32%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .apply-person,
  .remove-button {
    width: 26px;
    height: 26px;
    border: none;
    border-radius: $border-radius-default;
    position: relative;

    &:after {
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
    }

    &:hover {
      background-color: darken($dark-grey-color, 40%);
    }
  }

  .apply-person {
    background-color: #00c1b2;
    margin-right: 8px;

    &:before {
      height: 26px;
      background-color: black;
      border-radius: $border-radius-default;
      color: white;
      content: 'Su turno';
      display: none;
      font-size: 12px;
      justify-content: center;
      align-items: center;
      padding: 0 8px;
      position: absolute;
      top: 0;
      right: 30px;
      white-space: nowrap;
    }

    &:after {
      content: '\021B5';
      transform: translate(-50%, -45%);
    }

    &:hover:before {
      display: flex;
    }
  }

  .remove-button {
    background-color: #f14668;

    &:after {
      content: '\02A2F';
      transform: translate(-50%, -54%);
    }
  }
}
</style>
