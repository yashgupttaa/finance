<template>
  <div class="bills-page">
    <!-- Header -->
    <div class="header">
      <h1>Bills Management</h1>
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
        <div class="stat-icon blue">
          <i class="fas fa-file-invoice-dollar"></i>
        </div>
        <div class="stat-info">
          <div class="stat-label">Total Monthly Bills</div>
          <div class="stat-amount">$2,850.00</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon green">
          <i class="fas fa-check-circle"></i>
        </div>
        <div class="stat-info">
          <div class="stat-label">Paid This Month</div>
          <div class="stat-amount">$1,950.00</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon yellow">
          <i class="fas fa-clock"></i>
        </div>
        <div class="stat-info">
          <div class="stat-label">Due Soon</div>
          <div class="stat-amount">$650.00</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon red">
          <i class="fas fa-exclamation-circle"></i>
        </div>
        <div class="stat-info">
          <div class="stat-label">Overdue</div>
          <div class="stat-amount">$250.00</div>
        </div>
      </div>
    </div>

    <!-- Bills Overview -->
    <div class="bills-section">
      <div class="section-header">
        <h2>Bills Overview</h2>
        <button class="add-btn">
          <i class="fas fa-plus"></i>
          Add New Bill
        </button>
      </div>

      <!-- Bills Table -->
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Due Date</th>
              <th>Budgeted</th>
              <th>Actual</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="bill in bills" :key="bill.id">
              <td>{{ bill.service }}</td>
              <td>
                <div class="due-date">
                  <i class="far fa-calendar"></i>
                  {{ bill.dueDate }}
                </div>
              </td>
              <td>${{ bill.budgeted }}</td>
              <td>${{ bill.actual }}</td>
              <td>
                <span :class="['status-badge', bill.status.toLowerCase()]">
                  {{ bill.status }}
                </span>
              </td>
              <td>
                <div class="actions">
                  <button class="action-btn">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="action-btn">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="pagination">
        <div class="showing-info">Showing 1-5 of 24 bills</div>
        <div class="rows-select">
          <span>Rows per page:</span>
          <select>
            <option>5</option>
            <option>10</option>
            <option>20</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BillsPage',
  data() {
    return {
      bills: [
        {
          service: 'Netflix',
          dueDate: '15th',
          budgeted: '15.99',
          actual: '15.99',
          status: 'Paid'
        },
        {
          service: 'Rent',
          dueDate: '1st',
          budgeted: '1500.00',
          actual: '1500.00',
          status: 'Due'
        },
        {
          service: 'Electricity',
          dueDate: '20th',
          budgeted: '180.00',
          actual: '210.00',
          status: 'Overdue'
        },
        {
          service: 'Internet',
          dueDate: '18th',
          budgeted: '89.99',
          actual: '89.99',
          status: 'Paid'
        },
        {
          service: 'Phone',
          dueDate: '22nd',
          budgeted: '65.00',
          actual: '65.00',
          status: 'Due'
        }
      ]
    }
  }
}
</script>

<style scoped>
.bills-page {
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
  margin-bottom: 24px;
}

.stat-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
}

.blue { background-color: #4299E1; }
.green { background-color: #48BB78; }
.yellow { background-color: #ECC94B; }
.red { background-color: #F56565; }

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
}

.bills-section {
  background: white;
  border-radius: 12px;
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

.due-date {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748B;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 14px;
}

.status-badge.paid {
  background: #DEF7EC;
  color: #10B981;
}

.status-badge.due {
  background: #FEF3C7;
  color: #D97706;
}

.status-badge.overdue {
  background: #FEE2E2;
  color: #EF4444;
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

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  color: #64748B;
  font-size: 14px;
}

.rows-select {
  display: flex;
  align-items: center;
  gap: 8px;
}

select {
  padding: 4px 8px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  color: #1E293B;
}

@media (max-width: 768px) {
  .bills-page {
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

  .pagination {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
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

  td {
    padding: 12px 8px;
  }

  .actions {
    flex-direction: column;
  }
}
</style> 