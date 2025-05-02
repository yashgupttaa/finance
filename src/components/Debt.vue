<template>
  <div class="debt-page">
    <!-- Header -->
    <div class="header">
      <h1>Debt Management</h1>
      <div class="header-actions">
        <button class="icon-btn">
          <i class="fas fa-cog"></i>
        </button>
        <button class="icon-btn">
          <i class="fas fa-user"></i>
        </button>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-title">Total Debt Balance</div>
        <div class="stat-amount">$45,250.00</div>
        <div class="stat-trend negative">+2.5%</div>
      </div>

      <div class="stat-card">
        <div class="stat-title">Monthly Payment Due</div>
        <div class="stat-amount">$1,250.00</div>
        <div class="stat-subtitle">Next: Jan 15</div>
      </div>

      <div class="stat-card">
        <div class="stat-title">Highest Interest Debt</div>
        <div class="stat-content">
          <div>Credit Card 1</div>
          <div class="interest-rate">24.99% APR</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-title">Debts Over Due</div>
        <div class="stat-content">
          <div class="stat-number">0</div>
          <div class="status-tag">On Track</div>
        </div>
      </div>
    </div>

    <!-- Debts Section -->
    <div class="debts-section">
      <div class="section-header">
        <h2>Debts by Category</h2>
        <button class="add-btn">
          <i class="fas fa-plus"></i>
          Add New Debt
        </button>
      </div>

      <!-- Credit Cards -->
      <div class="category">
        <div class="category-header" @click="toggleCategory('creditCards')">
          <div class="category-title">
            <i class="fas fa-credit-card"></i>
            Credit Cards
            <i class="fas fa-chevron-down" :class="{ 'rotate': isCategoryOpen.creditCards }"></i>
          </div>
        </div>

        <div class="debt-items" v-show="isCategoryOpen.creditCards">
          <!-- Credit Card 1 -->
          <div class="debt-item">
            <div class="item-header">
              <div class="item-name">Credit Card 1</div>
              <div class="due-date">Due: 15th</div>
              <div class="item-actions">
                <button class="action-icon edit">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="action-icon delete">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>

            <div class="item-details">
              <div class="detail">
                <div class="label">Balance</div>
                <div class="value">$8,500</div>
              </div>
              <div class="detail">
                <div class="label">Minimum Due</div>
                <div class="value">$250</div>
              </div>
              <div class="detail">
                <div class="label">Budgeted</div>
                <div class="value">$500</div>
              </div>
              <div class="detail">
                <div class="label">Actual Paid</div>
                <div class="value">$500</div>
              </div>
            </div>

            <div class="progress-section">
              <div class="progress-label">Payoff Progress</div>
              <div class="progress-bar">
                <div class="progress" style="width: 35%"></div>
              </div>
              <div class="progress-percentage">35%</div>
            </div>
          </div>

          <!-- Credit Card 2 -->
          <div class="debt-item">
            <div class="item-header">
              <div class="item-name">Credit Card 2</div>
              <div class="due-date">Due: 20th</div>
              <div class="item-actions">
                <button class="action-icon edit">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="action-icon delete">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>

            <div class="item-details">
              <div class="detail">
                <div class="label">Balance</div>
                <div class="value">$5,250</div>
              </div>
              <div class="detail">
                <div class="label">Minimum Due</div>
                <div class="value">$150</div>
              </div>
              <div class="detail">
                <div class="label">Budgeted</div>
                <div class="value">$300</div>
              </div>
              <div class="detail">
                <div class="label">Actual Paid</div>
                <div class="value">$300</div>
              </div>
            </div>

            <div class="progress-section">
              <div class="progress-label">Payoff Progress</div>
              <div class="progress-bar">
                <div class="progress" style="width: 42%"></div>
              </div>
              <div class="progress-percentage">42%</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Student Loans -->
      <div class="category">
        <div class="category-header" @click="toggleCategory('studentLoans')">
          <div class="category-title">
            <i class="fas fa-graduation-cap"></i>
            Student Loans
            <i class="fas fa-chevron-down" :class="{ 'rotate': isCategoryOpen.studentLoans }"></i>
          </div>
        </div>

        <div class="debt-items" v-show="isCategoryOpen.studentLoans">
          <div class="debt-item">
            <div class="item-header">
              <div class="item-name">Federal Loan</div>
              <div class="due-date">Due: 1st</div>
              <div class="item-actions">
                <button class="action-icon edit">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="action-icon delete">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>

            <div class="item-details">
              <div class="detail">
                <div class="label">Balance</div>
                <div class="value">$25,000</div>
              </div>
              <div class="detail">
                <div class="label">Monthly Payment</div>
                <div class="value">$350</div>
              </div>
              <div class="detail">
                <div class="label">Interest Rate</div>
                <div class="value">4.5%</div>
              </div>
              <div class="detail">
                <div class="label">Term Remaining</div>
                <div class="value">8 years</div>
              </div>
            </div>

            <div class="progress-section">
              <div class="progress-label">Payoff Progress</div>
              <div class="progress-bar">
                <div class="progress" style="width: 55%"></div>
              </div>
              <div class="progress-percentage">55%</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Totals Section -->
      <div class="totals-section">
        <div class="totals-grid">
          <div class="total-item">
            <div class="label">Total Original Debt</div>
            <div class="amount">$85,000.00</div>
          </div>
          <div class="total-item">
            <div class="label">Current Total Debt</div>
            <div class="amount red">$45,250.00</div>
          </div>
          <div class="total-item">
            <div class="label">Total Monthly Payment</div>
            <div class="amount">$1,250.00</div>
          </div>
        </div>

        <div class="overall-progress">
          <div class="progress-info">
            <span>Overall Debt Payoff Progress</span>
            <span>47%</span>
          </div>
          <div class="progress-bar">
            <div class="progress" style="width: 47%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DebtPage',
  data() {
    return {
      isCategoryOpen: {
        creditCards: true,
        studentLoans: true
      }
    }
  },
  methods: {
    toggleCategory(category) {
      this.isCategoryOpen[category] = !this.isCategoryOpen[category]
    }
  }
}
</script>

