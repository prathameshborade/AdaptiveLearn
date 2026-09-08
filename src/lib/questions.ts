import { Difficulty, Topic } from "./adaptive-engine";
export type Question = { id:string; topic:Topic; difficulty:Difficulty; question:string; options:string[]; answer:number; explanation:string };
export const diagnostic: Question[] = [
 {id:"d1",topic:"Python Basics",difficulty:"Easy",question:"Which keyword prints text in Python?",options:["echo","print","show","write"],answer:1,explanation:"print() displays output."},
 {id:"d2",topic:"Variables",difficulty:"Easy",question:"What is the value of x after x = 5?",options:["x","5","None","'5'"],answer:1,explanation:"The variable x stores the integer 5."},
 {id:"d3",topic:"Conditions",difficulty:"Medium",question:"Which operator tests equality?",options:["=","==","!=","=>"],answer:1,explanation:"== compares two values."},
 {id:"d4",topic:"Loops",difficulty:"Easy",question:"How many values does range(3) produce?",options:["2","3","4","0"],answer:1,explanation:"range(3) produces 0, 1, and 2."},
 {id:"d5",topic:"Lists",difficulty:"Medium",question:"Which adds an item to the end of a list?",options:["add()","append()","push()","insertEnd()"],answer:1,explanation:"list.append() adds one item at the end."},
 {id:"d6",topic:"Functions",difficulty:"Easy",question:"Which keyword defines a function?",options:["function","func","def","define"],answer:2,explanation:"Python functions begin with def."},
 {id:"d7",topic:"OOP",difficulty:"Medium",question:"An object is an instance of a…",options:["loop","class","module","list"],answer:1,explanation:"Classes define blueprints; objects are their instances."},
 {id:"d8",topic:"Recursion",difficulty:"Medium",question:"What must a recursive function include?",options:["A base case","A class","A list","A print"],answer:0,explanation:"A base case stops recursive calls."},
 {id:"d9",topic:"Loops",difficulty:"Hard",question:"What does break do inside a loop?",options:["Skips one iteration","Ends the loop","Restarts it","Raises an error"],answer:1,explanation:"break exits the nearest loop."},
 {id:"d10",topic:"Functions",difficulty:"Medium",question:"What does return send back to the caller?",options:["A loop","A value","A comment","A parameter"],answer:1,explanation:"return passes a result from a function."},
];
export const functionsQuestions: Question[] = [
 {id:"f1",topic:"Functions",difficulty:"Easy",question:"What does greet() do after def greet(): print('Hi')?",options:["Defines nothing","Prints Hi when called","Returns Hi","Causes an error"],answer:1,explanation:"Calling greet() runs its body and prints Hi."},
 {id:"f2",topic:"Functions",difficulty:"Easy",question:"In def add(a, b):, a and b are…",options:["arguments","parameters","classes","returns"],answer:1,explanation:"Parameters are named inputs in a function definition."},
 {id:"f3",topic:"Functions",difficulty:"Medium",question:"What does double(4) return if def double(n): return n * 2?",options:["2","4","8","None"],answer:2,explanation:"4 multiplied by 2 is 8."},
 {id:"f4",topic:"Functions",difficulty:"Medium",question:"Which call correctly passes two arguments?",options:["add[2,3]","add(2,3)","add{2,3}","add=2,3"],answer:1,explanation:"Function calls use parentheses."},
 {id:"f5",topic:"Functions",difficulty:"Hard",question:"What is returned by a function with no return statement?",options:["0","False","None","Error"],answer:2,explanation:"Python functions implicitly return None."},
];
export const oopQuestions: Question[] = [
 {id:"o1",topic:"OOP",difficulty:"Easy",question:"Which creates a class?",options:["class Car:","object Car:","new Car:","def Car:"],answer:0,explanation:"Use the class keyword."},
 {id:"o2",topic:"OOP",difficulty:"Easy",question:"What is __init__ used for?",options:["Looping","Initializing an object","Deleting a class","Importing"],answer:1,explanation:"__init__ runs when an object is created."},
 {id:"o3",topic:"OOP",difficulty:"Medium",question:"self refers to…",options:["the current instance","the parent class","a global variable","a loop"],answer:0,explanation:"self lets methods access the current object."},
 {id:"o4",topic:"OOP",difficulty:"Medium",question:"Inheritance lets a class…",options:["repeat a loop","reuse another class","return twice","hide imports"],answer:1,explanation:"A child class can inherit behavior from a parent."},
 {id:"o5",topic:"OOP",difficulty:"Hard",question:"A method is…",options:["a function inside a class","a list item","a type of loop","a syntax error"],answer:0,explanation:"Methods are functions defined on classes."},
];
export const loopsQuestions: Question[] = [
 {id:"l1",topic:"Loops",difficulty:"Easy",question:"range(1,4) produces…",options:["1,2,3","1,2,3,4","0,1,2,3","2,3,4"],answer:0,explanation:"The stop value is excluded."},{id:"l2",topic:"Loops",difficulty:"Easy",question:"continue does what?",options:["Ends loop","Skips current iteration","Repeats forever","Creates list"],answer:1,explanation:"continue moves to the next iteration."},{id:"l3",topic:"Loops",difficulty:"Medium",question:"Which loop repeats while a condition is true?",options:["for","while","if","def"],answer:1,explanation:"while loops run on a condition."},{id:"l4",topic:"Loops",difficulty:"Medium",question:"Nested loops are…",options:["loops inside loops","broken loops","one-time loops","functions"],answer:0,explanation:"A loop may appear in another loop body."},{id:"l5",topic:"Loops",difficulty:"Hard",question:"What ends only the nearest loop?",options:["return","break","continue","pass"],answer:1,explanation:"break exits the innermost loop."}
];
export const recursionQuestions: Question[] = [
 {id:"r1",topic:"Recursion",difficulty:"Easy",question:"A recursive function calls…",options:["itself","a list","only print","a database"],answer:0,explanation:"Recursion means a function calls itself."},{id:"r2",topic:"Recursion",difficulty:"Easy",question:"The base case prevents…",options:["output","infinite recursion","variables","classes"],answer:1,explanation:"It provides a stopping condition."},{id:"r3",topic:"Recursion",difficulty:"Medium",question:"factorial(0) should return…",options:["0","1","None","Error"],answer:1,explanation:"0! is 1 and is the typical base case."},{id:"r4",topic:"Recursion",difficulty:"Medium",question:"A recursive case should move…",options:["away from base case","toward base case","into a loop only","to a class"],answer:1,explanation:"Each call must progress toward stopping."},{id:"r5",topic:"Recursion",difficulty:"Hard",question:"Missing a base case commonly causes…",options:["SyntaxError","RecursionError","ImportError","KeyError"],answer:1,explanation:"Calls continue until Python's recursion limit."}
];
