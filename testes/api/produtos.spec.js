import { test, expect } from '@playwright/test';

test('AUT-API-001 - Listar produtos disponíveis', async ({ request }) => {

  // 1. Realizar a requisição GET
  const resposta = await request.get(
    'https://verzel-store.qa-test-verzel-store.workers.dev/api/produtos'
  );

  // 2. Validar status HTTP
  expect(resposta.status()).toBe(200);

  // 3. Converter resposta para JSON
  const dados = await resposta.json();

  // 4. Verificar se a resposta contém o produto esperado
  const conteudo = JSON.stringify(dados);

  expect(conteudo).toContain('P005');
  expect(conteudo).toContain('Mochila Urbana 20L');

  // 5. Verificar outro produto do catálogo
  expect(conteudo).toContain('P007');
  expect(conteudo).toContain('Jaqueta Corta-Vento');

});
