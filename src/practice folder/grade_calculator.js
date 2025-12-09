let marks = 82;
let grade;

switch (true) {
    case (marks >= 95):
        grade = "A+";
        break;
    case (marks >= 85):
        grade = "A";
        break;
    case (marks >= 75):
        grade = "B";
    case (marks >= 65):
        grade = "C";
        break;
    case (marks >= 55):
        grade = "D";
        break;
    default:
        grade = "Fail";
}

alert("Grade: " + grade);
