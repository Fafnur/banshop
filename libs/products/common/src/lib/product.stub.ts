import { Dictionary } from '@ngrx/entity';

import { Product, ProductsResponse } from './product.interface';

/* eslint-disable max-len */
export const PRODUCTS_RESPONSE_STUB: ProductsResponse = {
  range: "'Активные'!A1:Z1000",
  majorDimension: 'ROWS',
  values: [
    [
      'reebook-smart',
      'Reebok Lite 3',
      'Легкие стильные кроссовки для бега',
      '3990',
      '39,40,41,43',
      'Кто сказал, что кроссовки не могут выглядеть одинаково стильно на пробежке и после нее? Эта мужская модель Reebok для бега доказывает обратное. Легкая подметка обеспечивает амортизацию во время тренировки. Уровень комфорта остается прежним, когда ты идешь в них на ланч с друзьями.',
      `https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ae9480c8e22b4ee5a393ad11008f9393_9366/Krossovki_Reebok_Lite_3_chernyj_G57564_01_standard.jpg\nhttps://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e40ebe94f0844d47bc5ead11008f733a_9366/Krossovki_Reebok_Lite_3_chernyj_G57564_02_standard.jpg\nhttps://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/10dde3de9c1945078219ad11008f654d_9366/Krossovki_Reebok_Lite_3_chernyj_G57564_03_standard.jpg`,
    ],
  ],
};

export const PRODUCT_STUB: Product = {
  id: 1,
  slug: 'reebook-smart',
  title: 'Reebok Lite 3',
  subtitle: 'Легкие стильные кроссовки для бега',
  description:
    'Кто сказал, что кроссовки не могут выглядеть одинаково стильно на пробежке и после нее? Эта мужская модель Reebok для бега доказывает обратное. Легкая подметка обеспечивает амортизацию во время тренировки. Уровень комфорта остается прежним, когда ты идешь в них на ланч с друзьями.',
  price: 4500,
  sizes: [39, 40, 41, 43],
  photos: [
    'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ae9480c8e22b4ee5a393ad11008f9393_9366/Krossovki_Reebok_Lite_3_chernyj_G57564_01_standard.jpg',
    'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e40ebe94f0844d47bc5ead11008f733a_9366/Krossovki_Reebok_Lite_3_chernyj_G57564_02_standard.jpg',
    'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/10dde3de9c1945078219ad11008f654d_9366/Krossovki_Reebok_Lite_3_chernyj_G57564_03_standard.jpg',
  ],
};
/* eslint-enable max-len */

export const PRODUCTS_STUB: Product[] = [PRODUCT_STUB];
export const PRODUCTS_ENTITIES_STUB: Dictionary<Product> = { [PRODUCT_STUB.id]: PRODUCT_STUB };
