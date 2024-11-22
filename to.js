const todoList = document.getElementById("todoList");
    const errorMessage = document.getElementById("errorMessage");

    function addTodo() {
      const input = document.getElementById("todoInput");
      const task = input.value.trim();

      if (!task) return; // Ignore empty tasks
      if (todoList.children.length >= 10) {
        errorMessage.style.display = "block";
        return;
      }
      errorMessage.style.display = "none";

      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          li.classList.add("completed");
        } else {
          li.classList.remove("completed");
        }
      });

      li.appendChild(checkbox);
      li.appendChild(document.createTextNode(" " + task));
      todoList.appendChild(li);

      input.value = ""; // Clear the input field
    }