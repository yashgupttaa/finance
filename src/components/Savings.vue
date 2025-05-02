<template>
  <div class="savings-page">
    <!-- Header -->
    <div class="header">
      <div class="title-section">
        <h1>Savings Goals</h1>
        <p class="subtitle">Track your progress towards financial freedom</p>
      </div>
      <button class="create-btn">
        <i class="fas fa-plus"></i>
        Create New Goal
      </button>
    </div>

    <!-- Stats Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-piggy-bank"></i>
        </div>
        <div class="stat-info">
          <div class="stat-label">Total Savings</div>
          <div class="stat-amount">$12,450.00</div>
          <div class="stat-subtitle">Total amount saved</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-bullseye"></i>
        </div>
        <div class="stat-info">
          <div class="stat-label">Active Goals</div>
          <div class="stat-amount">5 Goals</div>
          <div class="stat-subtitle">In progress</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-trophy"></i>
        </div>
        <div class="stat-info">
          <div class="stat-label">Completed Goals</div>
          <div class="stat-amount">3 Goals</div>
          <div class="stat-subtitle">Achieved</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-chart-line"></i>
        </div>
        <div class="stat-info">
          <div class="stat-label">Monthly Contribution</div>
          <div class="stat-amount">$1,500.00</div>
          <div class="stat-subtitle">This month</div>
        </div>
      </div>
    </div>

    <!-- Savings Goals -->
    <div class="goals-grid">
      <!-- House Down Payment -->
      <div class="goal-card">
        <div class="goal-header">
          <div class="goal-icon">
            <i class="fas fa-home"></i>
          </div>
          <div class="goal-title">
            <h3>House Down Payment</h3>
            <span class="due-date">Target Date: Dec 2024</span>
          </div>
          <button class="add-funds-btn">Add Funds</button>
        </div>
        
        <div class="progress-section">
          <div class="progress-info">
            <span>Progress</span>
            <span>50%</span>
          </div>
          <div class="progress-bar">
            <div class="progress" style="width: 50%"></div>
          </div>
        </div>

        <div class="goal-amounts">
          <div class="amount-item">
            <span class="label">Saved so far</span>
            <span class="value">$25,000</span>
          </div>
          <div class="amount-item">
            <span class="label">Target</span>
            <span class="value">$50,000</span>
          </div>
        </div>
      </div>

      <!-- Emergency Fund -->
      <div class="goal-card">
        <div class="goal-header">
          <div class="goal-icon emergency">
            <i class="fas fa-shield-alt"></i>
          </div>
          <div class="goal-title">
            <h3>Emergency Fund</h3>
            <span class="due-date">Target Date: Aug 2024</span>
          </div>
          <button class="add-funds-btn">Add Funds</button>
        </div>
        
        <div class="progress-section">
          <div class="progress-info">
            <span>Progress</span>
            <span>85%</span>
          </div>
          <div class="progress-bar">
            <div class="progress" style="width: 85%"></div>
          </div>
        </div>

        <div class="goal-amounts">
          <div class="amount-item">
            <span class="label">Saved so far</span>
            <span class="value">$8,500</span>
          </div>
          <div class="amount-item">
            <span class="label">Target</span>
            <span class="value">$10,000</span>
          </div>
        </div>
      </div>

      <!-- Add more goal cards as needed -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SavingsPage',
  data() {
    return {
    
    }
  },
  methods: {
   
  }
}
</script>

<style scoped>
.savings-page {
  padding: 24px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.title-section h1 {
  font-size: 24px;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 4px;
}

.subtitle {
  color: #64748B;
  font-size: 14px;
}

.create-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #6AB04C;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.stat-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  gap: 16px;
}

.stat-icon {
  width: 48px;
  height: 48px;
  background: #dfffee;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6AB04C;
  font-size: 20px;
}

.stat-info {
  flex: 1;
}

.stat-label {
  color: #64748B;
  font-size: 14px;
  margin-bottom: 4px;
}

.stat-amount {
  font-size: 24px;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 4px;
}

.stat-subtitle {
  color: #64748B;
  font-size: 12px;
}

/* Goals Grid */
.goals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
}

.goal-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
}

.goal-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.goal-icon {
  width: 40px;
  height: 40px;
  background: #dfffee;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6AB04C;
}

.goal-icon.emergency {
  background: #dfffee;
  color: #6AB04C;
}

.goal-title {
  flex: 1;
}

.goal-title h3 {
  font-size: 16px;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 4px;
}

.due-date {
  color: #64748B;
  font-size: 14px;
}

.add-funds-btn {
  padding: 6px 12px;
  background: #FFFFFF;
  border: 1px solid #6AB04C;
  border-radius: 6px;
  color: #6AB04C;
  cursor: pointer;
}

.progress-section {
  margin-bottom: 20px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #64748B;
  font-size: 14px;
}

.progress-bar {
  height: 8px;
  background: #E2E8F0;
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: #6AB04C;
  border-radius: 4px;
}

.goal-amounts {
  display: flex;
  justify-content: space-between;
}

.amount-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.amount-item .label {
  color: #64748B;
  font-size: 14px;
}

.amount-item .value {
  color: #1E293B;
  font-weight: 500;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .create-btn {
    width: 100%;
    justify-content: center;
  }

  .goals-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .stat-card {
    flex-direction: column;
    text-align: center;
  }

  .goal-header {
    flex-direction: column;
    text-align: center;
  }

  .goal-amounts {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
}
</style> 