function addTask() {
            const taskInput = document.getElementById('taskInput');
            const taskValue = taskInput.value.trim();
            if (taskValue === '') {
                alert('Please enter a task!');
                return;
            }

            const taskList = document.getElementById('taskList');
            const li = document.createElement('li');
            li.textContent = taskValue;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete';
            deleteButton.onclick = function() {
                taskList.removeChild(li);
            };

            li.appendChild(deleteButton);
            taskList.appendChild(li);
            taskInput.value = '';
        }