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
  
}
