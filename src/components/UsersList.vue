<template>
  <div v-if="users.length === 0" class="without-users">
    Agrega las personas que participarán
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
          :class="[
            'apply-user',
            { 'display-none': user.id === activeUser.id || !confirmedUsers },
          ]"
          @click="startUser(user)"
        />
        <span
          :class="['remove-button', { 'display-none': confirmedUsers }]"
          @click="removeUser(user.id)"
        />
      </span>
    </li>
  </ul>
</template>

<script setup>
import { defineProps, inject } from 'vue'

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

.display-none {
  display: none;
}

.without-users {
  line-height: 1.4;
  margin: 20px 0;

  > div {
    font-size: 50px;
    margin-bottom: 5px;
    text-align: center;
  }
}

.users-list {
  width: 100%;
  box-shadow: 0px 2px 4px -2px rgb(0 0 0 / 70%),
    0px 7px 13px -3px rgb(0 0 0 / 60%), inset 0px -3px 0px rgb(0 0 0 / 30%);
  list-style-type: none;
  list-style-position: inside;
  margin: 20px 0;
  padding: 0;

  > li {
    height: 46px;
    background-color: $navy-blue-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
    padding: 0 16px;
    transition: all $transition-time-default;

    &.active {
      padding: 0 16px 0 24px;
      position: relative;

      &:before {
        width: 10px;
        height: 46px;
        background-color: $green-color;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
      }

      &:after {
        width: 10px;
        height: 10px;
        background-color: $green-color;
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 4px;
        transform: translateY(-50%) rotate(-45deg);
      }
    }

    &:nth-of-type(1) {
      border-top-left-radius: $border-radius-medium;
      border-top-right-radius: $border-radius-medium;

      &:before {
        border-top-left-radius: $border-radius-medium;
      }
    }

    &:last-of-type {
      border-bottom: 0;
      border-bottom-left-radius: $border-radius-medium;
      border-bottom-right-radius: $border-radius-medium;

      &:before {
        border-bottom-left-radius: $border-radius-medium;
      }
    }
  }

  .user-name {
    font-size: 16px;
    overflow: hidden;
  }

  .user-options {
    width: 32%;
    height: 46px;
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
      position: absolute;
      top: 50%;
      left: 50%;
      text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
    }

    &:hover {
      background-color: lighten($navy-blue-color, 25%);
    }
  }

  .apply-user {
    background-color: $green-color;

    &:before {
      height: 26px;
      background-color: lighten($navy-blue-color, 25%);
      border-radius: $border-radius-default;
      color: $white-color;
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
      color: $black-color;
      content: '\021B5';
      transform: translate(-50%, -45%);
    }

    &:hover:before {
      display: flex;
    }

    &:hover:after {
      color: $white-color;
    }
  }

  .remove-button {
    background-color: $red-color;
    margin-left: 8px;

    &:after {
      color: $white-color;
      content: '\02A2F';
      transform: translate(-50%, -60%);
    }
  }
}
</style>
