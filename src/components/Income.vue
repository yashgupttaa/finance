<template>
  <div class="income-page">
    <!-- Header -->
    <div class="header">
      <h1>Income Tracking</h1>
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
        <div class="stat-label">Total Monthly Income</div>
        <div class="stat-amount">$8,750.00</div>
        <div class="stat-trend positive">
          <i class="fas fa-arrow-up"></i>
          +12%
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-label">YTD Income</div>
        <div class="stat-amount">$76,430.00</div>
        <div class="stat-trend positive">
          <i class="fas fa-arrow-up"></i>
          +8%
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-label">Pending Income</div>
        <div class="stat-amount">$2,500.00</div>
        <div class="stat-trend negative">
          <i class="fas fa-arrow-down"></i>
          -3%
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-label">Last Month</div>
        <div class="stat-amount">$7,812.00</div>
        <div class="stat-trend positive">
          <i class="fas fa-arrow-up"></i>
          +15%
        </div>
      </div>
    </div>

    <!-- Income Sources Section -->
    <div class="income-sources">
      <div class="section-header">
        <h2>Income Sources</h2>
        <button class="add-btn">
          <i class="fas fa-plus"></i>
          Add New Income
        </button>
      </div>

      <!-- Table -->
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Source</th>
              <th>Budgeted</th>
              <th>Actual</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(income, index) in incomeData" :key="index">
              <td>{{ income.date }}</td>
              <td>{{ income.source }}</td>
              <td>${{ income.budgeted }}</td>
              <td :class="{ 'text-success': income.actual >= income.budgeted, 'text-pending': income.actual === 0 }">
                ${{ income.actual }}
              </td>
              <td>{{ income.notes }}</td>
              <td class="actions">
                <button class="action-btn">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn">
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr class="total-row">
              <td colspan="2">Total</td>
              <td>${{ totalBudgeted }}</td>
              <td>${{ totalActual }}</td>
              <td colspan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IncomePage',
  data() {
    return {
      incomeData: [
        {
          date: '2023-09-15',
          source: 'Primary Job Salary',
          budgeted: '5000.00',
          actual: '5000.00',
          notes: 'Monthly salary - direct deposit'
        },
        {
          date: '2023-09-15',
          source: 'Freelance Project',
          budgeted: '2000.00',
          actual: '2500.00',
          notes: 'Website development project'
        },
        {
          date: '2023-09-20',
          source: 'Investment Dividends',
          budgeted: '1000.00',
          actual: '1250.00',
          notes: 'Quarterly dividend payment'
        },
        {
          date: '2023-09-25',
          source: 'Side Business',
          budgeted: '800.00',
          actual: '0.00',
          notes: 'Pending payment'
        }
      ]
    }
  },
  computed: {
    totalBudgeted() {
      return this.incomeData.reduce((sum, item) => sum + parseFloat(item.budgeted), 0).toFixed(2)
    },
    totalActual() {
      return this.incomeData.reduce((sum, item) => sum + parseFloat(item.actual), 0).toFixed(2)
    }
  }
}
</script>

<style scoped>
.income-page {
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.stat-label {
  color: #64748B;
  font-size: 14px;
  margin-bottom: 8px;
}

.stat-amount {
  font-size: 24px;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 8px;
}

.stat-trend {
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.stat-trend.positive {
  color: #10B981;
}

.stat-trend.negative {
  color: #EF4444;
}

.income-sources {
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.section-header h2 {
  font-size: 18px;
  font-weight: 600;
  color: #1E293B;
}

.add-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #10B981;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  text-align: left;
  padding: 12px;
  color: #64748B;
  font-weight: 500;
  border-bottom: 1px solid #E2E8F0;
}

td {
  padding: 16px 12px;
  color: #1E293B;
  border-bottom: 1px solid #E2E8F0;
}

.text-success {
  color: #10B981;
}

.text-pending {
  color: #F59E0B;
}

.actions {
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

.action-btn:hover {
  color: #1E293B;
}

.total-row {
  font-weight: 600;
}

.total-row td {
  border-top: 2px solid #E2E8F0;
}

@media (max-width: 768px) {
  .income-page {
    padding: 16px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .add-btn {
    width: 100%;
    justify-content: center;
  }

  table {
    font-size: 14px;
  }

  td, th {
    padding: 12px 8px;
  }

  .actions {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
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
</style> 