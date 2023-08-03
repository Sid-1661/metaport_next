const { SuperfaceClient } = require('@superfaceai/one-sdk');
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function GET(request: NextRequest) {
  return NextResponse.json(
    {
      body: request.body,
      path: request.nextUrl.pathname,
      query: request.nextUrl.search,
      cookies: request.cookies.getAll()
    },
    {
      status: 200
    }
  )
}

const sdk = new SuperfaceClient();

// // Just check if all required fields are provided
function formValid(body) {
  return body.email && body.phone && body.name;
}

// export default async function handler(req, res) {
//   const body = req.body;

//   if (!formValid(body)) {
//     res.status(422).end();
//     return;
//   }

//   const profile = await sdk.getProfile('communication/send-email@2.1.0');
//   const message = `
//     Email: ${body.email}
//     Phone: ${body.phone}
//     Name: ${body.name}
//     Message: ${body.message} 
//     `;
//   const result = await profile.getUseCase('SendEmail').perform(
//     {
//       from: process.env.FROM_EMAIL,
//       to: process.env.TO_EMAIL,
//       subject: 'Message from contact form',
//       text: message,
//     },
//     {
//       provider: 'sendgrid',
//       security: {
//         bearer_token: {
//           token: process.env.SENDGRID_API_KEY,
//         },
//       },
//     }
//   );

//   try {
//     const data = result.unwrap();
//     console.log(data);
//     res.status(201).end();
//   } catch (error) {
//     console.error(error);
//     res.status(500).end();
//   }
// }

// export async function POST(request: NextRequest) {
//   // return NextResponse.json(
//   //   {
//   //     body: request.body,
//   //     path: request.nextUrl.pathname,
//   //     query: request.nextUrl.search,
//   //     cookies: request.cookies.getAll()
//   //   },
//   //   {
//   //     status: 200
//   //   }
//   // )

//   const body = request.body;

//   if (!formValid(body)) {
//     // res.status(422).end();
//     return NextResponse.json(
//       {
//         body: 'bad request'
//       },
//       {
//         status: 402
//       }
//     )
//   }

//   const profile = await sdk.getProfile('communication/send-email@2.1.0');
//   const message = `
//     Email: ${body.email}
//     Phone: ${body.phone}
//     Name: ${body.name}
//     Message: ${body.message} 
//     `;
//   const result = await profile.getUseCase('SendEmail').perform(
//     {
//       from: process.env.FROM_EMAIL,
//       to: process.env.TO_EMAIL,
//       subject: 'Message from contact form',
//       text: message,
//     },
//     {
//       provider: 'sendgrid',
//       security: {
//         bearer_token: {
//           token: process.env.SENDGRID_API_KEY,
//         },
//       },
//     }
//   );

//   try {
//     const data = result.unwrap();
//     console.log(data);
//     // res.status(201).end();
//     return NextResponse.json({}, { status: 201 })
//   } catch (error) {
//     console.error(error);
//     // res.status(500).end();
//     return NextResponse.json({}, {status: 500})
//   }
// }