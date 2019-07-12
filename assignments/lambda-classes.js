// CODE here for your Lambda Classes
class Person {
  constructor(attribute) {
    this.name = attribute.name;
    this.age = attribute.age;
    this.location = attribute.location;
  }

  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(attribute) {
    super(attribute);
    this.specialty = attribute.specialty;
    this.favLanguage = attribute.favLanguage;
    this.catchPhrase = attribute.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(attribute) {
    super(attribute);
    this.previousBackground = attribute.previousBackground;
    this.className = attribute.className;
    this.favSubjects = attribute.favSubjects;
  }

  listSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++){
      console.log(this.favSubjects[i]);
    }
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor{
  constructor(attribute){
    super(attribute);
    this.gradClassName = attribute.gradClassName;
    this.favInstructor = attribute.favInstructor;
  }

  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standy times!`;
  }

  debugsCode(student, subject){
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}


const Kieran = new Instructor ({
  name: 'Kieran',
  age: 28,
  location: 'Utah',
  specialty: 'redux',
  favLanguage: 'Python',
  catchPhrase: 'Do your homework!'
});

const Ken = new Student ({
  name: 'Ken',
  age: 25,
  location: 'Utah',
  previousBackground: 'Construction Management',
  className: 'webpt8',
  favSubjects: [
    'JavaScript',
    'Python',
    'HTML',
    'CSS'
  ]
});

const Billy = new ProjectManager ({
  name: 'Billy',
  age: 33,
  location: 'Arizona',
  gradClassName: 'webpt6',
  favInstructor: 'Hailey',
});


console.log(Ken.speak());
console.log(Ken.PRAssignment("Python"));
console.log(Ken.sprintChallenge("Python"));
console.log(Ken.favSubjects);
Ken.listSubjects();
console.log(Billy.debugsCode(Ken));
console.log(Billy.standUp("webpt8"));
console.log(Kieran.demo("Node.js"));
console.log(Kieran.grade(Ken, "Python"));