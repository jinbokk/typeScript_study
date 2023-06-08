interface Dev {
  name: string;
  skill: string;
}

interface People {
  name: string;
}

let developer: Dev;
let people: People;

//! 오류
// developer = people;
people = developer;

class People {
  name: string;
}

//! 오류
// developer = new People();
