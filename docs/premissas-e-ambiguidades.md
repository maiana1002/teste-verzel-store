
# Premissas e Ambiguidades — Verzel Store

## 1. Objetivo

Registrar as premissas adotadas durante a execução dos testes e os pontos dos requisitos que podem necessitar de esclarecimento.

## 2. Premissas adotadas

### PRE-001 — Estado inicial do carrinho

Os testes funcionais foram iniciados com o carrinho vazio, sem produtos ou cupons aplicados, para evitar interferências entre os cenários.

### PRE-002 — Dados dos produtos

Foram considerados os produtos, identificadores e preços disponibilizados no ambiente de testes da Verzel Store.

### PRE-003 — Ambiente de testes

As validações foram realizadas no ambiente disponibilizado para o desafio, considerando os comportamentos observados durante a execução.

### PRE-004 — Independência dos cenários

Os cenários foram executados de forma independente, preparando os dados necessários para cada validação.

## 3. Ambiguidades e pontos para esclarecimento

### AMB-001 — Regras de validação do nome completo

**Área:** Checkout

**Descrição:**

O requisito estabelece a necessidade de informar primeiro nome e sobrenome, mas não detalha todas as regras de validação do campo.

**Pontos para esclarecimento:**

- São permitidos números no nome?
- Quais caracteres especiais são aceitos?
- Como devem ser tratados nomes compostos?

**Impacto nos testes:**

A ausência dessas definições pode gerar interpretações diferentes sobre quais entradas devem ser aceitas ou rejeitadas.

**Observação:** Durante o teste exploratório EXP-001, foi identificado que o sistema aceita nomes compostos por números ou caracteres especiais. O comportamento foi registrado no BUG-003.

### AMB-002 — Comportamento após a confirmação do pedido

**Área:** Checkout

**Descrição:**

Os requisitos contemplam a finalização da compra, mas não detalham todos os comportamentos posteriores à confirmação.

**Pontos para esclarecimento:**

- O carrinho deve ser esvaziado após a confirmação?
- Deve ser disponibilizado um histórico de pedidos?
- O cliente deve conseguir consultar um pedido posteriormente?

**Impacto nos testes:**

Essas informações permitiriam ampliar a cobertura dos testes relacionados ao fluxo de compra.