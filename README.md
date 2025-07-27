# CLI-for-measuring-I/O-Latency

A simple Node.js command-line tool to **measure I/O latency** for reading and writing files. Great for learning filesystem performance and using Node's built-in modules like `fs`, `perf_hooks`, and `path`.

---

## 🧠 What It Does

- **Reads** a file and tells you how long it took in milliseconds.
- **Writes** a 1 MB dummy file and measures the time taken.

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- Built-in modules: `fs`, `path`, `perf_hooks`

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/io-latency-cli.git
cd io-latency-cli
````

Make the script executable (optional for UNIX/macOS):

```bash
chmod +x latency.js
```

---

## 🚀 Usage

### ✅ Syntax

```bash
node latency.js <action> <file>
```

### 📖 Read a File

```bash
echo "hello world" > example.txt
node latency.js read example.txt
```

*Expected Output:*

```
Read 12 bytes in 0.781 ms
```

### ✍️ Write a File

```bash
node latency.js write test.txt
```

*Expected Output:*

```
Wrote 1048576 bytes in 2.103 ms
```

---

## 🧪 Example Use Cases

* Measuring how fast your disk reads/writes small files.
* Testing SSD vs HDD speeds.
* Learning how `performance.now()` works in Node.js.

---

| File           | Description                            |
| -------------- | -------------------------------------- |
| `latency.js`   | Main CLI tool                          |
| `package.json` | Project metadata (not needed to run)   |
| `dummy.txt`    | Sample file created by write operation |
| `test.txt`     | Sample file to test read operation     |



💡 How It Works

1. Uses `process.argv` to read command-line arguments.
2. Measures time with `performance.now()` from `perf_hooks`.
3. Reads or writes a file using async `fs.readFile` or `fs.writeFile`.


❗ Error Handling

1. Shows helpful usage guide if arguments are missing.
2. Gracefully exits on read/write errors with a clear message.


🙌 Contributions

Feel free to fork the repo, improve it (e.g., support sync mode, custom file sizes), and open a PR!


 📄 License

MIT – Free for personal and commercial use.

 ✨ Author

Made with ❤️ by [Jay Prakash Valecha](https://github.com/JPV2207)