<style scoped>
.debt-page {
  padding: 24px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.header h1 {
  font-size: 24px;
  font-weight: 600;
  color: #1E293B;
}

/* Stats Cards */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.stat-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
}

.stat-title {
  color: #64748B;
  font-size: 14px;
  margin-bottom: 8px;
}

.stat-amount {
  font-size: 24px;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 4px;
}

.stat-trend {
  font-size: 14px;
}

.stat-trend.negative {
  color: #EF4444;
}

.interest-rate {
  color: #EF4444;
  font-size: 14px;
}

.status-tag {
  display: inline-block;
  padding: 4px 12px;
  background: #DEF7EC;
  color: #10B981;
  border-radius: 16px;
  font-size: 14px;
}

/* Debt Categories */
.debts-section {
  margin-top: 24px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.add-btn {
  background: #EF4444;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.category {
  background: white;
  border-radius: 12px;
  margin-bottom: 24px;
}

.category-header {
  padding: 16px 24px;
  border-bottom: 1px solid #E2E8F0;
  cursor: pointer;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #1E293B;
  font-weight: 500;
}

.debt-items {
  padding: 24px;
  transition: all 0.3s ease;
}

.debt-item {
  padding-bottom: 24px;
  border-bottom: 1px solid #E2E8F0;
  margin-bottom: 24px;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.item-name {
  font-weight: 500;
  color: #1E293B;
}

.due-date {
  color: #64748B;
  font-size: 14px;
}

.item-details {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 24px;
}

.detail .label {
  color: #64748B;
  font-size: 14px;
  margin-bottom: 4px;
}

.detail .value {
  color: #1E293B;
  font-weight: 500;
}

/* Progress Bar */
.progress-section {
  display: flex;
  align-items: center;
  gap: 16px;
}

.progress-label {
  color: #64748B;
  font-size: 14px;
  min-width: 120px;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: #E2E8F0;
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: #EF4444;
  border-radius: 4px;
}

.progress-percentage {
  color: #64748B;
  font-size: 14px;
  min-width: 48px;
  text-align: right;
}

/* Totals Section */
.totals-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-top: 32px;
}

.totals-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 24px;
}

.total-item .label {
  color: #64748B;
  font-size: 14px;
  margin-bottom: 4px;
}

.total-item .amount {
  font-size: 24px;
  font-weight: 600;
  color: #1E293B;
}

.total-item .amount.red {
  color: #EF4444;
}

.overall-progress {
  margin-top: 24px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  color: #64748B;
  font-size: 14px;
  margin-bottom: 8px;
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

.header-actions {
  display: flex;
  gap: 12px;
}

/* Updated Action Icons */
.action-icon {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: none;
  background: #F8FAFC;
  color: #64748B;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.action-icon:hover {
  background: #F1F5F9;
}

.action-icon.edit:hover {
  background: #EEF2FF;
  color: #4F46E5;
}

.action-icon.delete:hover {
  background: #FEE2E2;
  color: #EF4444;
}

.item-actions {
  display: flex;
  gap: 8px;
}

/* Category Toggle Animation */
.fa-chevron-down {
  transition: transform 0.3s ease;
}

.fa-chevron-down.rotate {
  transform: rotate(180deg);
}

@media (max-width: 768px) {
  .item-details {
    grid-template-columns: repeat(2, 1fr);
  }

  .totals-grid {
    grid-template-columns: 1fr;
  }

  .progress-section {
    flex-direction: column;
    align-items: flex-start;
  }

  .progress-label {
    margin-bottom: 8px;
  }

  .progress-percentage {
    text-align: left;
  }
}

@media (max-width: 480px) {
  .item-details {
    grid-template-columns: 1fr;
  }

  .item-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .item-actions {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}
</style> 