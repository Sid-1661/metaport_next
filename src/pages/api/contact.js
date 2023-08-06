// const { SuperfaceClient } = require('@superfaceai/one-sdk');
const { createClient } = require('@supabase/supabase-js')
const supabaseUrl = 'https://jhrrzqvcuminmzilruam.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpocnJ6cXZjdW1pbm16aWxydWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExNTA5NTksImV4cCI6MjAwNjcyNjk1OX0.ShetFnZ_7iarIt2oj9OyFn2SphZ0ifJZ3OKclfGIed8'
const supabaseClient = createClient(supabaseUrl, supabaseKey)
// const sdk = new SuperfaceClient();

// Just check if all required fields are provided
function formValid(body) {
  return body.email && body.phone && body.name && body.message;
}

export default async function handler(req, res) {
  const body = req.body;
  
  const { error } = await supabaseClient
  .from('metaport_contact')
  .insert({ 
    name: body.name,
    email: body.email,
    number: body.phone,
    message: body.message
   })
  return res.status(200).json({
    name: body.name,
    email: body.email,
    phone: body.phone,
    message: body.message
  });

  
  // if (!formValid(body)) {
  //   res.status(422).end();
  //   return;
  // }

  // const profile = await sdk.getProfile('communication/send-email@2.1.0');
  // const message = `
  //   Email: ${body.email}
  //   Phone: ${body.phone}
  //   Name: ${body.name}
  //   Message: ${body.message} 
  //   `;
  // const result = await profile.getUseCase('SendEmail').perform(
  //   {
  //     from: process.env.FROM_EMAIL,
  //     to: process.env.TO_EMAIL,
  //     subject: 'Message from contact form',
  //     text: message,
  //   },
  //   {
  //     provider: 'sendgrid',
  //     security: {
  //       bearer_token: {
  //         token: process.env.SENDGRID_API_KEY,
  //       },
  //     },
  //   }
  // );

  // try {
  //   const data = result.unwrap();
  //   console.log(data);
  //   res.status(201).end();
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).end();
  // }
  
}
