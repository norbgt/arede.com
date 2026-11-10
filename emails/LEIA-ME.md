# E-mails da a rede.com (Supabase, projeto "arede")

Modelos usados pelo cadastro e pela recuperação de senha. Onde ficam no Supabase:
Authentication > Emails > Templates.

| Modelo no Supabase | Assunto | Arquivo |
|---|---|---|
| Confirm signup | Confirme seu cadastro na a rede.com | confirmar-cadastro.html |
| Reset password | Crie uma nova senha · a rede.com | nova-senha.html |

Configuração de endereços (Authentication > URL Configuration):
- Site URL: https://arede.online/prototipo/
- Redirect URLs: https://arede.online/** e https://norbgt.github.io/arede.com/** (endereço antigo)

## Situação em 08/11/2026
- Site URL e Redirect URLs já configurados no Supabase (projeto arede).
- Os modelos acima ainda não estão no Supabase: para editar os e-mails, o Supabase exige um serviço de envio próprio (SMTP).
  Por enquanto a rede usa o e-mail padrão do Supabase, que só chega aos e-mails da equipe da organização norbgt.
- Quando houver SMTP (Gmail da rede, Resend com domínio ou outro), colar os dois arquivos em Authentication > Emails > Templates.
