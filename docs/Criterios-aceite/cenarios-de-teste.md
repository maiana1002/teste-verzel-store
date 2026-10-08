# Cenários de Teste Verzel Store

Este documento contém os cenários de teste elaborados a partir dos critérios de aceite apresentados na documentação da Verzel Store.

---

## Funcionalidade: Cupom de desconto
### CT-001 - Aplicar o cupom BEMVINDO10 com sucesso

**Critérios relacionados:** CA01  
**Tipo:** Funcional / Positivo  
**Camada:** UI  
**Prioridade:** Alta  

```gherkin
@ui @cupom
Cenário: Aplicar o cupom BEMVINDO10 sobre o subtotal dos produtos
  Dado que o cliente possui 1 unidade da "Mochila Urbana 20L" no carrinho
  E o subtotal do carrinho é R$ 100,00
  Quando o cliente informar o cupom "BEMVINDO10"
  E solicitar a aplicação do cupom
  Então o cupom deve ser aplicado com sucesso
  E o desconto deve ser de R$ 10,00
  E o total do pedido deve ser de R$ 109,90

-------------------------------------------------------------------------------------------------------
### CT-002 - Aplicar cupom utilizando letras minúsculas

**Critério relacionado:** CA02  
**Tipo:** Funcional / Positivo  
**Camada:** UI  
**Prioridade:** Média  

```gherkin
@ui @cupom
Cenário: Aplicar o cupom utilizando letras minúsculas
  Dado que o cliente possui 1 unidade da "Mochila Urbana 20L" no carrinho
  E o subtotal do carrinho é R$ 100,00
  Quando o cliente informar o cupom "bemvindo10"
  E solicitar a aplicação do cupom
  Então o cupom deve ser aplicado com sucesso
  E o desconto deve ser de R$ 10,00

-------------------------------------------------------------------------------------------------------

### CT-003 - Aplicar cupom com espaços no início e no fim

**Critério relacionado:** CA02  
**Tipo:** Funcional / Positivo  
**Camada:** UI  
**Prioridade:** Média  

```gherkin
@ui @cupom
Cenário: Aplicar o cupom com espaços no início e no fim
  Dado que o cliente possui 1 unidade da "Mochila Urbana 20L" no carrinho
  E o subtotal do carrinho é R$ 100,00
  Quando o cliente informar o cupom "  BEMVINDO10  "
  E solicitar a aplicação do cupom
  Então o cupom deve ser aplicado com sucesso
  E o desconto deve ser de R$ 10,00

-------------------------------------------------------------------------------------------------------


### CT-004 - Tentar aplicar um cupom inexistente

**Critério relacionado:** CA03  
**Tipo:** Funcional / Negativo  
**Camada:** UI  
**Prioridade:** Alta  

```gherkin
@ui @cupom
Cenário: Tentar aplicar um cupom inexistente
  Dado que o cliente possui 1 unidade da "Mochila Urbana 20L" no carrinho
  E o subtotal do carrinho é R$ 100,00
  E nenhum cupom está aplicado
  Quando o cliente informar o cupom "CUPOMINVALIDO"
  E solicitar a aplicação do cupom
  Então deve ser exibida a mensagem "Cupom inválido."
  E nenhum desconto deve ser aplicado
  E o total do pedido deve permanecer R$ 119,90

  -------------------------------------------------------------------------------------------------------

  ### CT-006 - Remover um cupom aplicado

**Critério relacionado:** CA05  
**Tipo:** Funcional / Positivo  
**Camada:** UI  
**Prioridade:** Alta  

```gherkin
@ui @cupom
Cenário: Remover um cupom aplicado
  Dado que o cliente possui 1 unidade da "Mochila Urbana 20L" no carrinho
  E o cupom "BEMVINDO10" está aplicado
  E o desconto aplicado é de R$ 10,00
  Quando o cliente remover o cupom
  Então o cupom não deve mais estar aplicado
  E o desconto deve ser removido
  E o total do pedido deve ser atualizado para R$ 119,90

-------------------------------------------------------------------------------------------------------

### CT-007 - Validar frete abaixo do limite de R$ 200,00

**Critérios relacionados:** CA06, CA07  
**Técnica:** Análise de Valor Limite  
**Tipo:** Funcional / Positivo  
**Camada:** UI  
**Prioridade:** Alta

```gherkin
@ui @frete
Cenário: Calcular frete para subtotal abaixo de R$ 200,00
  Dado que o cliente possui 1 unidade da "Calça Jeans Slim" no carrinho
  E possui 1 unidade da "Camiseta Essencial" no carrinho
  E o subtotal do carrinho é R$ 199,80
  Quando o cliente visualizar o resumo do pedido
  Então o frete deve ser de R$ 19,90
  E deve ser informado que faltam R$ 0,20 para obter frete grátis
  E o total do pedido deve ser R$ 219,70

-------------------------------------------------------------------------------------------------------
  
### CT-008 - Validar frete grátis exatamente no limite de R$ 200,00

**Critério relacionado:** CA06  
**Técnica:** Análise de Valor Limite  
**Tipo:** Funcional / Positivo  
**Camada:** UI  
**Prioridade:** Alta

