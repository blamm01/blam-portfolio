import type { APIRoute } from "astro";

export const GET: APIRoute = ({ params, request }) => {
  const hostname = new URL(request.url).hostname;
  if (hostname == "nhblam.space") {
    return new Response(`User-agent: *
Disallow: /`);
  } else return new Response(``)
};
