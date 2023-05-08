import { NextApiRequest, NextApiResponse } from 'next';
import pdf, { CreateOptions } from 'html-pdf';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let html = req.body.html;
  html = '<div style="padding:2rem;">'+html+'</div>';

  // Parse the HTML string and add font sizes to the tags
  html = html.replace(/<h1([^>]*)>/g, '<h1$1 style="font-size: 16px;">');
  html = html.replace(/<h2([^>]*)>/g, '<h2$1 style="font-size: 14px;">');
  html = html.replace(/<h3([^>]*)>/g, '<h2$1 style="font-size: 12px;">');
  html = html.replace(/<p([^>]*)>/g, '<p$1 style="font-size: 12px;">');
  
  const options: CreateOptions = {
    format: 'A4',
    border: {
      top: '1.5cm',
      bottom: '1cm'
    },
    footer: {
      height: '1cm',
      contents: {
        default: '<div style="text-align:center;"><span style="color: #444;">{{page}}</span>/<span>{{pages}}</span></div>'
      }
    }
  };

  pdf.create(html, options).toStream(function(err, stream) {
    if (err) {
      return res.status(500).send('Error creating PDF');
    }

    res.setHeader('Content-Disposition', 'attachment; filename=export.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    stream.pipe(res);
  });
}
