
import { test, expect } from '@playwright/test';

test('AUT-API-002 - Calcular carrinho sem cupom', async ({ request }) => {

  // 1. Enviar os dados do carrinho
  const resposta = await request.post(
    'https://verzel-store.qa-test-verzel-store.workers.dev/api/carrinho/calcular',
    {
      data: {
        itens: [
          {
            produtoId: 'P005',
            quantidade: 1
          }
        ]
      }
    }
  );

  // 2. Validar o status HTTP
  expect(resposta.status()).toBe(200);

  // 3. Obter o resultado
  const dados = await resposta.json();

  // 4. Validar os valores calculados
  expect(dados.subtotal).toBe(100);
  expect(dados.desconto).toBe(0);
  expect(dados.frete).toBe(19.90);
  expect(dados.total).toBe(119.90);

});


test('AUT-API-003 - Rejeitar quantidade acima de 5 unidades', async ({ request }) => {

  // 1. Enviar 6 unidades do mesmo produto
  const resposta = await request.post(
    'https://verzel-store.qa-test-verzel-store.workers.dev/api/carrinho/calcular',
    {
      data: {
        itens: [
          {
            produtoId: 'P005',
            quantidade: 6
          }
        ]
      }
    }
  );

  // 2. Validar que a API rejeita a quantidade
  expect(resposta.status()).toBe(422);

  // 3. Validar o código do erro
  const dados = await resposta.json();

  expect(dados.codigo).toBe('QUANTIDADE_MAXIMA_EXCEDIDA');

});
