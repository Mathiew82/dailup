<template>
  <ul class="persons-list">
    <li>
      <span class="person-name">Alberto</span>
      <span class="remove-button" />
    </li>
    <li>
      <span class="person-name">Mario</span>
      <span class="remove-button" />
    </li>
    <li>
      <span class="person-name">Cristian</span>
      <span class="remove-button" />
    </li>
    <li>
      <span class="person-name">Fran</span>
      <span class="remove-button" />
    </li>
    <li>
      <span class="person-name">Xavi</span>
      <span class="remove-button" />
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
    padding: 0 10px;

    &:nth-of-type(1) {
      border-top: 1px solid $border-color;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }

    &:last-of-type {
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
    }

    &:hover {
      background-color: darken($white-color, 4%);
    }
  }

  .person-name {
    font-size: 16px;
  }

  .remove-button {
    width: 20px;
    height: 20px;
    background-color: $grey-color;
    border: none;
    border-radius: 3px;
    position: relative;

    &:after {
      content: 'x';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -57%);
    }

    &:hover {
      background-color: $dark-grey-color;
    }
  }
}
</style>
