
import { test, expect } from '@playwright/test';

test('AUT-003 - Limite máximo de 5 unidades por produto', async ({ page }) => {

  // 1. Acessar a loja
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

  // 4. Localizar os controles de quantidade
  const quantidade = page.getByRole('status', {
    name: 'Quantidade de Mochila Urbana 20L'
  });

  const aumentar = page.getByRole('button', {
    name: 'Aumentar quantidade de Mochila Urbana 20L'
  });

  // 5. Aumentar de 1 para 5 unidades
  for (let i = 1; i < 5; i++) {
    await aumentar.click();
  }

  // 6. Validar quantidade máxima
  await expect(quantidade).toHaveText('5');

  // 7. Validar que não é possível aumentar para 6
  await expect(aumentar).toBeDisabled();

  // 8. Validar subtotal de 5 mochilas
  await expect(
    page.locator('[data-valor="subtotal"]')
  ).toHaveText('R$ 500,00');

});
