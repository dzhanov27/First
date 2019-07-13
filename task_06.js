var age = prompt("Enter your age:");
if(age > 0 && age <= 13){
  alert("Посмотрите мультфильм Король лев.");
}
else if(age > 13 && age < 18){
  alert("Посмотрите фильм Человек паук: вдали от дома");
}
else if(age >= 18){
  alert("Посмотрите фильм Бойцовский клуб")
}
else{
  alert("Неверный возраст")
}