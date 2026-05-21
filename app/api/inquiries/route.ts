import { NextResponse } from "next/server";
import { properties } from "@/lib/properties";
import { inquirySchema } from "@/lib/validators";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  const body = contentType.includes("application/json") ? await request.json() : Object.fromEntries(await request.formData());
  const parsed = inquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: "Invalid inquiry data", errors: parsed.error.flatten() }, { status: 400 });
  }

  const property = properties.find((item) => item.id === parsed.data.propertyId);

  if (!property) {
    return NextResponse.json({ message: "Property not found" }, { status: 404 });
  }

  const inquiry = {
    id: crypto.randomUUID(),
    ...parsed.data,
    propertyTitle: property.title,
    createdAt: new Date().toISOString()
  };

  return NextResponse.json({ inquiry }, { status: 201 });
}
