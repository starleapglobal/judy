// Lightweight Prisma client wrapper that avoids TypeScript depending on
// generated `@prisma/client` types during builds where postinstall scripts
// are blocked (for example, on some serverless CI providers).
// At runtime, we `require` the client dynamically.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PrismaClientType = any;

declare global {
  // eslint-disable-next-line no-var, @typescript-eslint/no-explicit-any
  var prisma: PrismaClientType | undefined;
}

function createPrismaClient(): PrismaClientType | null {
  if (typeof window !== "undefined") return null;

  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { PrismaClient } = require("@prisma/client");
    return new PrismaClient({
      log:
        process.env.NODE_ENV === "development"
          ? ["query", "error", "warn"]
          : ["error"],
    });
  } catch {
    // In environments where Prisma is not available (e.g. build without
    // generated client), gracefully return null so admin features are disabled.
    return null;
  }
}

export const prisma: PrismaClientType | null =
  global.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production" && prisma) {
  global.prisma = prisma;
}

