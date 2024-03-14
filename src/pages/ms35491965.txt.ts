import type { APIRoute } from 'astro';

const response = `
{
  "Description": "Domain ownership verification file for Microsoft 365 - place in the website root",
  "Domain": "blam.id.vn",
  "Id": "337bde94-0ac0-4a40-a235-b5e1d12f4fa2"
}
`

export const GET: APIRoute = () => new Response(response)