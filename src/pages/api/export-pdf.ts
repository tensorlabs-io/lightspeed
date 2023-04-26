import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';
import { Readable } from 'stream';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let html = req.body.html;
  html = '<div style="padding:5rem;">'+html+'</div>'
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();

  await page.setContent(html);

  const pdf = await page.pdf({ format: 'A4' });

  await browser.close();

  const stream = new Readable();
  stream.push(pdf);
  stream.push(null);

  res.setHeader('Content-Disposition', 'attachment; filename=export.pdf');
  res.setHeader('Content-Type', 'application/pdf');
  stream.pipe(res);
}
