<template>
    <div>
      <h1>Users Table</h1>
      <ul>
        <li v-for="user in filteredUsers" :key="user.id">
          {{ user.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const users = ref([]);
  
  const filteredUsers = computed(() => {
    return users.value.filter(user => user.name.includes(search));
  });
  
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/users');
      users.value = await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  
  fetchUsers();
  </script>
  