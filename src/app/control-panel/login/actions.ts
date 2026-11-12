'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  // Ambil data dari input form (berdasarkan atribut 'name')
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Proses autentikasi ke Supabase
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  // Jika gagal login
  if (error) {
    redirect('/login?error=Invalid login credentials')
  }

  // Jika berhasil, refresh cache dan lempar ke halaman dashboard
  revalidatePath('/', 'layout')
  redirect('/dashboard')
}