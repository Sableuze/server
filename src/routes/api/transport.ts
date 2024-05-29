import { Router } from 'express';

import { transportsController } from '@app/controllers';
import { Validation } from '@app/middlewares';
import { Transport } from '@app/models';

const router = Router();
router.route('/types').get(transportsController.getTransportTypes);
router.route('/').get(transportsController.items);
router
  .route('/')
  .post(Validation.req(Transport, ['write']), transportsController.addItem);
router
  .route('/')
  .delete(Validation.req(Transport, ['write']), transportsController.deleteItem);

export default router;
