<script setup>
import Aside from './components/Aside.vue'
</script>

<template>
  <Aside msg="Hello Vue 3 + Vite" />
</template>

<style>
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
}

body {
  background-color: #f2f4f8;
  padding: 20px;
}

.persons-list {
  max-width: 200px;
  list-style-type: none;
  list-style-position: inside;
  margin: 0 0 20px 0;
  padding: 0;
}

.persons-list > li {
  height: 40px;
  background-color: #fcfcfc;
  border-right: 1px solid #c2c4c8;
  border-bottom: 1px solid #c2c4c8;
  border-left: 1px solid #c2c4c8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.persons-list > li:nth-of-type(1) {
  border-top: 1px solid #c2c4c8;
  border-radius: 3px 3px 0 0;
}

.persons-list > li:last-of-type {
  border-radius: 0 0 3px 3px;
}

.persons-list .person-name {
  font-size: 16px;
}

.persons-list .remove-button {
  width: 20px;
  height: 20px;
  background-color: #e2e4e8;
  border: none;
  border-radius: 3px;
  position: relative;
}

.persons-list .remove-button:after {
  content: 'x';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -53%);
}

.persons-list .remove-button:hover {
  background-color: #d2d4d8;
}

#person-name {
  width: 200px;
  height: 40px;
  font-size: 16px;
  padding: 0 10px;
}

#add-person {
  width: 200px;
  height: 40px;
  font-size: 16px;
  margin-top: 5px;
  padding: 0 10px;
}
</style>
