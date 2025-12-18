"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

function assertAdmin(formData: FormData) {
  if (!ADMIN_PASSWORD) {
    throw new Error("ADMIN_PASSWORD is not configured.");
  }
  const password = formData.get("password");
  if (password !== ADMIN_PASSWORD) {
    throw new Error("Invalid admin password.");
  }
}

export async function upsertPage(formData: FormData) {
  assertAdmin(formData);

  const slug = String(formData.get("slug") ?? "");
  const title = String(formData.get("title") ?? "");
  const heroTitle = String(formData.get("heroTitle") ?? "");
  const heroSubtitle = String(formData.get("heroSubtitle") ?? "");
  const heroCtaLabel = String(formData.get("heroCtaLabel") ?? "");
  const heroCtaHref = String(formData.get("heroCtaHref") ?? "");

  if (!slug || !title) return;

  await prisma.page.upsert({
    where: { slug },
    update: {
      title,
      heroTitle,
      heroSubtitle,
      heroCtaLabel,
      heroCtaHref,
    },
    create: {
      slug,
      title,
      heroTitle,
      heroSubtitle,
      heroCtaLabel,
      heroCtaHref,
    },
  });

  revalidatePath("/");
  revalidatePath(slug === "home" ? "/" : `/${slug}`);
}

export async function upsertSection(formData: FormData) {
  assertAdmin(formData);

  const slug = String(formData.get("slug") ?? "");
  const key = String(formData.get("key") ?? "");
  const heading = String(formData.get("heading") ?? "");
  const content = String(formData.get("content") ?? "");

  if (!slug || !key) return;

  const page = await prisma.page.findUnique({ where: { slug } });
  if (!page) return;

  await prisma.section.upsert({
    where: {
      pageId_key: {
        pageId: page.id,
        key,
      },
    },
    update: {
      heading,
      content,
    },
    create: {
      pageId: page.id,
      key,
      heading,
      content,
    },
  });

  revalidatePath("/");
  revalidatePath(slug === "home" ? "/" : `/${slug}`);
}


