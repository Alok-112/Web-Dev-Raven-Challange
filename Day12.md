# Day 12 :- Master fastify framework by building a complete Backend 


## 1️⃣ Building Your Own Plugins in Fastify

Fastify plugins are used to **extend Fastify’s functionality** in a reusable way.

### 🔹 Why Plugins?

* Encapsulation of logic
* Clean project structure
* Dependency sharing
* Reusability across routes/projects

---

### 📌 Basic Plugin Structure

```js
// plugins/db.js
async function dbPlugin(fastify, options) {
  const db = {
    users: []
  }

  fastify.decorate("db", db)
}

export default dbPlugin
```

Register the plugin:

```js
import Fastify from "fastify"
import dbPlugin from "./plugins/db.js"

const app = Fastify()

app.register(dbPlugin)

app.get("/", async (req, reply) => {
  return app.db.users
})

app.listen({ port: 3000 })
```

---

### 🔹 Plugin with Options

```js
async function greetingPlugin(fastify, options) {
  fastify.decorate("greet", () => {
    return `Hello ${options.name}`
  })
}

export default greetingPlugin
```

```js
app.register(greetingPlugin, { name: "Alok" })
```

---

### 🔹 Plugin Encapsulation (Scope)

```js
app.register(async function (instance) {
  instance.decorate("secret", "123")
})
```

➡️ `secret` is available **only inside this plugin scope**

---

## 2️⃣ User Authentication with Fastify JWT (Middleware Style)

### 🔹 Install Required Plugins

```bash
npm install @fastify/jwt @fastify/cookie
```

---

### 🔹 Register JWT Plugin

```js
app.register(import("@fastify/jwt"), {
  secret: "supersecretkey"
})
```

---

### 🔹 Create Auth Middleware

```js
async function authMiddleware(request, reply) {
  try {
    await request.jwtVerify()
  } catch (err) {
    reply.code(401).send({ error: "Unauthorized" })
  }
}
```

---

### 🔹 Login Route (Generate Token)

```js
app.post("/login", async (req, reply) => {
  const { username } = req.body

  const token = app.jwt.sign({ username })

  return { token }
})
```

---

### 🔹 Protected Route

```js
app.get(
  "/profile",
  { preHandler: authMiddleware },
  async (req, reply) => {
    return {
      user: req.user
    }
  }
)
```

---

### 🔹 Using JWT as Cookie

```js
app.register(import("@fastify/cookie"))

app.post("/login", async (req, reply) => {
  const token = app.jwt.sign({ id: 1 })

  reply.setCookie("token", token, {
    httpOnly: true,
    path: "/"
  })

  return { success: true }
})
```

---

## 3️⃣ Streams in Node.js & Fastify File Handling

### 🔹 What are Streams?

Streams allow handling **large data chunk by chunk** instead of loading everything into memory.

Types:

* Readable
* Writable
* Duplex
* Transform

---

### 🔹 Node.js Stream Example

```js
import fs from "fs"

const stream = fs.createReadStream("large.txt")

stream.on("data", chunk => {
  console.log("Chunk received")
})

stream.on("end", () => {
  console.log("Finished reading")
})
```

---

### 🔹 Why Streams Matter?

❌ `fs.readFile()` → loads entire file in memory
✅ Streams → memory efficient, scalable

---

### 🔹 Fastify File Upload Plugin

```bash
npm install @fastify/multipart
```

---

### 🔹 Register Multipart Plugin

```js
app.register(import("@fastify/multipart"))
```

---

### 🔹 Handle File Upload Using Streams

```js
app.post("/upload", async (req, reply) => {
  const data = await req.file()

  const stream = fs.createWriteStream(`uploads/${data.filename}`)

  await data.file.pipe(stream)

  return { message: "File uploaded successfully" }
})
```

---

### 🔹 Stream File Download

```js
app.get("/download", async (req, reply) => {
  const stream = fs.createReadStream("large.txt")

  reply.type("text/plain")
  return reply.send(stream)
})
```





