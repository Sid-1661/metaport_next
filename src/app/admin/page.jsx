"use client"; // This is a client component 👈🏽

import { useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import './Admin.module.css'

export default function Admin() {
  useEffect(() => {
    const supabaseUrl = 'https://jhrrzqvcuminmzilruam.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpocnJ6cXZjdW1pbm16aWxydWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExNTA5NTksImV4cCI6MjAwNjcyNjk1OX0.ShetFnZ_7iarIt2oj9OyFn2SphZ0ifJZ3OKclfGIed8'
    const supabaseClient = createClient(supabaseUrl, supabaseKey)

    async function getData() {
      const { data, error } = await supabaseClient
        .from('metaport_contact')
        .select('*')
      if (error) {
        console.log(error)
      } else {
        const table = document.getElementById('myTable')
        const header = table.createTHead()
        const row = header.insertRow(0)
        const headers = ['Name', 'Email', 'Number', 'Message']
        headers.forEach((headerText, index) => {
          const th = document.createElement('th')
          th.textContent = headerText
          row.appendChild(th)
        })
        data.forEach((row) => {
          const tr = document.createElement('tr')
          const td1 = document.createElement('td')
          td1.textContent = row.name
          const td2 = document.createElement('td')
          td2.textContent = row.email
          const td3 = document.createElement('td')
          td3.textContent = row.number
          const td4 = document.createElement('td')
          td4.textContent = row.message
          tr.appendChild(td1)
          tr.appendChild(td2)
          tr.appendChild(td3)
          tr.appendChild(td4)
          table.appendChild(tr)
        })
      }
    }

    getData()
  }, [])

  return (
    <div className='DataTable'>
      <h1>Supabase Table Test</h1>
      <table id="myTable" style={{borderCollapse: 'collapse', width: '100%'}}>

      </table>
    </div>
  )
}
