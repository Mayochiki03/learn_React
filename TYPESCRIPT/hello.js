function calculateTotalPrice(product, quantity, discount) {
    var priceWithoutDiscount = product.unitPrice * quantity;
    var discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
}
// Usage
var product = { name: "Laptop", unitPrice: 1000 };
var quantity = 2;
var discount = 0.1; // 10% discount
var totalPrice = calculateTotalPrice(product, quantity, discount);
console.log("The total price is: $".concat(totalPrice));
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
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return Student;
}());
var person = new Student("John Doe", 30);
console.log(person.getDetails());
