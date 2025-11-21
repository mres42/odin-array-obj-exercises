    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

function findTheOldest(people) {
  return people.reduce((oldest, person) => {
    const getAge = (p) => {
      const death = p.yearOfDeath || new Date().getFullYear();
      return death - p.yearOfBirth;
    };
    return getAge(person) > getAge(oldest) ? person : oldest;
  });
}

console.log(findTheOldest(people)); 