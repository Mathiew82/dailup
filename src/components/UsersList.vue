<template>
  <div v-if="userStore.users.length === 0" class="without-users">
    Agrega los usuarios que participarán...
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
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              d="M17 4c-0.364 0-0.706 0.098-1 0.269v-1.269c0-1.103-0.897-2-2-2-0.412 0-0.794 0.125-1.113 0.339-0.274-0.779-1.016-1.339-1.887-1.339s-1.614 0.56-1.887 1.339c-0.318-0.214-0.701-0.339-1.113-0.339-1.103 0-2 0.897-2 2v7.373l-1.346-2.333c-0.261-0.475-0.687-0.813-1.199-0.953-0.499-0.136-1.018-0.064-1.462 0.202-0.907 0.544-1.253 1.774-0.77 2.742 0.030 0.061 0.668 1.368 2.66 5.35 0.938 1.875 1.967 3.216 3.059 3.984 0.857 0.603 1.449 0.634 1.559 0.634h5c0.851 0 1.642-0.277 2.352-0.822 0.667-0.513 1.246-1.255 1.72-2.204 0.934-1.868 1.428-4.452 1.428-7.474v-3.5c0-1.103-0.897-2-2-2zM18 9.5c0 2.867-0.457 5.296-1.322 7.026-0.564 1.128-1.574 2.474-3.178 2.474h-4.99c-0.039-0.003-0.46-0.050-1.095-0.525-0.633-0.474-1.605-1.472-2.638-3.54-2.027-4.054-2.65-5.331-2.656-5.343-0.001-0.002-0.001-0.003-0.002-0.004-0.251-0.503-0.073-1.162 0.389-1.439 0.208-0.125 0.451-0.158 0.685-0.095 0.249 0.068 0.458 0.236 0.587 0.472 0.002 0.003 0.004 0.007 0.006 0.010l1.561 2.705c0.319 0.583 0.678 0.828 1.067 0.729 0.39-0.099 0.587-0.489 0.587-1.157v-7.813c0-0.551 0.449-1 1-1s1 0.449 1 1v6.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-7.5c0-0.551 0.449-1 1-1s1 0.449 1 1v7.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-6.5c0-0.551 0.449-1 1-1s1 0.449 1 1v7.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4.5c0-0.551 0.449-1 1-1s1 0.449 1 1v3.5z"
            ></path>
          </svg>
        </span>
        <span
          :class="[
            'remove-button',
            { 'display-none': userStore.confirmedUsers },
          ]"
          @click="userStore.removeUser(user.id)"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              d="M10.707 10.5l5.646-5.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5.646 5.646-5.646-5.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5.646 5.646-5.646 5.646c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l5.646-5.646 5.646 5.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-5.646-5.646z"
            ></path>
          </svg>
        </span>
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
    padding-top: 0.1rem;
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

    > svg {
      width: 65%;
      height: 65%;
      fill: $black-color;
      stroke: $black-color;
    }

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

    &:hover:before {
      display: flex;
    }
  }

  .remove-button {
    background-color: $red-color;
    margin-left: 8px;

    > svg {
      width: 70%;
      height: 70%;
      fill: $white-color;
      stroke: $white-color;
    }
  }
}
</style>
