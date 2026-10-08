# Cenários de Teste-API

## API-CT001-Consulta de lista de produtos

**Tipo:** Funcional  
**Método:** GET  
**Endpoint:** `/api/produtos`

```gherkin
@api @produtos
Cenário: Consultar a lista de produtos disponíveis
  Quando for enviada uma requisição GET para "/api/produtos"
  Então a API deve retornar status 200
  E deve retornar a lista de produtos disponíveis
```


## API-CT002-Consulta de produto existente por ID

**Tipo:** Funcional  
**Método:** GET  
**Endpoint:** `/api/produtos/{id}`

```gherkin
@api @produtos
Cenário: Consultar um produto existente pelo ID
  Dado que existe um produto com o ID "P005"
  Quando for enviada uma requisição GET para "/api/produtos/P005"
  Então a API deve retornar status 200
  E deve retornar os dados do produto "P005"
```

## API-CT003-Consulta de produto inexistente

**Tipo:** Funcional - Negativo  
**Método:** GET  
**Endpoint:** `/api/produtos/{id}`

```gherkin
@api @produtos @negativo
Cenário: Consultar um produto inexistente
  Dado que não existe um produto com o ID "P999"
  Quando for enviada uma requisição GET para "/api/produtos/P999"
  Então a API deve retornar status 404
  E deve retornar o código de erro "PRODUTO_NAO_ENCONTRADO"
```


## API-CT004-Calcular carrinho com dados válidos

**Tipo:** Funcional  
**Método:** POST  
**Endpoint:** `/api/carrinho/calcular`

```gherkin
@api @carrinho
Cenário: Calcular carrinho com item válido
  Dado que o carrinho possui 1 unidade do produto "P005"
  E nenhum cupom foi informado
  Quando for enviada uma requisição POST para "/api/carrinho/calcular"
  Então a API deve retornar status 200
  E o subtotal deve ser R$ 100,00
  E o desconto deve ser R$ 0,00
  E o frete deve ser R$ 19,90
  E o valor faltante para frete grátis deve ser R$ 100,00
  E o total deve ser R$ 119,90
```


## API-CT005-Calcular carrinho sem informar itens

**Tipo:** Funcional - Negativo  
**Método:** POST  
**Endpoint:** `/api/carrinho/calcular`

```gherkin
@api @carrinho @negativo
Cenário: Calcular carrinho sem informar itens
  Quando for enviada uma requisição POST para "/api/carrinho/calcular" sem o campo "itens"
  Então a API deve retornar status 422
  E deve retornar o código de erro "ITENS_OBRIGATORIOS"
```

## API-CT006-Calcular carrinho com múltiplos produtos, cupom e frete grátis

**Tipo:** Funcional  
**Método:** POST  
**Endpoint:** `/api/carrinho/calcular`

```gherkin
@api @carrinho @cupom @frete
Cenário: Calcular carrinho com múltiplos produtos e cupom válido
  Dado que o carrinho possui 1 unidade do produto "P002" no valor de R$ 139,90
  E 1 unidade do produto "P005" no valor de R$ 100,00
  E o cupom "BEMVINDO10" foi informado
  Quando for enviada uma requisição POST para "/api/carrinho/calcular"
  Então a API deve retornar status 200
  E o subtotal deve ser R$ 239,90
  E o desconto deve ser R$ 23,99
  E o frete deve ser R$ 0,00
  E o frete grátis deve ser verdadeiro
  E o total deve ser R$ 215,91
```

## API-CT007-Criar pedido com dados válidos e cupom

**Tipo:** Funcional / Integração  
**Método:** POST  
**Endpoint:** `/api/pedidos`

```gherkin
@api @pedido @cupom
Cenário: Criar pedido com dados válidos e cupom BEMVINDO10
  Dado que o cliente informou nome, e-mail e CEP válidos
  E o pedido possui 1 unidade do produto "P005"
  E foi informado o cupom "BEMVINDO10"
  Quando for enviada uma requisição POST para "/api/pedidos"
  Então a API deve retornar status 201
  E deve gerar um número de pedido no formato "VZ-000000"
  E o subtotal deve ser R$ 100,00
  E o desconto deve ser R$ 10,00
  E o frete deve ser R$ 19,90
  E o total deve ser R$ 109,90
  E o cupom deve constar como aplicado
```