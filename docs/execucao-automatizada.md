# Relatório de Execução — Testes Automatizados

## 1. Objetivo

Registrar os resultados dos testes automatizados da Verzel Store, desenvolvidos com Playwright.

## 2. Ambiente de execução

- Ferramenta: Playwright
- Linguagem: JavaScript
- Navegador: Chromium
- Aplicação: Verzel Store
- Data: 07/10/2026

## 3. Resultados

| ID | Cenário | Resultado |
|---|---|---|
| AUT-001 | Aplicar cupom BEMVINDO10 | PASSOU |
| AUT-002 | Validar frete grátis acima de R$ 200,00 | PASSOU |
| AUT-003 | Validar limite de 5 unidades na interface | PASSOU |
| AUT-API-001 | Listar produtos disponíveis | PASSOU |
| AUT-API-002 | Calcular carrinho sem cupom | PASSOU |
| AUT-API-003 | Rejeitar quantidade acima de 5 unidades na API | FALHOU |

## 4. Resumo

- Total de testes executados: 6
- Testes aprovados: 5
- Testes reprovados: 1

## 5. Defeitos identificados

**BUG-002 - API permite quantidade superior a 5 unidades**

- Critério relacionado: CA10
- Teste automatizado: AUT-API-003
- Resultado esperado: HTTP 422
- Resultado obtido: HTTP 200
- Situação: Defeito conhecido, também identificado nos testes manuais.

## 6. Execução dos testes

Para executar a suíte automatizada no Chromium:

`npx playwright test --project=chromium`

Para visualizar o relatório HTML:

`npx playwright show-report`

## 7. Conclusão

A automação validou com sucesso os principais fluxos de cupom, frete, quantidade na interface e operações da API.

O teste AUT-API-003 apresentou falha devido a um comportamento da aplicação que não atende ao critério de aceite CA10. A validação foi mantida para permitir a identificação do defeito em futuras execuções.