<template>
  <div class="settings-page">
    <!-- Header -->
    <div class="header">
      <h1>Settings</h1>
      <div class="header-actions">
        <button class="icon-btn">
          <i class="fas fa-bell"></i>
        </button>
        <button class="icon-btn">
          <i class="fas fa-user"></i>
        </button>
      </div>
    </div>

    <div class="settings-grid">
      <!-- Profile Settings -->
      <div class="settings-card">
        <h2>Profile Settings</h2>
        <div class="profile-upload">
          <div class="avatar-upload">
            <div class="avatar-placeholder">
              <i class="fas fa-user"></i>
            </div>
            <div class="upload-icon">
              <i class="fas fa-camera"></i>
            </div>
          </div>
          <span class="upload-text">Upload profile picture</span>
        </div>

        <form class="profile-form">
          <div class="form-group">
            <label>Full Name</label>
            <input type="text" v-model="profile.fullName" placeholder="John Doe" />
          </div>

          <div class="form-group">
            <label>Email Address</label>
            <input type="email" v-model="profile.email" placeholder="john@example.com" />
          </div>

          <button type="submit" class="save-btn">Save Changes</button>
        </form>
      </div>

      <!-- Account Preferences -->
      <div class="settings-card">
        <h2>Account Preferences</h2>
        
        <div class="form-group">
          <label>Currency</label>
          <select v-model="preferences.currency">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>

        <div class="form-group">
          <label>Month Start Date</label>
          <select v-model="preferences.monthStartDate">
            <option value="1">1</option>
            <option value="15">15</option>
            <option value="28">28</option>
          </select>
        </div>
      </div>

      <!-- Category Management -->
      <div class="settings-card">
        <div class="card-header">
          <h2>Category Management</h2>
          <button class="add-btn">
            <i class="fas fa-plus"></i>
            Add Category
          </button>
        </div>

        <div class="categories-list">
          <div v-for="category in categories" :key="category.name" class="category-item">
            <div class="category-info">
              <span class="category-name">{{ category.name }}</span>
              <span class="category-budget">Budget: ${{ category.budget }}</span>
            </div>
            <div class="category-actions">
              <button class="action-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button class="action-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Notification Settings -->
      <div class="settings-card">
        <h2>Notification Settings</h2>
        
        <div class="notification-options">
          <div class="notification-item">
            <div class="notification-info">
              <span class="notification-title">Email Notifications</span>
              <span class="notification-desc">Receive updates via email</span>
            </div>
            <label class="toggle">
              <input type="checkbox" v-model="notifications.email">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="notification-item">
            <div class="notification-info">
              <span class="notification-title">Budget Alerts</span>
              <span class="notification-desc">Get notified when nearing budget limits</span>
            </div>
            <label class="toggle">
              <input type="checkbox" v-model="notifications.budget">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="notification-item">
            <div class="notification-info">
              <span class="notification-title">Monthly Reports</span>
              <span class="notification-desc">Receive monthly expense summaries</span>
            </div>
            <label class="toggle">
              <input type="checkbox" v-model="notifications.reports">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="notification-item">
            <div class="notification-info">
              <span class="notification-title">Payment Reminders</span>
              <span class="notification-desc">Get reminded about upcoming bills</span>
            </div>
            <label class="toggle">
              <input type="checkbox" v-model="notifications.reminders">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsPage',
  data() {
    return {
      profile: {
        fullName: 'John Doe',
        email: 'john@example.com'
      },
      preferences: {
        currency: 'USD',
        monthStartDate: '1'
      },
      categories: [
        { name: 'Housing & Utilities', budget: '1,775' },
        { name: 'Transportation', budget: '600' },
        { name: 'Food & Groceries', budget: '800' }
      ],
      notifications: {
        email: true,
        budget: true,
        reports: false,
        reminders: true
      }
    }
  }
}
</script>

<style scoped>
.settings-page {
  padding: 24px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.header h1 {
  font-size: 24px;
  font-weight: 600;
  color: #1E293B;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #E2E8F0;
  background: white;
  color: #64748B;
  cursor: pointer;
}

.settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
}

.settings-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
}

.settings-card h2 {
  font-size: 18px;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 24px;
}

/* Profile Upload */
.profile-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.avatar-upload {
  position: relative;
  width: 100px;
  height: 100px;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  background: #F1F5F9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748B;
  font-size: 32px;
}

.upload-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 32px;
  height: 32px;
  background: #6AB04C;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
}

.upload-text {
  color: #64748B;
  font-size: 14px;
}

/* Form Styles */
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #1E293B;
  font-size: 14px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  color: #1E293B;
}

.save-btn {
  width: 100%;
  padding: 10px;
  background: #6AB04C;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* Category Management */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.add-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #6AB04C;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #E2E8F0;
}

.category-name {
  color: #1E293B;
  font-weight: 500;
}

.category-budget {
  color: #64748B;
  font-size: 14px;
  margin-left: 12px;
}

.category-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  padding: 6px;
  background: none;
  border: none;
  color: #64748B;
  cursor: pointer;
}

/* Notification Settings */
.notification-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #E2E8F0;
}

.notification-title {
  display: block;
  color: #1E293B;
  font-weight: 500;
  margin-bottom: 4px;
}

.notification-desc {
  color: #64748B;
  font-size: 14px;
}

/* Toggle Switch */
.toggle {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #E2E8F0;
  transition: .4s;
  border-radius: 34px;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .toggle-slider {
  background-color: #6AB04C;
}

input:checked + .toggle-slider:before {
  transform: translateX(20px);
}

@media (max-width: 768px) {
  .settings-grid {
    grid-template-columns: 1fr;
  }

  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .header-actions {
    width: 100%;
    justify-content: flex-end;
  }
}

@media (max-width: 480px) {
  .category-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .category-actions {
    width: 100%;
    justify-content: flex-end;
  }

  .notification-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .toggle {
    align-self: flex-end;
  }
}
</style> 