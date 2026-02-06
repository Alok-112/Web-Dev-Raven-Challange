// Import the framework and instantiate it
import dotenv from "dotenv";
dotenv.config()
import Fastify from "fastify";
import fastifyEnv from "@fastify/env";
const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get("/", async function handler(request, reply) {
  return { hello: "world" };
});

// Run the server!
try {
  await fastify.listen({ port: process.env.PORT });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
