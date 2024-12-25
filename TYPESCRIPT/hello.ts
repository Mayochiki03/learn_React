function calculateTotalPrice(
  product: { name: string; unitPrice: number },
  quantity: number,
  discount: number
) {
  const priceWithoutDiscount = product.unitPrice * quantity;
  const discountAmount = priceWithoutDiscount * discount;
  return priceWithoutDiscount - discountAmount;
}

// Usage
const product = { name: "Laptop", unitPrice: 1000 };
const quantity = 2;
const discount = 0.1; // 10% discount

const totalPrice = calculateTotalPrice(product, quantity, discount);

console.log(`The total price is: $${totalPrice}`);

// let data: any = 10;
// data = "Hello";
// data = true;


// let data: unknown = 25;
// data = "Hello";
// data = true;

// console.log(data.toUpperCase()); // Error: Object is of type 'unknown'.

// // ตรวจสอบชนิดข้อมูลก่อนใช้งาน
// if (typeof data === "string") {
//   console.log(data.toUpperCase());
// }

//--- Object Type ---
// type Person = { name: string; age: number };

// let Person: Person = {
//   name: "John Doe",
//   age: 30,
// };
// console.log(person.name+":"+person.age)

//--- class ---

class Student {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    getDetails(): string {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
//   let student = new Student("John Doe", 30);
//   console.log(student.getDetails());

//   type Result = "Success" | "Error";

// let result: Result = "Success";

// let message: Result = "Hello"; // Error: Type '"Hello"' is not assignable to type 'Result'.     