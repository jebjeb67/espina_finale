<template>
  <div class="mx-auto p-4 rounded-3x1">
    <h1 class="text-3xl mb-6">JERICK JOHN ESPINA-602</h1>
    <div class="p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Employee List</h2>
      <div class="flex justify-end mb-4">
        <button @click="navigateTo('/new')" class="action-btn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg>
</button>
      </div>
      <table class="w-full border-collapse border border-gray-200 mt-4">
        <thead>
          <tr class="bg-white-800 text-black">
            <th class="border border-gray-200 py-2 px-4">ID</th>
            <th class="border border-gray-200 py-2 px-4">Firstname</th>
            <th class="border border-gray-200 py-2 px-4">Lastname</th>
            <th class="border border-gray-200 py-2 px-4">Department</th>
            <th class="border border-gray-200 py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index" class="hover:bg-gray-100">
            <td class="border border-gray-200 py-2 px-4">{{ user.ID }}</td>
            <td class="border border-gray-200 py-2 px-4">{{ user.fname }}</td>
            <td class="border border-gray-200 py-2 px-4">{{ user.lname }}</td>
            <td class="border border-gray-200 py-2 px-4">{{ user.Department }}</td>
            <td class="border border-gray-200 py-2 px-4">
              <button @click="navigateToUpdateForm(user.ID)" class="action-btn-update"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
</button>
              <button @click="deleteUser(user.ID)" class="action-btn-delete"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get('http://localhost:8080/api/load'); 
        this.users = response.data;
      } catch (error) {
        console.error('Error making GET request:', error);
      }
    },
    navigateToUpdateForm(id) {
      this.$router.push(`/updateForm/${id}`);
    },
    async deleteUser(userId) {
      try {
        const response = await axios.delete(`http://localhost:8080/api/${userId}`);
        this.users = this.users.filter(user => user.ID !== userId);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
    async updateUser(user) {
      console.log(user)
    }
  },
};
</script> 

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.action-btn {
  @apply bg-green-600 text-white py-2 px-4 rounded-3xl;
}

.action-btn-update {
  @apply bg-blue-600 text-white py-2 px-4 rounded-3xl;
}

.action-btn-delete {
  @apply bg-red-600 text-white py-2 px-4 rounded-3xl;
}

.action-btn:hover {
  @apply bg-green-700;
}

.action-btn-update:hover {
  @apply bg-blue-700;
}

.action-btn-delete:hover {
  @apply bg-red-700;
}
</style>
