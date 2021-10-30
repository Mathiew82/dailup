<template>
  <ul class="persons-list">
    <li>
      <span class="person-name">Alberto</span>
      <span class="person-options">
        <span class="apply-person" />
        <span class="remove-button" />
      </span>
    </li>
    <li>
      <span class="person-name">Mario</span>
      <span class="person-options">
        <span class="apply-person" />
        <span class="remove-button" />
      </span>
    </li>
    <li>
      <span class="person-name">Cristian</span>
      <span class="person-options">
        <span class="apply-person" />
        <span class="remove-button" />
      </span>
    </li>
    <li>
      <span class="person-name">Fran</span>
      <span class="person-options">
        <span class="apply-person" />
        <span class="remove-button" />
      </span>
    </li>
    <li>
      <span class="person-name">Xavi</span>
      <span class="person-options">
        <span class="apply-person" />
        <span class="remove-button" />
      </span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import '../sass/_variables.scss';

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
