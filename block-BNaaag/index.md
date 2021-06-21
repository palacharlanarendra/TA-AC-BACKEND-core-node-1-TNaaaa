writeCode

1. require fs in a file(`index.js`) and use fs.readFile to read content of a file(content.md)

- create file whenever required on your own.

```js
// index.js
fs.readFile('./content.md', (err, file) => {
  console.log(file);
});
```

2. Run sync code from fs module in the above file(`index.js`).

```js
let result = fs.readFileSync('./content.md', 'utf8');
console.log(result);
```

3. Run async code from fs module in same file.

```js
console.log('execute me first');

console.time('task1');
setTimeout(() => {
  console.timeEnd('task1');
}, 1000);

console.time('task2');
fs.readFile('./content.md', 'utf8', (err, file) => {
  console.log(err, file.toString());
  console.timeEnd('task2');
});
console.log('execute me last');
```

4. create new buffer of fixed length 10 and store it in variable named buff1 and console the buff1.

```js
let buff1 = Buffer.alloc(10);
console.log(buff1);
```

5. write content(Welcome to Buffer) to buff1 variable.

```js
buff1.write('welcome to HP!');
console.log(buff1.toString());
```
