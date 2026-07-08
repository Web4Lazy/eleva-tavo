-- Schema Supabase per la raccolta email del lead magnet (guida Metodo Eleva).
-- Da eseguire una volta nel SQL Editor del progetto Supabase.

create extension if not exists pgcrypto;

create table if not exists public.lead_emails (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  consent boolean not null default false,
  source text not null default 'guida-metodo-eleva',
  created_at timestamptz not null default now()
);

alter table public.lead_emails enable row level security;

-- Nessuna policy pubblica: l'accesso avviene SOLO dal backend con la service_role key,
-- che bypassa RLS. Anon/public key non possono leggere né scrivere.
