
import { test, expect } from '@playwright/test';

test('AUT-001 - Aplicar cupom BEMVINDO10', async ({ page }) => {

  // 1. Acessar a Verzel Store
  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');

  // 2. Adicionar a mochila ao carrinho
  await page
    .getByRole('article', { name: 'Mochila Urbana 20L' })
    .getByRole('button')
    .click();

  // 3. Acessar o carrinho
  await page
    .getByRole('link', { name: 'Carrinho 1 itens no carrinho' })
    .click();

  // 4. Aplicar o cupom
  await page
    .getByRole('textbox', { name: 'Cupom de desconto' })
    .fill('BEMVINDO10');

  await page
    .getByRole('button', { name: 'Aplicar cupom' })
    .click();

  // 5. Validar aplicação do cupom
  await expect(
    page.getByText('Cupom BEMVINDO10 aplicado.')
  ).toBeVisible();

  // 6. Identificar o resumo do pedido
  const resumo = page.getByRole('region').filter({
    has: page.getByRole('heading', { name: 'Resumo do pedido' })
  });

  // 7. Validar subtotal
  await expect(
    resumo.locator('[data-valor="subtotal"]')
  ).toHaveText('R$ 100,00');

  // 8. Validar desconto
  await expect(
    resumo.locator('dd').filter({ hasText: '- R$ 10,00' })
  ).toHaveText('- R$ 10,00');

  // 9. Validar frete
  await expect(
    resumo.locator('dd').filter({ hasText: 'R$ 19,90' })
  ).toHaveText('R$ 19,90');

  // 10. Validar total
  await expect(
    resumo.locator('dd').filter({ hasText: 'R$ 109,90' })
  ).toHaveText('R$ 109,90');

});
