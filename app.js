// To-Do List functionality
document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value;
  
    if (task) {
      const taskList = document.getElementById('task-list');
      const li = document.createElement('li');
      li.textContent = task;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        li.remove();
      });
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
  
      taskInput.value = '';  // Clear the input field
    }
  });
  
  // FullCalendar initialization
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      selectable: true,
      dateClick: function(info) {
        const task = prompt('Enter task for ' + info.dateStr);
        if (task) {
          calendar.addEvent({
            title: task,
            start: info.dateStr
          });
        }
      }
    });
  
    calendar.render();
  });
  
  // Notification functionality
  if (Notification.permission === "granted") {
    // Notifications are allowed
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        alert('Notifications enabled');
      }
    });
  }
  
  function notifyUser(task) {
    if (Notification.permission === "granted") {
      new Notification("Reminder", { body: `Task: ${task}` });
    }
  }
  
  // Example notification after 5 seconds (replace with actual scheduling logic)
  setTimeout(() => notifyUser('Complete your project!'), 5000);
  