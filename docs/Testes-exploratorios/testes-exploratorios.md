# Testes Exploratórios

## EXP-001 — Explorar entradas no campo Nome completo

**Objetivo:**  
Explorar a validação  do campo "Nome completo" durante a finalização da compra.

**Área explorada:** Checkout / Dados para entrega / Nome completo

**Entradas a explorar:**

| Entrada | Objetivo |
|---|---|
| `Maria` | Verificar nome contendo apenas uma palavra |
| `Maria Silva` | Verificar entrada válida |
| `123456` | Verificar aceitação de somente números |
| `Maria123 Silva` | Verificar combinação de letras e números |
| `@#$%` | Verificar caracteres especiais |
| `   Maria Silva   ` | Verificar espaços no início e no final |
| `Maria     Silva` | Verificar múltiplos espaços entre os nomes |
| Nome extremamente longo | Verificar limite e comportamento do campo |

**Comportamento esperado:**  
O sistema deve aceitar um nome completo válido, contendo pelo menos nome e sobrenome, e deve impedir a confirmação do pedido quando o valor informado não atender à regra de nome completo.

Além da validação funcional, a interface não deve quebrar, apresentar erros inesperados ou permitir que entradas inadequadas causem inconsistências.

**Resultado obtido:**  
O sistema permitiu a confirmação do pedido utilizando valores compostos somente por números ou caracteres especiais no campo "Nome completo", sem a presença de letras.

**Status:** ❌ FALHA

**Bug relacionado:** BUG-003
