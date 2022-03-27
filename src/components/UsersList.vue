<template>
  <div v-if="userStore.users.length === 0" class="without-users">
    Agrega las personas que participarán
  </div>
  <ul v-else class="users-list">
    <li
      v-for="user in userStore.users"
      :key="user.id"
      :class="{ active: user.id === userStore.activeUser.id }"
    >
      <span class="user-name">
        {{ user.name }}
      </span>
      <span class="user-options">
        <span class="user-time">
          {{ getTimeFormatted(user.time) }}
        </span>
        <span
          :class="[
            'apply-user',
            {
              'display-none':
                user.id === userStore.activeUser.id ||
                !userStore.confirmedUsers ||
                counterStore.dailyStatus === dailyStatus.finished,
            },
          ]"
          @click="startUser(user)"
        />
        <span
          :class="[
            'remove-button',
            { 'display-none': userStore.confirmedUsers },
          ]"
          @click="userStore.removeUser(user.id)"
        />
      </span>
    </li>
  </ul>
</template>

<script setup>
import { useUserStore } from '@/stores/user.js'
import { useCounterStore } from '@/stores/counter.js'
import { useTimer } from '@/hooks/useTimer.ts'
import { dailyStatus } from '@/constants/dailyStatus'
import { getTimeFormatted } from '@/utils/getTimeFormatted.js'

const userStore = useUserStore()
const counterStore = useCounterStore()

const { initTimer } = useTimer(counterStore)

const startUser = (user) => {
  if (counterStore.dailyStatus === 'pending') {
    counterStore.startDaily()
    userStore.setActiveUser(user)

    initTimer()
  } else {
    const newUserTime = userStore.activeUser.time + counterStore.currentTurn
    userStore.setUserTime(userStore.activeUser.id, newUserTime)
    userStore.setActiveUser(user)

    counterStore.resetCurrentTurn()
  }
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
  list-style-type: none;
  list-style-position: inside;
  margin: 20px 0;
  padding: 0;

  > li {
    height: 46px;
    background-color: $violet-color;
    color: $white-color;
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
      border-top-left-radius: $border-radius-default;
      border-top-right-radius: $border-radius-default;

      &:before {
        border-top-left-radius: $border-radius-default;
      }
    }

    &:last-of-type {
      border-bottom: 0;
      border-bottom-left-radius: $border-radius-default;
      border-bottom-right-radius: $border-radius-default;

      &:before {
        border-bottom-left-radius: $border-radius-default;
      }
    }
  }

  .user-name {
    font-size: 18px;
    overflow: hidden;
  }

  .user-options {
    width: 32%;
    height: 46px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .user-time {
      height: 26px;
      background-color: rgba($white-color, 0.8);
      border: 2px solid rgba(black, 0.4);
      border-radius: $border-radius-medium;
      color: $black-color;
      display: inline-flex;
      align-items: center;
      font-size: 14px;
      font-weight: bold;
      padding: 0 8px;
    }
  }

  .apply-user,
  .remove-button {
    width: 26px;
    height: 26px;
    border: 2px solid rgba(black, 0.4);
    border-radius: $border-radius-medium;
    margin-left: 6px;
    position: relative;

    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
    }

    &:hover {
      border-color: rgba(black, 0.8);
    }
  }

  .apply-user {
    background-color: $green-color;

    &:before {
      height: 26px;
      background-color: rgba(black, 0.8);
      border-radius: $border-radius-default;
      color: $white-color;
      content: 'Su turno';
      display: none;
      font-size: 12px;
      justify-content: center;
      align-items: center;
      padding: 0 8px;
      position: absolute;
      top: -2px;
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
