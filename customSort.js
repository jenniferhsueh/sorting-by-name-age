var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 },
    { id: 5, name: "alex",     age: 15 }
  ];
   //students.sort(function (a, b) {
   //    console.log(a.age);
   //    console.log(b.age);
   //  return a.age - b.age;
   //});
   //console.log(students);
   students.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
   if (nameA === nameB) {
        return a.age - b.age;
          // names must be equal
   }
});
   console.log(students);
