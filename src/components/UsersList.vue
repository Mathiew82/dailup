<template>
  <div v-if="users.length === 0" class="without-users">
    <div>☹</div>
    Agrega las personas que participarán en la daily
  </div>
  <ul v-else class="users-list">
    <li
      v-for="user in users"
      :key="user.id"
      :class="{ active: user.id === activeUser.id }"
    >
      <span class="user-name"> {{ user.name }} </span>
      <span class="user-options">
        <span
          class="apply-user"
          @click="startUser(user)"
          :style="`${
            user.id === activeUser.id || (!confirmedUsers && 'display: none')
          }`"
        />
        <span
          class="remove-button"
          @click="removeUser(user.id)"
          :style="`${confirmedUsers && 'display: none'}`"
        />
      </span>
    </li>
  </ul>
</template>

<script setup>
import { inject } from 'vue'

defineProps({
  users: {
    type: Array,
    require: true,
  },
  confirmedUsers: {
    type: Boolean,
    require: true,
  },
})

const start = inject('start')
const removeUser = inject('removeUser')
const activeUser = inject('activeUser')
const setActiveUser = inject('setActiveUser')

const initCounterTime = () => {
  start.value = true
}

const startUser = (person) => {
  initCounterTime()
  setActiveUser(person)
}
</script>

<style lang="scss" scoped>
@import '../sass/_variables.scss';

.without-users {
  margin-bottom: 20px;

  > div {
    font-size: 50px;
    margin-bottom: 5px;
    text-align: center;
  }
}

.users-list {
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
      background-color: $light-green-color;
      border-left: 8px solid $green-color;
      padding: 0 8px 0 10px;
      position: relative;

      &:after {
        width: 10px;
        height: 10px;
        background-color: $green-color;
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: -6px;
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

  .user-name {
    font-size: 16px;
    overflow: hidden;
  }

  .user-options {
    width: 32%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .apply-user,
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

  .apply-user {
    background-color: #00c1b2;

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
    margin-left: 8px;

    &:after {
      content: '\02A2F';
      transform: translate(-50%, -54%);
    }
  }
}
</style>
