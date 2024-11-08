# Why Choose TypeScript Over JavaScript?

JavaScript (JS) is a popular language for web development, but as applications grow larger, it becomes challenging to maintain. TypeScript (TS) was introduced to solve some of these challenges. TypeScript is a **superset of JavaScript** that adds optional static typing, making it easier to catch errors early and improve code readability.

## Key Reasons to Use TypeScript

### 1. **Type Safety**

TypeScript lets you specify types for your variables, making it easier to catch errors before they occur. For example:

```typescript

// TypeScript
let age: number = 25; // 'age' must be a number
age = "twenty-five";   // Error: Type 'string' is not assignable to type 'number'
