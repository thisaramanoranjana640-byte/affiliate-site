import { NextResponse } from 'next/server';
import { affiliateLinks } from '@/lib/affiliateLinks';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const targetUrl = affiliateLinks[slug];

  if (!targetUrl) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.redirect(targetUrl, 307);
}