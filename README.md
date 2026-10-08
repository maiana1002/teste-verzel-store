
# Verzel Store — Desafio Técnico de QA

Projeto desenvolvido para avaliação de qualidade da aplicação Verzel Store. Foram feitos testes funcionais, exploratórios, de API e automação com Playwright.

## 1. Objetivo

Validar as funcionalidades da aplicação Verzel Store com base nos critérios de aceite fornecidos, identificando possíveis inconsistências e documentando os resultados obtidos.

As principais funcionalidades avaliadas foram:

- Aplicação e remoção de cupons de desconto.
- Cálculo de subtotal, descontos, frete e total do pedido.
- Regras para concessão de frete grátis.
- Limite de quantidade de produtos no carrinho.
- Validação de dados na finalização da compra.
- Comportamento dos endpoints da API.

## 2. Tecnologias e ferramentas

- Playwright — automação de testes de interface e API.
- JavaScript — implementação dos testes automatizados.
- Node.js e npm — execução e gerenciamento das dependências.
- VS Code — desenvolvimento e organização do projeto.
- Git e GitHub — versionamento e disponibilização dos arquivos.
- Markdown — documentação dos cenários, execuções e defeitos.

## 3. Estratégia de testes

Abordagem adotada:

**Testes funcionais:** validação das regras de negócio e dos critérios de aceite.

**Testes de API:** verificação dos endpoints, códigos de status HTTP, estrutura das respostas e regras de negócio.

**Testes exploratórios:** investigação de comportamentos não contemplados diretamente pelos cenários funcionais.

**Testes automatizados:** implementação de verificações de interface e API utilizando Playwright.

Também foi utilizada a técnica de Análise de Valor Limite para avaliar o comportamento da regra de frete grátis em valores abaixo, iguais e acima de R$ 200,00.

## 4. Defeitos identificados

Durante a execução dos testes, foram registrados três defeitos:

| ID | Descrição | Severidade |
|---|---|---|
| BUG-001 | Frete grátis não aplicado para subtotal exatamente igual a R$ 200,00 | Média |
| BUG-002 | API permite quantidade superior a 5 unidades do mesmo produto | Alta |
| BUG-003 | Campo Nome completo aceita valores compostos apenas por números ou caracteres especiais | Média |

Os passos de reprodução, resultados esperados, resultados obtidos e evidências estão disponíveis em [bugs.md](./docs/bugs.md).

## 5. Organização da documentação

Os arquivos estão organizados nas seguintes áreas:

- [Critérios de aceite e cenários funcionais](./docs/Criterios-aceite/cenarios-de-teste.md)
- [Execução dos testes funcionais](./docs/Criterios-aceite/execucao-testes.md)
- [Cenários de API](./docs/API/cenarios-api.md)
- [Execução dos testes de API](./docs/API/execucao-api.md)
- [Testes exploratórios](./docs/Testes-exploratorios/testes-exploratorios.md)
- [Registro de bugs](./docs/bugs.md)
- [Premissas e ambiguidades](./docs/premissas-e-ambiguidades.md)
- [Execução automatizada](./docs/execucao-automatizada.md)

As evidências estão armazenadas nas respectivas pastas de testes.

## 6. Automação com Playwright

Foram implementados testes automatizados para validar funcionalidades da interface e endpoints da API.

### Pré-requisitos

- Node.js instalado.
- npm disponível.

### Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/maiana1002/teste-verzel-store.git
cd teste-verzel-store
```

Instale as dependências:

```bash
npm install
```

Instale os navegadores utilizados pelo Playwright:

```bash
npx playwright install
```

### Execução dos testes

Para executar os testes no Chromium:

```bash
npx playwright test --project=chromium
```

Para visualizar o relatório HTML:

```bash
npx playwright show-report
```

### Resultados da execução

Na execução registrada em 07/10/2026, foram obtidos os seguintes resultados:

- Total de testes automatizados: 6
- Testes aprovados: 5
- Testes com falha: 1

A falha identificada corresponde ao BUG-002, relacionado à ausência de validação do limite máximo de unidades pela API.

O teste foi mantido com a validação esperada para evidenciar o defeito existente na aplicação.

Mais detalhes estão disponíveis em [Execução automatizada](./docs/execucao-automatizada.md).

## 7. Uso de Inteligência Artificial

Durante o desenvolvimento do desafio, utilizei Inteligência Artificial como ferramenta de apoio à produtividade e à melhoria da qualidade das entregas.

A ferramenta auxiliou principalmente em:

- Revisão e aprimoramento da escrita dos cenários e relatórios.
- Padronização e organização da documentação.
- Investigação de erros encontrados durante o desenvolvimento dos testes automatizados.
- Análise de alternativas para melhorar a legibilidade e a estrutura do código.

A elaboração dos cenários, a execução dos testes, a análise dos resultados e o registro dos defeitos foram realizados considerando os requisitos e o comportamento observado na aplicação.

As sugestões da IA foram avaliadas criticamente antes de sua utilização.

## 8. Considerações finais

A execução dos testes permitiu avaliar as principais regras de negócio da Verzel Store e identificar inconsistências nas validações de frete, quantidade de produtos e dados de checkout.

A combinação de testes manuais, exploratórios, API e automação ampliou a cobertura das verificações.