```gherkin
@ui @frete
Cenário: Aplicar frete grátis para subtotal exatamente igual a R$ 200,00
  Dado que o cliente possui 2 unidades da "Mochila Urbana 20L" no carrinho
  E o subtotal do carrinho é R$ 200,00
  Quando o cliente visualizar o resumo do pedido
  Então o frete deve ser grátis
  E o valor do frete deve ser R$ 0,00
  E o total do pedido deve ser R$ 200,00

-------------------------------------------------------------------------------------------------------

### CT-009 - Validar frete grátis acima de R$ 200,00

**Critério relacionado:** CA06  
**Técnica:** Análise de Valor Limite  
**Tipo:** Funcional / Positivo  
**Camada:** UI  
**Prioridade:** Alta
**Pré-condição:** O carrinho deve estar vazio antes da execução do teste.

```gherkin
@ui @frete
Cenário: Aplicar frete grátis para subtotal superior a R$ 200,00
  Dado que o cliente possui 1 unidade da "Jaqueta Corta-Vento" no carrinho
  E o subtotal do carrinho é R$ 229,90
  Quando o cliente visualizar o resumo do pedido
  Então o frete deve ser grátis
  E o valor do frete deve ser R$ 0,00
  E o total do pedido deve ser R$ 229,90

-------------------------------------------------------------------------------------------------------


### CT-010 - Validar frete e valor faltante abaixo de R$ 200,00

**Critério relacionado:** CA07  
**Tipo:** Funcional  
**Camada:** UI  
**Prioridade:** Alta  
**Pré-condição:** O carrinho deve estar vazio antes da execução do teste.

```gherkin
@ui @frete
Cenário: Informar o valor faltante para obter frete grátis
  Dado que o cliente adicionou 1 unidade da "Mochila Urbana 20L" ao carrinho
  E o subtotal dos produtos é R$ 100,00
  E nenhum cupom de desconto está aplicado
  Quando o cliente acessar o carrinho
  Então o valor do frete deve ser R$ 19,90
  E deve ser informado que faltam R$ 100,00 para obter frete grátis
  E o total do pedido deve ser R$ 119,90

-------------------------------------------------------------------------------------------------------

### CT-011 - Validar frete grátis considerando o subtotal antes do desconto

**Critério relacionado:** CA08  
**Tipo:** Funcional  
**Camada:** UI  
**Prioridade:** Alta  
**Pré-condição:** O carrinho deve estar vazio antes da execução do teste.

```gherkin
@ui @frete @cupom
Cenário: Manter frete grátis quando o desconto reduz o valor para menos de R$ 200,00
  Dado que o cliente adicionou 1 unidade do "Tênis Casual Urbano" ao carrinho
  E adicionou 1 unidade do "Kit 3 Pares de Meias"
  E o subtotal dos produtos é R$ 219,80
  Quando o cliente aplicar o cupom "BEMVINDO10"
  Então deve ser aplicado um desconto de R$ 21,98
  E o frete deve permanecer grátis, considerando o subtotal antes do desconto
  E o total do pedido deve ser R$ 197,82
```

-------------------------------------------------------------------------------------------------------

### CT-012 - Validar que o desconto do cupom não é aplicado sobre o frete

**Critério relacionado:** CA09  
**Tipo:** Funcional  
**Camada:** UI  
**Prioridade:** Alta  

```gherkin
@ui @cupom @frete
Cenário: Aplicar desconto somente sobre o subtotal dos produtos
  Dado que o cliente adicionou 1 unidade da "Mochila Urbana 20L" ao carrinho
  E o subtotal dos produtos é R$ 100,00
  E o frete é R$ 19,90
  Quando o cliente aplicar o cupom "BEMVINDO10"
  Então o desconto deve ser de R$ 10,00
  E o valor do frete deve permanecer R$ 19,90
  E o total do pedido deve ser R$ 109,90
```
-------------------------------------------------------------------------------------------------------


### CT-013 - Validar limite máximo de 5 unidades do mesmo produto pela interface

**Critério relacionado:** CA10  
**Tipo:** Funcional / Limite  
**Camada:** UI  
**Prioridade:** Alta  

```gherkin
@ui @carrinho @limite
Cenário: Impedir quantidade superior a 5 unidades do mesmo produto
  Dado que o cliente adicionou um produto ao carrinho
  E ajustou a quantidade do produto para 5 unidades
  Quando tentar aumentar a quantidade para 6 unidades
  Então o sistema não deve permitir quantidade superior a 5 unidades
  E a quantidade do produto deve permanecer em no máximo 5 unidades
```
-------------------------------------------------------------------------------------------------------


### CT-014 - Validar bloqueio de quantidade superior a 5 unidades pela API

**Critério relacionado:** CA10  
**Tipo:** Funcional / Limite  
**Camada:** API  
**Prioridade:** Alta  

```gherkin
@api @carrinho @limite
Cenário: Rejeitar quantidade superior a 5 unidades do mesmo produto pela API
  Dado que existe o produto "P005"
  Quando for enviada uma requisição para calcular o carrinho com 6 unidades do produto "P005"
  Então a API deve retornar status 422
  E deve retornar o código "QUANTIDADE_MAXIMA_EXCEDIDA"
  E o carrinho não deve aceitar a quantidade informada
```
-------------------------------------------------------------------------------------------------------


### CT-015 - Validar apresentação dos valores monetários com duas casas decimais

**Critério relacionado:** CA11  
**Tipo:** Funcional / Cálculo  
**Camada:** UI  
**Prioridade:** Média  

```gherkin
@ui @calculo @arredondamento
Cenário: Exibir valores monetários com duas casas decimais
  Dado que o cliente adicionou 1 unidade da "Camiseta Essencial" ao carrinho
  Quando o cliente aplicar o cupom "BEMVINDO10"
  Então o subtotal deve ser apresentado com duas casas decimais
  E o desconto deve ser apresentado com duas casas decimais
  E o frete deve ser apresentado com duas casas decimais
  E o total deve ser apresentado com duas casas decimais
```