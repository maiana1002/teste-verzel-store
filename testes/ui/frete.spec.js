
import { test, expect } from '@playwright/test';

test.describe('Frete grátis', () => {

  test('AUT-002 - Frete grátis acima de R$ 200', async ({ page }) => {

    // 1. Acessar a loja
    await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');

    // 2. Adicionar a Jaqueta Corta-Vento
    await page
      .getByRole('article', { name: 'Jaqueta Corta-Vento' })
      .getByRole('button')
      .click();

    // 3. Acessar o carrinho
    await page
      .getByRole('link', { name: 'Carrinho 1 itens no carrinho' })
      .click();

    // 4. Localizar o resumo do pedido
    const resumo = page.getByRole('region').filter({
      has: page.getByRole('heading', { name: 'Resumo do pedido' })
    });

    // 5. Validar subtotal
    await expect(
      resumo.locator('[data-valor="subtotal"]')
    ).toHaveText('R$ 229,90');

    // 6. Validar frete grátis
    await expect(
      resumo.getByText('Grátis', { exact: true })
    ).toBeVisible();

    // 7. Validar total
    await expect(
      resumo.locator('dd').filter({ hasText: 'R$ 229,90' }).last()
    ).toHaveText('R$ 229,90');

  });

});
