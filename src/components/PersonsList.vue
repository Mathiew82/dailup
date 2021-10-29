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
    border-right: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    border-left: 1px solid $border-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;

    &:nth-of-type(1) {
      border-top: 1px solid $border-color;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }

    &:last-of-type {
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
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
    background-color: $grey-color;
    border: none;
    border-radius: 3px;
    position: relative;

    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
    }

    &:hover {
      background-color: $dark-grey-color;
    }
  }

  .apply-person {
    margin-right: 8px;

    &:after {
      content: '\021B5';
      transform: translate(-50%, -45%);
    }
  }

  .remove-button {
    &:after {
      content: '\02A2F';
      transform: translate(-50%, -54%);
    }
  }
}
</style>
