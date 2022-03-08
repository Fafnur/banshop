import { OrderEntity } from './order.models';
import { orderAdapter, OrderPartialState, orderInitialState } from './order.reducer';
import * as OrderSelectors from './order.selectors';

describe('Order Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getOrderId = (it: OrderEntity) => it.id;
  const createOrderEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as OrderEntity);

  let state: OrderPartialState;

  beforeEach(() => {
    state = {
      order: orderAdapter.setAll([createOrderEntity('PRODUCT-AAA'), createOrderEntity('PRODUCT-BBB'), createOrderEntity('PRODUCT-CCC')], {
        ...orderInitialState,
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true,
      }),
    };
  });

  describe('Order Selectors', () => {
    it('getAllOrder() should return the list of Order', () => {
      const results = OrderSelectors.getAllOrder(state);
      const selId = getOrderId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = OrderSelectors.getSelected(state) as OrderEntity;
      const selId = getOrderId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getOrderLoaded() should return the current "loaded" status', () => {
      const result = OrderSelectors.getOrderLoaded(state);

      expect(result).toBe(true);
    });

    it('getOrderError() should return the current "error" state', () => {
      const result = OrderSelectors.getOrderError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
