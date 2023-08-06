
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jhrrzqvcuminmzilruam.supabase.co'
const supabaseKey = process.env.SUPABASE_API_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpocnJ6cXZjdW1pbm16aWxydWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExNTA5NTksImV4cCI6MjAwNjcyNjk1OX0.ShetFnZ_7iarIt2oj9OyFn2SphZ0ifJZ3OKclfGIed8'
export const supabaseClient = createClient(supabaseUrl, supabaseKey)