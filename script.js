let totalDuration = 0;
let totalCalories = 0;

function addActivity() {
    const activityInput = document.getElementById("activity");
    const durationInput = document.getElementById("duration");
    const caloriesInput = document.getElementById("calories");

    const activity = activityInput.value;
    const duration = parseInt(durationInput.value);
    const calories = parseInt(caloriesInput.value);

    if (activity === "" || isNaN(duration) || isNaN(calories)) {
        alert("Please fill all fields correctly!");
        return;
    }

    const list = document.getElementById("activityList");

    const li = document.createElement("li");
    li.innerHTML = `
        ${activity} - ${duration} mins - ${calories} kcal
        <button onclick="deleteActivity(this, ${duration}, ${calories})">X</button>
    `;

    list.appendChild(li);

    totalDuration += duration;
    totalCalories += calories;

    document.getElementById("totalDuration").innerText = totalDuration;
    document.getElementById("totalCalories").innerText = totalCalories;

    activityInput.value = "";
    durationInput.value = "";
    caloriesInput.value = "";
}

function deleteActivity(button, duration, calories) {
    button.parentElement.remove();

    totalDuration -= duration;
    totalCalories -= calories;

    document.getElementById("totalDuration").innerText = totalDuration;
    document.getElementById("totalCalories").innerText = totalCalories;
}