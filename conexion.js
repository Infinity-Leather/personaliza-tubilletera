/* =====================================================================
   conexion.js — Conexión PÚBLICA a Supabase para la agenda de pedidos y
   los catálogos (repositorios agenda.tu.pedido, Catalogo-Hombre y
   Catalogo-Mujer). Infinity Leather · creador: a.Wong.la - l.a.aguilar.wong@gmail.com
   ---------------------------------------------------------------------
   Copia aquí los MISMOS dos valores de js/config.js de tu panel:
     • SUPABASE_URL           → Project URL
     • SUPABASE_CLAVE_PUBLICA → clave anon / publishable
   ✅ Esta clave es pública: solo permite usar las funciones públicas
      (registrar carrito, verificar enlace, registrar envío, ver registro).
   ⛔ NUNCA pongas aquí la service_role / secret.
   ===================================================================== */
const SUPABASE_URL = 'https://mznyfalvxronzlltmtrc.supabase.co';
const SUPABASE_CLAVE_PUBLICA = 'sb_publishable_6LrhjJzb3Nvui1JMdJbcTQ_gOcD3BkC';
// Página donde el cliente registra su envío (repositorio agenda.tu.pedido)
const URL_REGISTRO = 'https://infinity-leather.github.io/agenda.tu.pedido/';

const CONFIG_INCOMPLETA = SUPABASE_URL.includes('TU-PROYECTO') || SUPABASE_CLAVE_PUBLICA.startsWith('TU_');
const sb = (!CONFIG_INCOMPLETA && window.supabase && window.supabase.createClient)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_CLAVE_PUBLICA, { auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false } })
  : undefined;
