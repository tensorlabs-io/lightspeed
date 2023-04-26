import { NextApiRequest, NextApiResponse } from 'next';
import pdf from 'html-pdf';
import { Readable } from 'stream';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let html = req.body.html;
  html = '<div style="padding:5rem;">'+html+'</div>';

  const options = {
    format: 'A4'
  };

  pdf.create(html, options).toStream(function(err: Error, stream: Readable) {
    if (err) {
      return res.status(500).send('Error creating PDF');
    }

    res.setHeader('Content-Disposition', 'attachment; filename=export.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    stream.pipe(res);
  });
}
