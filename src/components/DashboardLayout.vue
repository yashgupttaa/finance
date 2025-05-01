<template>
  <div class="layout">
    <Sidebar />
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'

export default {
  name: 'DashboardLayout',
  components: {
    Sidebar
  }
}
</script>

<style scoped>
.layout {
  display: flex;
}

.main-content {
  flex: 1;
  margin-left: 280px;
  padding: 24px;
  min-height: 100vh;
  background-color: #F8FAFC;
}
</style> 