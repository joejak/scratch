export async function GET(event) {
  let res = await event.fetch("/94-pencil-sharpener-instructions.pdf");
  const body = await res.body;
  return new Response(body, {
    status: 200,
    headers: { "Content-Disposition": "attachment; filename=download.pdf" },
  });
}
